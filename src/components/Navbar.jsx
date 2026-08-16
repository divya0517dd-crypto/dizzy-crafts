import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  Search,
  ShoppingBag,
  Heart,
  Menu,
  X,
  Package,
} from "lucide-react";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { cartCount } = useCart();
  const { wishlist } = useWishlist();

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim()) {
      navigate(`/?search=${encodeURIComponent(search.trim())}`);
    }

    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white">
      <div className="mx-auto max-w-7xl px-5">

        <div className="flex h-20 items-center justify-between gap-3">

          {/* LOGO */}
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-700 text-xl text-white">
              ✦
            </div>

            <div>
              <h1 className="text-xl font-bold text-stone-800">
                Dizzy
              </h1>

              <p className="text-[10px] font-bold tracking-[0.3em] text-amber-700">
                CRAFTS
              </p>
            </div>
          </Link>

          {/* DESKTOP SEARCH */}
          <form
            onSubmit={handleSearch}
            className="hidden max-w-md flex-1 items-center rounded-full border bg-stone-50 px-4 py-2.5 lg:flex"
          >
            <Search size={19} className="text-stone-400" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search handmade crafts..."
              className="ml-3 w-full bg-transparent text-sm outline-none"
            />

            <button
              type="submit"
              className="rounded-full bg-stone-800 px-4 py-1.5 text-xs font-semibold text-white"
            >
              Search
            </button>
          </form>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex">
            <Link
              to="/"
              className="rounded-full px-4 py-2 font-semibold text-stone-600 hover:bg-stone-100"
            >
              Home
            </Link>

            <Link
              to="/orders"
              className="rounded-full px-4 py-2 font-semibold text-stone-600 hover:bg-stone-100"
            >
              Orders
            </Link>
          </nav>

          {/* ACTION BUTTONS */}
          <div className="flex items-center gap-1">

            {/* DESKTOP / MOBILE WISHLIST ICON */}
            <Link
              to="/wishlist"
              onClick={() => setMobileOpen(false)}
              className="relative rounded-full p-2.5 text-stone-600 hover:bg-stone-100"
            >
              <Heart size={21} />

              {wishlist.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* CART */}
            <Link
              to="/cart"
              onClick={() => setMobileOpen(false)}
              className="relative rounded-full p-2.5 text-stone-600 hover:bg-stone-100"
            >
              <ShoppingBag size={21} />

              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-700 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* MENU BUTTON */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-full p-2.5 text-stone-700 hover:bg-stone-100 md:hidden"
            >
              {mobileOpen ? <X size={23} /> : <Menu size={23} />}
            </button>

          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="border-t border-stone-200 py-5 md:hidden">

            {/* MOBILE SEARCH */}
            <form
              onSubmit={handleSearch}
              className="flex rounded-xl border border-stone-200 bg-stone-50 p-2"
            >
              <Search
                size={19}
                className="ml-2 mt-2.5 text-stone-400"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search crafts..."
                className="min-w-0 flex-1 bg-transparent px-3 py-2 outline-none"
              />

              <button
                type="submit"
                className="rounded-lg bg-stone-800 px-4 text-sm font-semibold text-white"
              >
                Search
              </button>
            </form>

            {/* MOBILE LINKS */}
            <div className="mt-4 space-y-2">

              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-4 py-3 font-semibold text-stone-700 hover:bg-stone-100"
              >
                🏠 Home
              </Link>

              {/* ⭐ WISHLIST */}
              <Link
                to="/wishlist"
                onClick={() => setMobileOpen(false)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-semibold text-stone-700 hover:bg-stone-100"
              >
                <span className="flex items-center gap-3">
                  <Heart size={19} />
                  Wishlist
                </span>

                {wishlist.length > 0 && (
                  <span className="rounded-full bg-red-500 px-2.5 py-1 text-xs font-bold text-white">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* CART */}
              <Link
                to="/cart"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 font-semibold text-stone-700 hover:bg-stone-100"
              >
                <span className="flex items-center gap-3">
                  <ShoppingBag size={19} />
                  Cart
                </span>

                {cartCount > 0 && (
                  <span className="rounded-full bg-amber-700 px-2.5 py-1 text-xs font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* ORDERS */}
              <Link
                to="/orders"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-3 font-semibold text-stone-700 hover:bg-stone-100"
              >
                <Package size={19} />
                Order History
              </Link>

            </div>

          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;