import {getTimeAgo} from "../../utils/CommentData"

interface PostHeaderProps {
  profilePic: string;
  userName: string;
  time: string;
}

const PostHeader = ({ profilePic, userName, time }: PostHeaderProps) => {
  return (
    <div className="flex items-center gap-2">
      <img
        src={profilePic}
        alt="profilePic"
        className="w-10 h-10 rounded-full overflow-hidden"
      />
      <h2>
        {userName}
      </h2>
      <span>•</span>
      <p>
        {getTimeAgo?.(time)}
      </p>
    </div>
  );
};

export default PostHeader;
