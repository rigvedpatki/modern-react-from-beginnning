import { useCartContext } from "../context/CartContext";
import type { Product } from "../types/products";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, removeFromCart, cartItems } = useCartContext();
  const cartItem = cartItems.find((item) => item.product.id === product.id);
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 object-cover rounded mb-4"
      />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-500 text-sm mb-4">{product.description}</p>
      <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
      <div className="flex flex-row items-center mt-4 gap-1 justify-center">
        <button
          onClick={() => removeFromCart(product.id)}
          className=" bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={cartItem?.quantity === 0 || cartItem === undefined}
        >
          -
        </button>
        <div className="p-2">{cartItem?.quantity || 0}</div>
        <button
          onClick={() => addToCart(product)}
          className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={cartItem?.quantity === product.quantity}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
