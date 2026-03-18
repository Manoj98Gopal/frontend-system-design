const MemeShimmer = () => {
  return (
    <article className="h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="aspect-square animate-pulse bg-slate-200" />

      <div className="space-y-3 p-4">
        {/* <div className="h-5 w-11/12 animate-pulse rounded-full bg-slate-200" /> */}
        {/* <div className="h-5 w-8/12 animate-pulse rounded-full bg-slate-200" /> */}

        <div className="flex items-center justify-between gap-3 pt-2">
          <div className="h-4 w-24 animate-pulse rounded-full bg-slate-200" />
          <div className="h-7 w-20 animate-pulse rounded-full bg-slate-200" />
        </div>
      </div>
    </article>
  );
};

export default MemeShimmer;
