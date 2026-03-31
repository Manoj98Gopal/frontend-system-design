import ChatLayout from "../components/LiveStreamChat/ChatLayout";

const YoutubeLiveStream = () => {
  return (
    <div className="flex gap-2 p-4">
      <div className="flex-3 rounded-xl overflow-hidden">
        <iframe
          width="100%"
          height="700"
          src="https://www.youtube.com/embed/hwG3bvxkSJQ?si=GGGdLzIicpBTEaLl"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      </div>
      <div className="flex-1">
        <ChatLayout />
      </div>
    </div>
  );
};

export default YoutubeLiveStream;
