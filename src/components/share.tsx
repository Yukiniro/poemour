import { TwitterShareButton, XIcon, WeiboShareButton, WeiboIcon, EmailShareButton, EmailIcon } from "react-share";
import { Button } from "@/components/ui/button";

function Share(props: { messages: string[]; handleExport: () => void }) {
  const { messages, handleExport } = props;
  return (
    <div className="w-full flex justify-center items-center gap-4 fixed bottom-32">
      <TwitterShareButton url="poemour.vercel.app" title={messages.join("")} hashtags={["poemour"]}>
        <XIcon size={40} round={true} />
      </TwitterShareButton>
      <WeiboShareButton url="poemour.vercel.app" title={messages.join("")}>
        <WeiboIcon size={40} round={true} />
      </WeiboShareButton>
      <EmailShareButton url="poemour.vercel.app" subject={messages.join("")}>
        <EmailIcon size={40} round={true} />
      </EmailShareButton>
      <Button size="icon" className="rounded-full" onClick={handleExport}>
        <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 16 16">
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M11.78 7.159a.75.75 0 0 0-1.06 0l-1.97 1.97V1.75a.75.75 0 0 0-1.5 0v7.379l-1.97-1.97a.75.75 0 0 0-1.06 1.06l3.25 3.25L8 12l.53-.53l3.25-3.25a.75.75 0 0 0 0-1.061M2.5 9.75a.75.75 0 0 0-1.5 0V13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9.75a.75.75 0 0 0-1.5 0V13a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z"
            clip-rule="evenodd"
          />
        </svg>
      </Button>
    </div>
  );
}

export default Share;
