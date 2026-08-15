import { Link } from "react-router";
import {
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";

function Footer() {
  return (
    <footer className="mt-20 bg-stone-900 text-stone-300">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-14">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>

            <Link
              to="/"
              className="inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-700 text-xl text-white">
                ✦
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">
                  Dizzy
                </h2>

                <p className="-mt-1 text-xs tracking-[0.25em] text-amber-500">
                  CRAFTS
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-stone-400">
              Beautiful handmade crafts created with creativity,
              passion and love. Discover something special for
              every occasion.
            </p>

            {/* Social Buttons */}
            <div className="mt-6 flex gap-3">

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-700 text-sm font-bold text-stone-300 transition hover:border-amber-600 hover:text-amber-500"
                aria-label="Instagram"
              >
                IG
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-700 text-sm font-bold text-stone-300 transition hover:border-amber-600 hover:text-amber-500"
                aria-label="Facebook"
              >
                FB
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="font-bold text-white">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm">

              <Link
                to="/"
                className="transition hover:text-amber-500"
              >
                Home
              </Link>

              <Link
                to="/"
                className="transition hover:text-amber-500"
              >
                Shop
              </Link>

              <Link
                to="/wishlist"
                className="transition hover:text-amber-500"
              >
                Wishlist
              </Link>

              <Link
                to="/orders"
                className="transition hover:text-amber-500"
              >
                Order History
              </Link>

            </div>

          </div>

          {/* Customer Care */}
          <div>

            <h3 className="font-bold text-white">
              Customer Care
            </h3>

            <div className="mt-5 flex flex-col gap-4 text-sm">

              <div className="flex gap-3">
                <Mail
                  size={18}
                  className="shrink-0 text-amber-500"
                />

                <span>
                  support@dizzycrafts.com
                </span>
              </div>

              <div className="flex gap-3">
                <Phone
                  size={18}
                  className="shrink-0 text-amber-500"
                />

                <span>
                  +91 98765 43210
                </span>
              </div>

              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="shrink-0 text-amber-500"
                />

                <span>
                  Tamil Nadu, India
                </span>
              </div>

            </div>

          </div>

          {/* Newsletter */}
          <div>

            <h3 className="font-bold text-white">
              Stay Connected
            </h3>

            <p className="mt-4 text-sm leading-6 text-stone-400">
              Subscribe to receive new craft collections
              and special updates.
            </p>

            <div className="mt-5 flex overflow-hidden rounded-full border border-stone-700">

              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-stone-500"
              />

              <button
                type="button"
                className="bg-amber-700 px-5 text-sm font-semibold text-white transition hover:bg-amber-600"
              >
                Join
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-stone-800">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-center text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">

          <p>
            © 2026 Dizzy Crafts. All rights reserved.
          </p>

          <p className="flex items-center justify-center gap-1">
            Made with
            <Heart
              size={13}
              fill="currentColor"
              className="text-amber-600"
            />
            for handmade lovers
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;