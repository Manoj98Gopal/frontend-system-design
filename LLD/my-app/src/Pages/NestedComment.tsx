import CommentItems from "../components/nestedComments/CommentItems";
import PostHeader from "../components/nestedComments/PostHeader";
import { commentsData, type CommentItem } from "../utils/CommentData";

interface PostDataType {
  userName: string;
  profilePic: string;
  time: string;
  title: string;
  postImage: string;
}

const postData: PostDataType = {
  userName: "Manoj Gopal",
  profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
  time: "2026-03-04T10:35:45Z",
  title: "I built a CLI that catches LLM slop patterns Discussion",
  postImage:
    "https://media.licdn.com/dms/image/v2/D5622AQFDltjomsfdKQ/feedshare-shrink_800/B56ZlXe_uKI0Ag-/0/1758109379295?e=2147483647&v=beta&t=uIDKvZLKMfj52z7wQMsx4o9pGkZhlxROA21kwv4IMYc"
};

const NestedComment = () => {


  const comments : CommentItem[] = commentsData

  return <div className="py-8 max-w-[70%] m-auto space-y-8">

       <div className="space-y-2">
      
        <div className="border space-y-2 rounded-2xl p-8 max-w-[590px]">


        <PostHeader {...postData} />
        <h1 className="text-xl font-semibold">{postData.title}</h1>
        <div className="w-125">
          <img  src={postData.postImage} alt="post Image"
            className="h-125 object-cover object-center"
          />
        </div>
        </div>
       </div>
       <div className="flex flex-col">
        {comments?.map((comment,idx) => <CommentItems key={idx} {...comment} />)}
       </div>
  </div>
};

export default NestedComment;
