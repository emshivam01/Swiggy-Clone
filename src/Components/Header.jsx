import { MdOutlineLocalOffer } from "react-icons/md";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineLogout,
  AiOutlineLogin,
} from "react-icons/ai";
import { GrRestaurant } from "react-icons/gr";
import { useState } from "react";
import { Link } from "react-router-dom";
import useCheckOnlineStatus from "../Utils/useCheckOnlineStatus";

const Header = () => {
  const [btn, setBtn] = useState("Logout");

  const toggleBtn = () => {
    btn === "Logout" ? setBtn("Login") : setBtn("Logout");
  };

  const status = useCheckOnlineStatus();

  return (
    <div className="flex items-center justify-between px-72 py-5 border-2 shadow-lg shadow-slate-200">
      <div className="w-[70px] rounded-full overflow-hidden">
        <Link to="/">
          <GrRestaurant size={45} />
        </Link>
      </div>

      <div className="">
        <ul className="flex gap-8 ">
          <Link to="/">
            <li className="text-lg font-semibold  flex items-center gap-2 cursor-pointer">
              <AiOutlineHome size={25} />
              Home
            </li>
          </Link>
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

          <span className="mt-1">
            {status ? (
              <span className="inline-block rounded-full  shadow-lg w-3 h-3 bg-green-600"></span>
            ) : (
              <span className="inline-block rounded-full shadow-lg w-3 h-3 bg-red-500"></span>
            )}
          </span>
        </ul>
      </div>
      {console.log(72, status)}
    </div>
  );
};

export default Header;
