import { useEffect, useState } from "react";
import MemeShimmer from "../components/MemeShimmer";
import MemeCard from "../components/MemeCard";


export type Detail = {
  postLink: string;
  subreddit: string;
  title: string;
  url: string;
  nsfw: boolean;
  spoiler: boolean;
  author: string;
  ups: number;
  preview: string[];
};


const MemePosts = () => {
      const [data, setData] = useState<Detail[]>([]);
      const [loading, setLoading] = useState(false);
      const shimmerCards = Array.from({ length: 10 });
    
      const fetchData = async (length: number) => {
        try {
          setLoading(true);
          const response = await fetch(`https://meme-api.com/gimme/${length}`);
          const data = await response.json();
          setData((props) => [...data?.memes,...props]);
        } catch (error) {
          console.log("error ", error);
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchData(30);
          window.addEventListener("scroll",handleScroll)
        return () => window.removeEventListener("scroll",handleScroll)
      }, []);


      const handleScroll = () => {
        if(window.scrollY + window.innerHeight == document.documentElement.scrollHeight){
          fetchData(20)
        }
      }


  return (
    <div className="min-h-screen bg-slate-50 p-6">
      

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

          <>
          {data?.map((details, idx) => (
            <div key={idx} className="h-full">
              <MemeCard {...details} />
            </div>
          ))}
          </>

          {loading && <>
           {shimmerCards.map((_, idx) => (
            <div key={idx} className="h-full">
              <MemeShimmer />
            </div>
          ))}
          </>}

        </div>


      
    </div>  )
}

export default MemePosts