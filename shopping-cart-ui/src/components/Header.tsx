import { FaShoppingCart } from "react-icons/fa";
import { useCartContext } from "../context/CartContext";
import { useState } from "react";
import CartDropdown from "./CartModal";

const Header = () => {
  const { totalQuantity } = useCartContext();

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center shadow-md  mt-4 px-2 pb-2 bg-white ">
        <h1 className="text-3xl font-bold text-blue-600"> ShopMate</h1>
        <div className="mr-2 relative inline-block">
          <button
            type="button"
            className="bg-gray-500 text-white p-4 rounded-full hover:bg-gray-600 transition flex items-center justify-center cursor-pointer"
            onClick={() => setShowDropdown((prev) => !prev)}
          >
            <FaShoppingCart size={20} />
          </button>
          {totalQuantity > 0 && (
            <span className="absolute bottom-10 left-8 h-7 w-7 rounded-full bg-red-500 ring-2 ring-white text-white flex items-center justify-center">
              {totalQuantity}
            </span>
          )}
          <CartDropdown showDropdown={showDropdown} />
        </div>
      </header>
    </>
  );
};

export default Header;
