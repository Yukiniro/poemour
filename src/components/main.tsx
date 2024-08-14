import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useMemo, useRef, useState } from "react";
import { Loading } from "./loading";
import TypeIt from "typeit-react";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { calcTextSize } from "@/util";

export default function Component() {
  const [messages, setMessages] = useState<string[]>([]);
  const [fontFamily, setFontFamily] = useState<string>("cursive");
  const [fontSize, setFontSize] = useState<number>(36);
  const [lintHeight, setLineHeight] = useState<number>(40);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const contentRef = useRef<HTMLParagraphElement>(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      if (process.env.NEXT_PUBLIC_IS_LOCAL_HOST) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setMessages(["月光如水洒满窗，", "静谧夜空星辰藏，", "一壶清酒醉斜阳。"]);
      } else {
        const text = textAreaRef.current!.value;
        const response = await fetch("/api/get-poe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text }),
        });
        const data = await response.json();
        setMessages(data[0].split("\n"));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleExport = async () => {
    if (contentRef.current) {
      const canvas = await html2canvas(contentRef.current);
      const blob = await new Promise((resolve, reject) => {
        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error("Failed to create blob"));
            }
          },
          "image/png",
          1,
        );
      });
      saveAs(blob as Blob, "poemour.png");
    }
  };

  const showMessage = !loading && messages.length > 0;

  const { width, height } = useMemo(() => {
    let maxWidth = 0;
    let maxHeight = 0;
    const fonts = `${fontSize}px ${fontFamily}`;
    messages.forEach((message: string) => {
      const { width, height } = calcTextSize(null, message, fonts);
      maxWidth = Math.max(maxWidth, width);
      maxHeight += height;
    });
    return { width: maxWidth, height: maxHeight };
  }, [fontFamily, fontSize, messages]);
  const messageStyle = useMemo(() => {
    return {
      fontFamily,
      fontSize: `${fontSize}px`,
      lineHeight: `${lintHeight}px`,
    };
  }, [fontFamily, fontSize, lintHeight]);

  return (
    <div className="relative w-full bg-background text-foreground">
      <div className="flex items-center justify-between px-4 py-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <span className="text-4xl font-medium font-serif">Poemour</span>
        </Link>
      </div>
      <main className="flex flex-col items-center justify-center gap-24 px-4 py-12 md:py-16 lg:py-24">
        <div className="w-full max-w-md">
          <Textarea
            ref={textAreaRef}
            placeholder="输入提示信息..."
            className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground shadow-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <Button
            onClick={handleClick}
            className="mt-4 w-full rounded-md bg-primary px-4 py-2 text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary"
          >
            生成
          </Button>
          <div className="prose prose-gray dark:prose-invert text-2xl font-mono py-12">
            {loading && (
              <div className="py-12">
                <Loading />
              </div>
            )}
            {showMessage && (
              <>
                <div className="flex justify-center">
                  <Button onClick={handleExport}>下载</Button>
                </div>
                <div ref={contentRef} style={{ width, height }} className="text-[0px] leading-[0px] my-12 m-auto">
                  <TypeIt as="div" options={{ cursor: false }}>
                    {messages.map((message) => (
                      <p className="py-2" style={messageStyle} key={message}>
                        {message}
                      </p>
                    ))}
                  </TypeIt>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
