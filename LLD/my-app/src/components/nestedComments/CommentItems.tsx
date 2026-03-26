import type { CommentItem } from "../../utils/CommentData"
import PostHeader from "./PostHeader"

const CommentItems = ({userName,time,profilePic,comment,replies}:CommentItem) => {

  return (
    <div className="space-y-2 border-l p-2 pb-8">
        <PostHeader userName={userName} time={time} profilePic={profilePic} />
        <p className="text-sm text-gray-600 max-w-[60%]">{comment}</p>
        <div className="pl-12">
        {replies?.map((comment,idx) => <CommentItems key={idx} {...comment} />)}
        </div>
    </div>
  )
}

export default CommentItems