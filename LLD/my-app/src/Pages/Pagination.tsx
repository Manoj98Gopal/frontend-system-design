import { useEffect, useState } from "react";
import ProductCard from "../components/pagination/ProductCard";
import ProductCardSkeleton from "../components/pagination/ProductCardSkeleton";
import PageActions from "../components/pagination/PageActions";

interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  discountPercentage: number;
}

const PAGE_SIZE = 10;

const Pagination = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);


  const fetchProducts = async (currentPage: number) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?select=id,title,description,thumbnail,price,discountPercentage&limit=${PAGE_SIZE}&skip=${currentPage *
          PAGE_SIZE}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const result = await response.json();
      setProducts(result.products);
      setTotalProducts(result.total);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-8 py-4 space-y-4">


    <div className="min-h-190">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {loading ? <>{Array.from({length: PAGE_SIZE}).map((_,index) => <ProductCardSkeleton key={index} />)}</> : 
        <>{products.map(product => <ProductCard key={product.id} {...product} />)}</>}
      </div>
    </div>

      <div>
        <PageActions 
        totalPages={Math.ceil(totalProducts / PAGE_SIZE)} 
        currentPage={currentPage + 1}
        onPageChange={setCurrentPage}
        />
      </div>
      <div />
    </div>
  );
};

export default Pagination;
