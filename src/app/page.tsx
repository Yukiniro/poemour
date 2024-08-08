"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import GithubCorners from "@yukiniro/react-github-corners";
import "@yukiniro/react-github-corners/dist/style.css";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GithubCorners href="https://github.com/Yukiniro/next-starter" />
      <div className="z-10 max-w-5xl w-full font-mono text-lg text-center">
        <h1>Hello World</h1>
        <Button onClick={() => setCount(count + 1)}>Click Count: {count}</Button>
      </div>
    </main>
  );
}
