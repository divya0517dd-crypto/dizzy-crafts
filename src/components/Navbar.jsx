import { useState } from "react";
import { Link, NavLink } from "react-router";
import {
  Heart,
  Menu,
  Search,
  ShoppingBag,
  UserRound,
  X,
  Package,
} from "lucide-react";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { cartCount } = useCart();
  const { wishlist } = useWishlist();

  const wishlistCount = wishlist?.length || 0;

  const handleSearch = (e) => {
    e.preventDefault();

    const value = search.trim();

    if (!value) return;

    window.location.href = `/?search=${encodeURIComponent(value)}`;

    setMenuOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 shadow-sm backdrop-blur">

      {/* TOP NAV */}
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:h-[72px] sm:px-6 lg:px-8">

        {/* MOBILE MENU */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full hover:bg-stone-100 lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={23} />
        </button>

        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMenu}
          className="shrink-0"
        >
          <div className="leading-none">
            <h1 className="font-serif text-xl font-bold tracking-wide text-stone-900 sm:text-2xl">
              Dizzy Crafts
            </h1>

            <p className="mt-1 hidden text-[9px] font-medium uppercase tracking-[0.25em] text-amber-700 sm:block">
              Handmade with Love
            </p>
          </div>
        </Link>

        {/* DESKTOP SEARCH */}
        <form
          onSubmit={handleSearch}
          className="mx-auto hidden max-w-xl flex-1 lg:flex"
        >
          <div className="flex w-full items-center rounded-full border border-stone-300 bg-stone-50 px-4 transition focus-within:border-amber-600 focus-within:bg-white">

            <Search
              size={19}
              className="shrink-0 text-stone-400"
            />

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search handmade crafts..."
              className="w-full bg-transparent px-3 py-3 text-sm outline-none"
            />

          </div>
        </form>

        {/* DESKTOP LINKS */}
        <nav className="hidden items-center gap-1 lg:flex">

          <NavLink
            to="/"
            className="rounded-full px-3 py-2 text-sm font-semibold text-stone-700 hover:bg-stone-100"
          >
            Home
          </NavLink>

          <NavLink
            to="/order-history"
            className="rounded-full px-3 py-2 text-sm font-semibold text-stone-700 hover:bg-stone-100"
          >
            Orders
          </NavLink>

        </nav>

        {/* ACTIONS */}
        <div className="ml-auto flex items-center gap-1 sm:gap-2">

          {/* WISHLIST */}
          <Link
            to="/wishlist"
            className="relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-stone-100"
            aria-label="Wishlist"
          >
            <Heart size={21} />

            {wishlistCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* CART */}
          <Link
            to="/cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-stone-100"
            aria-label="Shopping cart"
          >
            <ShoppingBag size={21} />

            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-700 px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* USER */}
          <button
            type="button"
            className="hidden h-10 w-10 items-center justify-center rounded-full hover:bg-stone-100 sm:flex"
            aria-label="Account"
          >
            <UserRound size={21} />
          </button>

        </div>

      </div>

      {/* MOBILE SEARCH */}
      <div className="border-t border-stone-100 px-4 py-2.5 lg:hidden">

        <form onSubmit={handleSearch}>
          <div className="flex items-center rounded-full border border-stone-300 bg-stone-50 px-3">

            <Search
              size={17}
              className="shrink-0 text-stone-400"
            />

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search crafts..."
              className="w-full bg-transparent px-2.5 py-2.5 text-sm outline-none"
            />

          </div>
        </form>

      </div>

      {/* MOBILE DRAWER */}
      {menuOpen && (
        <>

          {/* OVERLAY */}
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="fixed inset-0 top-0 z-[60] h-full w-full bg-black/40 lg:hidden"
          />

          {/* DRAWER */}
          <aside className="fixed left-0 top-0 z-[70] flex h-full w-[82%] max-w-sm flex-col bg-white shadow-2xl lg:hidden">

            {/* DRAWER HEADER */}
            <div className="flex items-center justify-between border-b border-stone-200 p-5">

              <div>
                <h2 className="font-serif text-xl font-bold text-stone-900">
                  Dizzy Crafts
                </h2>

                <p className="mt-1 text-xs text-amber-700">
                  Handmade with Love
                </p>
              </div>

              <button
                type="button"
                onClick={closeMenu}
                className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-stone-100"
              >
                <X size={22} />
              </button>

            </div>

            {/* LINKS */}
            <nav className="flex-1 space-y-2 overflow-y-auto p-4">

              <NavLink
                to="/"
                onClick={closeMenu}
                className="flex items-center rounded-xl px-4 py-3 font-semibold text-stone-700 hover:bg-stone-100"
              >
                Home
              </NavLink>

              <NavLink
                to="/wishlist"
                onClick={closeMenu}
                className="flex items-center justify-between rounded-xl px-4 py-3 font-semibold text-stone-700 hover:bg-stone-100"
              >
                <span className="flex items-center gap-3">
                  <Heart size={19} />
                  Wishlist
                </span>

                {wishlistCount > 0 && (
                  <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-bold text-red-600">
                    {wishlistCount}
                  </span>
                )}
              </NavLink>

              <NavLink
  to="/cart"
  onClick={closeMenu}
  className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-semibold text-stone-700 hover:bg-stone-100"
>
  <span className="flex items-center gap-3">
    <ShoppingBag size={19} />
    Cart
  </span>

  {cartCount > 0 && (
    <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-bold text-amber-700">
      {cartCount}
    </span>
  )}
</NavLink>

              <NavLink
                to="/order-history"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-xl px-4 py-3 font-semibold text-stone-700 hover:bg-stone-100"
              >
                <Package size={19} />
                Order History
              </NavLink>

            </nav>

            {/* DRAWER FOOTER */}
            <div className="border-t border-stone-200 p-5">

              <div className="rounded-2xl bg-amber-50 p-4">
                <p className="text-sm font-bold text-amber-900">
                  Handmade with ❤️
                </p>

                <p className="mt-1 text-xs leading-5 text-amber-800">
                  Discover unique crafts made with
                  creativity and care.
                </p>
              </div>

            </div>

          </aside>

        </>
      )}

    </header>
  );
}

export default Navbar;