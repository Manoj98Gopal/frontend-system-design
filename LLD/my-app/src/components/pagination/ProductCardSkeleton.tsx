const ProductCardSkeleton = () => {
  return (
    <div className="border rounded-2xl overflow-hidden shadow-sm bg-white animate-pulse">
      {/* Image */}
      <div className="relative overflow-hidden">
        <div className="w-full h-56 bg-gray-200" />

        {/* Badge Skeleton */}
        <div className="absolute top-3 left-3 h-5 w-16 bg-gray-300 rounded-md" />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <div className="h-5 bg-gray-200 rounded w-3/4" />

        {/* Description */}
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded w-full" />
          <div className="h-3 bg-gray-200 rounded w-5/6" />
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-2">
          <div className="h-5 w-20 bg-gray-200 rounded" />
          <div className="h-4 w-14 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
