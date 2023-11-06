import { BiSolidDiscount } from "react-icons/bi";

const Coupon = () => {
  return (
    <div className="w-72 flex  flex-shrink-0 border-2  border-[#e9e9eb]  mt-10 p-2 pl-0 rounded-md">
      <div className="-rotate-90 flex items-center border-b border-[#e8e8ea]">
        <p className="text-[11px] font-semibold text-[#e46d47]">FLAT DEAL</p>
      </div>
      <div className="flex flex-col items-center gap-2 ml-3">
        <p className=" text-lg font-semibold flex gap-2 items-center text-[#686b78]">
          <BiSolidDiscount size={30} />
          FLAT &#8377;150 OFF
        </p>

        <p className="font-medium text-xs text-[#93959f]">
          USE WELCOMEDOM150 | ABOVE 299
        </p>
      </div>
    </div>
  );
};

export default Coupon;
