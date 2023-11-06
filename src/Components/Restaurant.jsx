import { AiFillStar } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { BiSolidDiscount } from "react-icons/bi";

const Restaurant = () => {
  return (
    <div className="px-[560px] mt-10">
      <div className="flex flex-col p-2">
        <div className="w-full flex justify-between">
          <div>
            <h2 className="font-semibold text-xl mb-2">Domino&apos;s Pizza</h2>
            <div className="text-sm text-[#7e808c]">
              <p className="mb-1">Pizza, Italian</p>
              <p>C Scheme, 2km</p>
            </div>
          </div>

          <div className="p-2 flex flex-col justify-between items-center rounded-md  border border-[#e9e9eb]">
            <p className="text-lg font-bold  text-[#7e808c] flex items-center gap-2 border-b px-2 pb-1">
              <AiFillStar /> 4.0
            </p>
            <p>10K+ rating</p>
          </div>
        </div>

        <div className="border-t border-dashed border-[#d3d3d3] w-full h-0 mt-7"></div>

        {/**Offer*/}
        <div className="text-base font-extrabold flex gap-8 mt-7">
          <div className="flex  gap-2">
            <BiTime size={25} />
            <p>25 mins</p>
          </div>
          <div className="flex gap-2">
            <HiOutlineCurrencyRupee size={25} />
            <p>&#x20B9;400 for two</p>
          </div>
        </div>

        {/** Coupon card */}

        <div className="flex gap-2 overflow-x-auto ">
          <div className="w-72 flex  flex-shrink-0 border-2  border-[#e9e9eb]  mt-10 p-2 pl-0 rounded-md">
            <div className="-rotate-90 flex items-center border-b border-[#e8e8ea]">
              <p className="text-[11px] font-semibold text-[#e46d47]">
                FLAT DEAL
              </p>
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

          <div className="w-72 flex  flex-shrink-0 border-2  border-[#e9e9eb]  mt-10 p-2 pl-0 rounded-md">
            <div className="-rotate-90 flex items-center border-b border-[#e8e8ea]">
              <p className="text-[11px] font-semibold text-[#e46d47]">
                FLAT DEAL
              </p>
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
          <div className="w-72 flex  flex-shrink-0 border-2  border-[#e9e9eb]  mt-10 p-2 pl-0 rounded-md">
            <div className="-rotate-90 flex items-center border-b border-[#e8e8ea]">
              <p className="text-[11px] font-semibold text-[#e46d47]">
                FLAT DEAL
              </p>
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
          <div className="w-72 flex  flex-shrink-0 border-2  border-[#e9e9eb]  mt-10 p-2 pl-0 rounded-md">
            <div className="-rotate-90 flex items-center border-b border-[#e8e8ea]">
              <p className="text-[11px] font-semibold text-[#e46d47]">
                FLAT DEAL
              </p>
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
          <div className="w-72 flex  flex-shrink-0 border-2  border-[#e9e9eb]  mt-10 p-2 pl-0 rounded-md">
            <div className="-rotate-90 flex items-center border-b border-[#e8e8ea]">
              <p className="text-[11px] font-semibold text-[#e46d47]">
                FLAT DEAL
              </p>
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
          



        </div>
      </div>
    </div>
  );
};

export default Restaurant;
