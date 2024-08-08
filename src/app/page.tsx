"use client";

import { useState } from "react";
import GithubCorners from "@yukiniro/react-github-corners";
import Main from "@/components/main";
import "@yukiniro/react-github-corners/dist/style.css";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GithubCorners href="https://github.com/Yukiniro/next-starter" />
      <Main />
    </main>
  );
}
