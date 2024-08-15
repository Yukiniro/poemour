import Main from "@/components/main";
import "@yukiniro/react-github-corners/dist/style.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Poemour",
  description: "不管是处于热恋中的情侣，还是尚未表白的暗恋者，都能在 Poemour 这个网站上获得符合自己心境的三行情书。",
  keywords: ["情书", "三行情书", "情诗", "情话", "情话网站", "情话生成器", "AI"],
  openGraph: {
    title: "Poemour",
    description: "生成你的专属三行情书",
    url: "https://poemour.com",
    siteName: "Poemour",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Poemour",
    description: "生成你的专属三行情书",
    creator: "@Yukiro94317534",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Main />
      <Analytics />
    </main>
  );
}
