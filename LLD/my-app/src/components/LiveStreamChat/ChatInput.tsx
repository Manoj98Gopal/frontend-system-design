import { useState } from "react";

interface ChatInputProps {
  onSendMessage?: (message: string) => void;
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [message, setMessage] = useState("");


  return (
    <div className="h-full w-full flex items-center relative">
      <input
        type="text"
        placeholder="Type your message..."
        className="w-full h-full px-4 py-2 border-none outline-none rounded-b-xl"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button 
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-xl"
      onClick={() => {
        if (message.trim() !== "") {
          onSendMessage?.(message);
          setMessage("");
        }
      }}
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
