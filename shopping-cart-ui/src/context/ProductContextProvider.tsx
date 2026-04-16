import useFetchProducts from "../hooks/use-fetch-products";
import { ProductContext } from "./ProductContext";

type ProductContextProviderProps = {
  children: React.ReactNode;
};

const ProductContextProvider: React.FC<ProductContextProviderProps> = ({
  children,
}) => {
  const { products, loading, error } = useFetchProducts();
  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
