import { AiFillStar } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { HiOutlineCurrencyRupee } from "react-icons/hi";

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

        <div className="text-lg font-bold flex gap-8 mt-7">
          <div className="flex  gap-3">
            <BiTime size={25} />
            <p>25 mins</p>
          </div>
          <div className="flex gap-3">
            <HiOutlineCurrencyRupee size={25} />
            <p>&#x20B9;400 for two</p>
          </div>
        </div>


        <div>
        
        </div>

        </div>
    </div>
  );
};

export default Restaurant;
