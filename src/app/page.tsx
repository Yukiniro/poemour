"use client";

import GithubCorners from "@yukiniro/react-github-corners";
import Main from "@/components/main";
import "@yukiniro/react-github-corners/dist/style.css";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <GithubCorners href="https://github.com/Yukiniro/poemour" />
      <Main />
      <Analytics />
    </main>
  );
}
