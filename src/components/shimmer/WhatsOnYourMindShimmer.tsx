import Image from "next/image";

const WhatsOnYourMindShimmer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-52 lg:h-64 bg-[#171a29]">
      <Image
        className="w-20 lg:w-32"
        src="images/loader.svg"
        width={30}
        height={30}
        alt="loader"
      />
      <p className="text-white text-base lg:text-xl">
        {" "}
        Looking for great food near you..
      </p>
    </div>
  );
};

export default WhatsOnYourMindShimmer;
