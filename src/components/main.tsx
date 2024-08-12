import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useState } from "react";
import { Loading } from "./loading";

export default function Component() {
  const [messages, setMessages] = useState<string[]>([]);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full bg-background text-foreground">
      <div className="flex items-center justify-between px-4 py-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <span className="text-lg font-medium font-serif">Poemour</span>
        </Link>
      </div>
      <main className="flex flex-col items-center justify-center gap-24 px-4 py-12 md:py-16 lg:py-24">
        <div className="w-full max-w-md">
          <Textarea
            ref={textAreaRef}
            placeholder="输入提示信息（比如： 月亮、我和你）..."
            className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground shadow-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <Button
            onClick={handleClick}
            className="mt-4 w-full rounded-md bg-primary px-4 py-2 text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary"
          >
            生成情书
          </Button>
        </div>
        <div className="prose prose-gray mx-auto dark:prose-invert text-2xl font-mono">
          {loading ? (
            <Loading />
          ) : (
            messages.map((message) => (
              <p className="font-cursive text-4xl py-2" key={message}>
                {message}
              </p>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
