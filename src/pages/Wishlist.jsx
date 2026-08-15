import { Link } from "react-router";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";

import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

function Wishlist() {
  const {
    wishlist,
    toggleWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  if (wishlist.length === 0) {
    return (
      <main className="flex min-h-[75vh] items-center justify-center px-5">

        <div className="text-center">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-rose-50">
            <Heart
              size={42}
              className="text-rose-500"
            />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-stone-800">
            Your Wishlist is Empty
          </h1>

          <p className="mt-3 text-stone-500">
            Save your favourite handmade crafts here.
          </p>

          <Link
            to="/"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-stone-800 px-7 py-3 font-semibold text-white transition hover:bg-amber-700"
          >
            <ShoppingBag size={18} />
            Explore Crafts
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-5 py-10 sm:py-14">

      {/* Header */}
      <div className="mb-10">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose-500">
          Saved Items
        </p>

        <h1 className="mt-2 text-4xl font-bold text-stone-800">
          My Wishlist
        </h1>

        <p className="mt-2 text-stone-500">
          {wishlist.length} craft
          {wishlist.length !== 1 ? "s" : ""} saved
        </p>

      </div>

      {/* Wishlist Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {wishlist.map((product) => (

          <div
            key={product.id}
            className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
          >

            {/* Image */}
            <Link to={`/product/${product.id}`}>

              <div className="relative aspect-square overflow-hidden bg-stone-100">

                <img
                  src={product.image}
                  alt={product.name}
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src =
                      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80";
                  }}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />

              </div>

            </Link>

            {/* Content */}
            <div className="p-4">

              <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                {product.category}
              </p>

              <Link to={`/product/${product.id}`}>
                <h2 className="mt-1 font-bold text-stone-800 hover:text-amber-700">
                  {product.name}
                </h2>
              </Link>

              <p className="mt-2 text-xl font-bold text-amber-800">
                ₹{product.price}
              </p>

              {/* Buttons */}
              <div className="mt-4 flex gap-2">

                <button
                  type="button"
                  onClick={() => addToCart(product)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-stone-800 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-700"
                >
                  <ShoppingBag size={16} />
                  Add to Cart
                </button>

                <button
                  type="button"
                  onClick={() => toggleWishlist(product)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-stone-300 text-red-500 transition hover:bg-red-50"
                  aria-label="Remove from wishlist"
                >
                  <Trash2 size={17} />
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}

export default Wishlist;