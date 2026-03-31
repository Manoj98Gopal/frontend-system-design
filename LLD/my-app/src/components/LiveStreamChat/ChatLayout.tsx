import { useEffect, useState } from "react";
import Chat from "./Chat";
import ChatInput from "./ChatInput";
import { Chats, type ChatsData,  } from "./data";

const LIMIT:number = 50

const ChatLayout = () => {


 const [chatList, setChatList] = useState<ChatsData[]>([]);


 useEffect(() => {
 const id = setInterval(() => {
      fetchChat();
    }, 2000);
    return () => {
        clearInterval(id);
    }
 },[])




 const fetchChat = () => {
    const randomIndex = Math.floor(Math.random() * Chats.length);
    const randomChat = Chats[randomIndex];
    setChatList((prev) => [randomChat,...prev.slice(0,LIMIT-1)]);
 }


  return (
    <div className="h-full w-full border rounded-xl flex flex-col">
      <div className="h-[660px] overflow-auto flex flex-col-reverse">
       {chatList?.map((data,idx) => {
        return <Chat key={idx} {...data} />
       })}
      </div>

      <div className="border-t flex-[8%]">
        <ChatInput onSendMessage={(message) => {
            const newChat:ChatsData = {
                id: Date.now(),
                message,
                username: "You",
                profilePicture: "https://randomuser.me/api/portraits/lego/1.jpg"
            };
            setChatList((prev) => [newChat, ...prev]);
        }} />
      </div>
    </div>
  );
};

export default ChatLayout;
