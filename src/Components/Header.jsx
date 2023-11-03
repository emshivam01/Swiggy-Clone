import { MdOutlineLocalOffer } from "react-icons/md";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineLogout,
  AiOutlineLogin,
} from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [btn, setBtn] = useState("Logout");

  const toggleBtn = () => {
    btn === "Logout" ? setBtn("Login") : setBtn("Logout");
  };

  return (
    <div className="flex items-center justify-between px-72 py-2 border-2 shadow-lg">
      <div className="w-[70px] rounded-full overflow-hidden">
        <img src="foodiefleet.png" alt="Foodie Fleet logo" />
      </div>

      <div className="">
        <ul className="flex gap-8 ">
          <li className="text-lg font-semibold  flex items-center gap-2 cursor-pointer">
            <AiOutlineHome size={25} />
            Home
          </li>
          <li className="text-lg font-semibold  flex items-center gap-2 cursor-pointer">
            <AiOutlineSearch size={25} />
            Search
          </li>
          <li className="text-lg font-semibold  flex items-center gap-2 cursor-pointer">
            {" "}
            <MdOutlineLocalOffer size={25} />
            Offers
          </li>
          <li className="text-lg font-semibold flex items-center gap-2 cursor-pointer">
            <AiOutlineUser size={25} />
            Sign in
          </li>

          <li className="text-lg font-semibold  flex items-center gap-2 cursor-pointer">
            <AiOutlineShoppingCart size={25} />
            Cart
          </li>
          <button
            onClick={toggleBtn}
            className="text-lg font-semibold  w-24 flex justify-center items-center gap-2 cursor-pointer "
          >
            {btn === "Login" ? (
              <AiOutlineLogout size={25} />
            ) : (
              <AiOutlineLogin size={25} />
            )}

            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
