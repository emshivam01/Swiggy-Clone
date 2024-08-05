const TopRestaurantChainsShimmer = () => {
  return (
    <div>
      <div className="px-44 animate-pulse flex flex-wrap justify-between overflow-hidden p-3">
        {Array.from({ length: 6}, (_, i) => (
          <ShimmerCard key={i} />
        ))}
      </div>
    </div>
  );
};

const ShimmerCard = () => {
  return (
    <div>
      <div className=" w-52">
        <div className="w-full h-44 rounded-md bg-gray-400"></div>
        <div className="mt-2">
          <p className="h-4 w-full rounded-sm bg-gray-400"></p>
          <p className="h-3 w-24 rounded-sm bg-gray-400 mt-2"></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default TopRestaurantChainsShimmer;
