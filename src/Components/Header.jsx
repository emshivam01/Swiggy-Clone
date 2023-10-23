import { MdOutlineLocalOffer } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-80 py-2 border-2 shadow-lg">
      <div className="w-[70px] rounded-full overflow-hidden">
        <img src="foodiefleet.png" alt="Foodie Fleet logo" />
      </div>

      <div className="">
        <ul className="flex gap-14 ">
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
