import { useCartContext } from "../context/CartContext";

type CartDropdownProps = {
  showDropdown: boolean;
};

const CartDropdown: React.FC<CartDropdownProps> = ({ showDropdown }) => {
  const { cartItems, addToCart, removeFromCart, totalAmount, clearCart } =
    useCartContext();
  return (
    <>
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-80 bg-white border rounded shadow-lg z-50">
          <div className="p-4">
            <h2 className="font-semibold text-lg mb-2">Cart Items</h2>
            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-sm">
                Your cart is empty. Add some products!
              </p>
            ) : (
              <>
                <ul className="max-h-60 overflow-y-auto divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <li
                      key={item.product.id}
                      className="flex items-center justify-between py-2"
                    >
                      <div>
                        <p className="font-medium">{item.product.name}</p>
                        <p className="text-sm text-gray-500">
                          ${item.product.price.toFixed(2)} x {item.quantity}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                          disabled={item.quantity === 0}
                        >
                          -
                        </button>
                        <button
                          onClick={() => addToCart(item.product)}
                          className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                          disabled={item.quantity === item.product.quantity}
                        >
                          +
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex justify-between font-semibold">
                  <p className="font-medium">Total</p>
                  <p className="text-sm text-gray-500">
                    ${totalAmount.toFixed(2)}
                  </p>
                </div>
                <div className="mt-4 flex justify-center items-center">
                  <button
                    onClick={clearCart}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
                  >
                    🗑️ Clear Cart
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CartDropdown;
