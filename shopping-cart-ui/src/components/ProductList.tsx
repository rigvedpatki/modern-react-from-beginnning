import { useProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products, loading, error } = useProductContext();
  return (
    <>
      {loading && <p>Loading products...</p>}
      {error && <div className="error"> ❌ {error}</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default ProductList;
