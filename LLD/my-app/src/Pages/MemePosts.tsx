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
      const shimmerCards = Array.from({ length: 8 });
    
      const fetchData = async (length: number) => {
        try {
          setLoading(true);
          const response = await fetch(`https://meme-api.com/gimme/${length}`);
          const data = await response.json();
          setData(data?.memes ?? []);
        } catch (error) {
          console.log("error ", error);
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchData(20);
      }, []);
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {loading ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {shimmerCards.map((_, idx) => (
            <div key={idx} className="h-full">
              <MemeShimmer />
            </div>
          ))}
        </div>
      ) : null}

      {!loading && data.length === 0 ? (
        <div className="flex min-h-[40vh] items-center justify-center text-base font-medium text-slate-500">
          No memes found.
        </div>
      ) : null}

      {!loading && data.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((details, idx) => (
            <div key={idx} className="h-full">
              <MemeCard {...details} />
            </div>
          ))}
        </div>
      ) : null}
    </div>  )
}

export default MemePosts