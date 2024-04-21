import { Hash, Menu } from "lucide-react";
import { MobileToggle } from "@/components/mobile-toggle";
import { UserAvatar } from "@/components/user-avatar";
import { SocketIndicator } from "@/components/socket-indicator";
import { ChatVideoButton } from "@/components/chat/chat-video-button";

interface ChatHeaderProp {
  serverId: string;
  name: string;
  type: "channel" | "conversation";
  imageUrl?: string;
}

export const ChatHeader = ({
  serverId,
  name,
  type,
  imageUrl,
}: ChatHeaderProp) => {
  return (
    <div className="text-md font-semibold flex px-3 items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2">
      <MobileToggle serverId={serverId} />
      {type === "channel" && <Hash className="h-5 w-5 text-zinc-400 mr-2" />}
      {type === "conversation" && (
        <UserAvatar src={imageUrl} className="h-5 w-5 text-zinc-400 mr-2" />
      )}
      <p className="font-semibold text-zinc-500 dark:text-zinc-400 mr-2">
        {name}
      </p>
      <div className="ml-auto flex itmes-center">
        {type === "conversation" && <ChatVideoButton />}
        <SocketIndicator />
      </div>
    </div>
  );
};
