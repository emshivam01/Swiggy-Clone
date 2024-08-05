import Link from "next/link";
import Image from "next/image";

const BottomNavbar = () => {
  return (
    <div className="w-full fixed flex items-center justify-between px-8 py-2 bottom-0 md:hidden gap-5 border-t-2 bg-white">
      <Link
        href="/search"
        className="flex flex-col gap-1 items-center text-xs font-medium"
      >
        <Image
          src="/images/search.svg"
          width={20}
          height={20}
          alt="search-logo"
        />
        Search
      </Link>
      <Link
        href="/offers"
        className="flex flex-col gap-1 items-center text-xs font-medium"
      >
        <Image
          src="/images/offers.svg"
          width={20}
          height={20}
          alt="offer-logo"
        />
        Offers
      </Link>
      <Link
        href="/signin"
        className="flex flex-col gap-1 items-center text-xs font-medium"
      >
        <Image src="/images/user.svg" width={20} height={20} alt="user-logo" />
        Sign in
      </Link>
      <Link
        href="/cart"
        className="flex flex-col gap-1 items-center text-xs font-medium"
      >
        <Image src="/images/cart.svg" width={20} height={20} alt="cart-logo" />
        Cart
      </Link>
    </div>
  );
};

export default BottomNavbar;
