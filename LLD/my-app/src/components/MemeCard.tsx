type Detail = {
  title: string;
  url?: string;
  author: string;
  subreddit?: string;
  ups?: number;
  nsfw?: boolean;
  spoiler?: boolean;
};

const MemeCard = ({ title, url, author }: Detail) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-square shrink-0 overflow-hidden bg-slate-100">
        {url
          ? <img
              src={url}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          : <div className="flex h-full items-center justify-center text-sm font-medium text-slate-500">
              No image available
            </div>}
      </div>

      <div className="flex flex-1 flex-col justify-between space-y-3 p-4">
        <h2 className="line-clamp-2 text-lg font-bold leading-snug text-slate-900">
          {title}
        </h2>

        <div className="flex items-center justify-between gap-3 text-sm text-slate-600">
          <p className="truncate font-medium">
            u/{author}
          </p>
        </div>
      </div>
    </article>
  );
};

export default MemeCard;
