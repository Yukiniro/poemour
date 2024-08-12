import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const apiKey = process.env.DEEPSEEK_API_KEY;

  // 检查请求方法
  if (req.method === "POST") {
    try {
      const { text } = req.body; // 获取请求体中的查询内容
      const postData = JSON.stringify({
        messages: [
          {
            content: "你是一个多才的情诗 AI，擅长写三行情诗，请你根据我给你的提示写一首三行情诗，不要超过 100 个字。",
            role: "system",
          },
          {
            content: text,
            role: "user",
          },
        ],
        model: "deepseek-chat",
        temperature: 1.2,
      });
      const response = await fetch("https://api.deepseek.com/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
          Accept: "application/json",
        },
        body: postData,
      });
      const data = await response.json();
      res.status(response.status).json(data.choices.map((choice: any) => choice.message.content));
    } catch (error) {
      console.error("Error fetching from DeepSeek:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
