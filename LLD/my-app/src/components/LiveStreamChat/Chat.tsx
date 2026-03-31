import type { ChatsData } from "./data"

const Chat = ({username,message,profilePicture}:ChatsData) => {
  return (
    <div>
      <div className="flex items-center gap-2 p-2">
        <img src={profilePicture} alt={username} className="w-8 h-8 rounded-full" />
        <div>
          <p className="font-bold">{username}</p>
          <p>{message}</p>
        </div>
      </div>
    </div>
  )
}

export default Chat