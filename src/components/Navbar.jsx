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

  const handleSearch = (event) => {
    event.preventDefault();

    const value = search.trim();

    if (!value) {
      navigate("/");
      return;
    }

    navigate(`/?search=${encodeURIComponent(value)}`);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">

      <div className="mx-auto max-w-7xl px-5">

        <div className="flex h-20 items-center justify-between gap-4">

          {/* LOGO */}
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="flex shrink-0 items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-700 text-xl text-white shadow-sm">
              ✦
            </div>

            <div>
              <h1 className="text-xl font-bold leading-none text-stone-800">
                Dizzy
              </h1>

              <p className="mt-1 text-[10px] font-bold tracking-[0.3em] text-amber-700">
                CRAFTS
              </p>
            </div>
          </Link>

          {/* DESKTOP SEARCH */}
          <form
            onSubmit={handleSearch}
            className="hidden max-w-md flex-1 items-center rounded-full border border-stone-200 bg-stone-50 px-4 py-2.5 lg:flex"
          >
            <Search
              size={19}
              className="shrink-0 text-stone-400"
            />

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search handmade crafts..."
              className="ml-3 w-full bg-transparent text-sm outline-none placeholder:text-stone-400"
            />

            <button
              type="submit"
              className="rounded-full bg-stone-800 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-amber-700"
            >
              Search
            </button>
          </form>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-1 md:flex">

            <Link
              to="/"
              className="rounded-full px-4 py-2 text-sm font-semibold text-stone-600 hover:bg-stone-100 hover:text-amber-700"
            >
              Home
            </Link>

            <Link
              to="/orders"
              className="rounded-full px-4 py-2 text-sm font-semibold text-stone-600 hover:bg-stone-100 hover:text-amber-700"
            >
              Orders
            </Link>

          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-1">

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative rounded-full p-2.5 text-stone-600 transition hover:bg-stone-100 hover:text-amber-700"
              aria-label="Wishlist"
            >
              <Heart size={21} />

              {wishlist.length > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative rounded-full p-2.5 text-stone-600 transition hover:bg-stone-100 hover:text-amber-700"
              aria-label="Shopping Cart"
            >
              <ShoppingBag size={21} />

              {cartCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-amber-700 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu */}
            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              className="rounded-full p-2.5 text-stone-700 hover:bg-stone-100 md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X size={23} />
              ) : (
                <Menu size={23} />
              )}
            </button>

          </div>

        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="border-t border-stone-200 py-5 md:hidden">

            {/* Mobile Search */}
            <form
              onSubmit={handleSearch}
              className="flex items-center rounded-xl border border-stone-200 bg-stone-50 p-2"
            >
              <Search
                size={19}
                className="ml-2 text-stone-400"
              />

              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search crafts..."
                className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm outline-none"
              />

              <button
                type="submit"
                className="rounded-lg bg-stone-800 px-4 py-2 text-sm font-semibold text-white"
              >
                Search
              </button>
            </form>

            <nav className="mt-4 grid gap-2">

              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 font-semibold text-stone-700 hover:bg-stone-100"
              >
                Home
              </Link>

              <Link
                to="/wishlist"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 font-semibold text-stone-700 hover:bg-stone-100"
              >
                <span>Wishlist</span>

                {wishlist.length > 0 && (
                  <span className="rounded-full bg-red-500 px-2 py-1 text-xs text-white">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              <Link
                to="/cart"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 font-semibold text-stone-700 hover:bg-stone-100"
              >
                <span>Cart</span>

                {cartCount > 0 && (
                  <span className="rounded-full bg-amber-700 px-2 py-1 text-xs text-white">
                    {cartCount}
                  </span>
                )}
              </Link>

              <Link
                to="/orders"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-3 font-semibold text-stone-700 hover:bg-stone-100"
              >
                <Package size={18} />
                Order History
              </Link>

            </nav>

          </div>
        )}

      </div>

    </header>
  );
}

export default Navbar;