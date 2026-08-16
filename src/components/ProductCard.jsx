import { Link } from "react-router";
import { Heart, ShoppingBag, Star } from "lucide-react";

import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { addToCart } = useCart();

  const liked = isWishlisted(product.id);

  return (
    <div className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* IMAGE */}
      <div className="relative aspect-square overflow-hidden bg-stone-100">

        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80";
            }}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>

        {/* ⭐ WISHLIST HEART — MOBILE + DESKTOP */}
        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          aria-label={
            liked ? "Remove from wishlist" : "Add to wishlist"
          }
          className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110 active:scale-95"
        >
          <Heart
            size={21}
            strokeWidth={2}
            className={
              liked
                ? "fill-red-500 text-red-500"
                : "text-stone-700"
            }
          />
        </button>

        {/* CATEGORY */}
        <div className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-stone-700 shadow">
          {product.category}
        </div>

      </div>

      {/* DETAILS */}
      <div className="p-4">

        <Link to={`/product/${product.id}`}>
          <h3 className="line-clamp-1 text-lg font-bold text-stone-800 transition hover:text-amber-700">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          <Star
            size={15}
            className="fill-amber-500 text-amber-500"
          />

          <span className="text-sm font-semibold text-stone-600">
            {product.rating}
          </span>
        </div>

        {/* Price + Cart */}
        <div className="mt-4 flex items-center justify-between gap-3">

          <p className="text-xl font-bold text-amber-800">
            ₹{product.price}
          </p>

          <button
            type="button"
            onClick={() => addToCart(product)}
            className="flex items-center gap-2 rounded-full bg-stone-800 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-700 active:scale-95"
          >
            <ShoppingBag size={16} />
            <span className="hidden sm:inline">
              Add to Cart
            </span>
            <span className="sm:hidden">
              Add
            </span>
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;