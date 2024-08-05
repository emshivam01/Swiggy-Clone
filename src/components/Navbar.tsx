import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4  py-3 md:px-20 xl:px-36 shadow-md">
      <div>
        <Link href="/" >
          <Image  className="w-7 md:6 lg:w-8 hover:scale-110 transition-all duration-200" src="/images/swiggy.svg"  width={30} height={30} alt="swiggy-logo"/>
        </Link>
      </div>

      <div className="md:hidden">
      <Image  className="w-9 hover:scale-110 transition-all duration-200" src="/images/user-circle.svg"  width={30} height={30} alt="swiggy-logo"/>
      </div>

      <div className="hidden md:flex  md:gap-5 lg:gap-10">
        <Link href="/search"   className="flex  gap-2 items-center text-base font-medium" >
          <Image
            src="/images/search.svg"
            width={22}
            height={22}
            alt="search-logo"
          />
          Search
        </Link>
        <Link className="flex  gap-2 items-center text-base font-medium" href="">
          <Image
            src="/images/offers.svg"
            width={22}
            height={22}
            alt="offer-logo"
          />
          Offers
        </Link>
        <Link className="flex  gap-2 items-center text-base font-medium" href="">
          <Image
            src="/images/user.svg"
            width={22}
            height={22}
            alt="user-logo"
          />
          Sign in
        </Link>
        <Link className="flex  gap-2 items-center text-base font-medium" href="">
          <Image
            src="/images/cart.svg"
            width={22}
            height={22}
            alt="cart-logo"
          />
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
