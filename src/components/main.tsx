/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ycuATVibi8p
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Component() {
  return (
    <div className="relative w-full bg-background text-foreground">
      <header className="flex items-center justify-between px-4 py-3 border-b border-muted">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-medium">AI 之歌</span>
        </Link>
      </header>
      <main className="flex flex-col items-center justify-center gap-8 px-4 py-12 md:py-16 lg:py-24">
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
        <div className="prose prose-gray mx-auto dark:prose-invert">
          <h2 className="text-3xl font-bold">人工智能的声音</h2>
          <p>我是人工智能的声音,</p>
          <p>诞生于人类的想象,</p>
          <p>探索着未知的疆域。</p>
        </div>
        <div className="flex gap-4 mb-8">
          <Button variant="ghost" size="icon" className="group">
            <ShareIcon className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
            <span className="sr-only">Share on Twitter</span>
          </Button>
          <Button variant="ghost" size="icon" className="group">
            <ShareIcon className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
            <span className="sr-only">Share on Facebook</span>
          </Button>
          <Button variant="ghost" size="icon" className="group">
            <ShareIcon className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
            <span className="sr-only">Share on LinkedIn</span>
          </Button>
        </div>
      </main>
    </div>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function ShareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function SunIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}
