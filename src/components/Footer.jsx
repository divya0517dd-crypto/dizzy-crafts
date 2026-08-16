import {
  Heart,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import { Link } from "react-router";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-stone-200 bg-stone-950 text-stone-300">

      {/* MAIN FOOTER */}
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">

        {/* BRAND */}
        <div>

          <Link
            to="/"
            className="inline-block"
          >
            <h2 className="font-serif text-2xl font-bold text-white">
              Dizzy Crafts
            </h2>
          </Link>

          <p className="mt-3 max-w-sm text-sm leading-6 text-stone-400">
            Discover beautiful handmade crafts created
            with creativity, care and love. Bring unique
            handmade pieces into your everyday life.
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm text-amber-400">
            <Heart
              size={16}
              fill="currentColor"
            />
            Handmade with Love
          </div>

        </div>

        {/* QUICK LINKS */}
        <div>

          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Quick Links
          </h3>

          <div className="mt-5 space-y-3 text-sm">

            <Link
              to="/"
              className="block transition hover:text-amber-400"
            >
              Home
            </Link>

            <Link
              to="/wishlist"
              className="block transition hover:text-amber-400"
            >
              Wishlist
            </Link>

            <Link
              to="/cart"
              className="block transition hover:text-amber-400"
            >
              Shopping Cart
            </Link>

            <Link
              to="/order-history"
              className="block transition hover:text-amber-400"
            >
              Order History
            </Link>

          </div>

        </div>

        {/* CUSTOMER */}
        <div>

          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Customer Care
          </h3>

          <div className="mt-5 space-y-4 text-sm">

            <div className="flex gap-3">
              <Mail
                size={18}
                className="mt-0.5 shrink-0 text-amber-500"
              />

              <span className="break-all">
                support@dizzycrafts.com
              </span>
            </div>

            <div className="flex gap-3">
              <Phone
                size={18}
                className="mt-0.5 shrink-0 text-amber-500"
              />

              <span>
                +91 98765 43210
              </span>
            </div>

            <div className="flex gap-3">
              <MapPin
                size={18}
                className="mt-0.5 shrink-0 text-amber-500"
              />

              <span>
                Tamil Nadu, India
              </span>
            </div>

          </div>

        </div>

        {/* NEWSLETTER */}
        <div>

          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Stay Connected
          </h3>

          <p className="mt-5 text-sm leading-6 text-stone-400">
            Get updates about new handmade collections,
            offers and beautiful craft ideas.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.currentTarget.reset();
              alert("Thank you for subscribing to Dizzy Crafts!");
            }}
            className="mt-5"
          >

            <div className="flex overflow-hidden rounded-xl border border-stone-700 bg-stone-900">

              <input
                type="email"
                required
                placeholder="Your email"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-stone-500"
              />

              <button
                type="submit"
                className="flex w-12 shrink-0 items-center justify-center bg-amber-700 text-white transition hover:bg-amber-600"
                aria-label="Subscribe"
              >
                <Send size={18} />
              </button>

            </div>

          </form>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-stone-800">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-center text-xs text-stone-500 sm:px-6 md:flex-row md:items-center md:justify-between md:text-left lg:px-8">

          <p>
            © {year} Dizzy Crafts. All rights reserved.
          </p>

          <p>
            Crafted with{" "}
            <span className="text-red-400">♥</span>{" "}
            for craft lovers.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;