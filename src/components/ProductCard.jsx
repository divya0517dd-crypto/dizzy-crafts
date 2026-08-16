import { Link } from "react-router";
import { Heart, ShoppingCart, Star } from "lucide-react";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const liked = isWishlisted(product.id);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <article className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* IMAGE */}
      <div className="relative overflow-hidden bg-stone-100">

        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=700&q=80";
            }}
            className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>

        {/* CATEGORY */}
        <span className="absolute left-2 top-2 max-w-[70%] truncate rounded-full bg-white/95 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-amber-800 shadow-sm sm:left-3 sm:top-3 sm:px-3 sm:text-[10px]">
          {product.category}
        </span>

        {/* WISHLIST */}
        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 shadow-sm transition hover:scale-105 sm:right-3 sm:top-3 sm:h-10 sm:w-10"
          aria-label={
            liked
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
        >
          <Heart
            size={18}
            className={
              liked
                ? "fill-red-500 text-red-500"
                : "text-stone-700"
            }
          />
        </button>

      </div>

      {/* CONTENT */}
      <div className="p-3 sm:p-4">

        {/* NAME */}
        <Link to={`/product/${product.id}`}>
          <h2 className="line-clamp-2 min-h-[40px] text-sm font-bold leading-5 text-stone-800 transition hover:text-amber-700 sm:text-base">
            {product.name}
          </h2>
        </Link>

        {/* RATING */}
        <div className="mt-2 flex items-center gap-2">

          <span className="flex items-center gap-1 rounded bg-green-600 px-1.5 py-0.5 text-[10px] font-bold text-white sm:text-xs">
            {product.rating}
            <Star
              size={11}
              fill="currentColor"
            />
          </span>

          <span className="text-[10px] text-stone-400 sm:text-xs">
            Highly Rated
          </span>

        </div>

        {/* PRICE */}
        <div className="mt-2 flex items-center gap-2">

          <span className="text-base font-bold text-amber-800 sm:text-lg">
            ₹{product.price}
          </span>

        </div>

        {/* ADD CART */}
        <button
          type="button"
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl bg-amber-700 px-2 py-2.5 text-xs font-bold text-white transition hover:bg-amber-800 active:scale-[0.98] disabled:bg-stone-400 sm:gap-2 sm:text-sm"
        >
          <ShoppingCart size={16} />

          {product.stock === 0
            ? "Out of Stock"
            : "Add to Cart"}
        </button>

      </div>

    </article>
  );
}

export default ProductCard;