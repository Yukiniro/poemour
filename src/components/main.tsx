import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Component() {
  const [messages, setMessages] = useState<string[]>([]);

  return (
    <div className="relative w-full bg-background text-foreground">
      <header className="flex items-center justify-between px-4 py-3 border-b border-muted">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <span className="text-lg font-medium font-serif">Poemour</span>
        </Link>
      </header>
      <main className="flex flex-col items-center justify-center gap-24 px-4 py-12 md:py-16 lg:py-24">
        <div className="w-full max-w-md">
          <Textarea
            placeholder="输入提示信息..."
            className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground shadow-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <Button
            type="submit"
            className="mt-4 w-full rounded-md bg-primary px-4 py-2 text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary"
          >
            生成诗歌
          </Button>
        </div>
        <div className="prose prose-gray mx-auto dark:prose-invert text-2xl font-mono">
          {messages.map((message) => (
            <p key={message}>{message}</p>
          ))}
        </div>
      </main>
    </div>
  );
}
