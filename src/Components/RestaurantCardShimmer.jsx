const RestaurantCardShimmer = () => {
  return (
    <div className="mt-8 animate-pulse flex flex-wrap justify-between">
      {Array.from({ length: 8 }, (_, i) => (
        <ShimmerCard key={i} />
      ))}
    </div>
  );
};

export default RestaurantCardShimmer;

const ShimmerCard = () => {
  return (
    <div className="w-[300px] min-h-[340px] ">
      <div className="w-full h-52 rounded-md bg-gray-400"></div>
      <div className="mt-4">
        <p className="h-4 w-full rounded-sm bg-gray-400"></p>
        <p className="h-3 w-40 rounded-sm bg-gray-400 mt-2"></p>
        <p></p>
      </div>
    </div>
  );
};
