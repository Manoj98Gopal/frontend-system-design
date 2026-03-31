interface ProductCardProps {
  id?: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  discountPercentage: number;
}

const ProductCard = ({
  title,
  description,
  price,
  thumbnail,
  discountPercentage
}: ProductCardProps) => {

  const discountedPrice = price - price * discountPercentage / 100;

  return (
    <div className="group border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 bg-white">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-56 object-contain group-hover:scale-105 transition duration-300"
        />

        {/* Discount Badge */}
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-md font-semibold">
          {discountPercentage}% OFF
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-2">
          {description}
        </p>

        {/* Price Section */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-lg font-bold text-green-600">
            ${discountedPrice.toFixed(2)}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ${price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
