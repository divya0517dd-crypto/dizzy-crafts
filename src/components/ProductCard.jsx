import { Link } from "react-router";
import { Heart, ShoppingCart, Star } from "lucide-react";

import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { addToCart } = useCart();

  const liked = isWishlisted(product.id);

  return (
    <div className="group min-w-0 overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm transition hover:shadow-md sm:rounded-xl">

      {/* IMAGE */}
      <div className="relative aspect-square overflow-hidden bg-stone-100">

        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=600&q=80";
            }}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        </Link>

        {/* WISHLIST */}
        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md sm:h-10 sm:w-10"
        >
          <Heart
            size={17}
            className={
              liked
                ? "fill-red-500 text-red-500"
                : "text-stone-600"
            }
          />
        </button>

      </div>

      {/* PRODUCT INFO */}
      <div className="p-2.5 sm:p-4">

        <p className="mb-1 truncate text-[10px] font-semibold uppercase text-amber-700 sm:text-xs">
          {product.category}
        </p>

        <Link to={`/product/${product.id}`}>
          <h3 className="line-clamp-2 min-h-[34px] text-sm font-semibold leading-4 text-stone-800 sm:min-h-[44px] sm:text-base sm:leading-5">
            {product.name}
          </h3>
        </Link>

        {/* RATING */}
        <div className="mt-2 flex items-center gap-1">
          <span className="flex items-center gap-1 rounded bg-green-600 px-1.5 py-0.5 text-[10px] font-bold text-white sm:text-xs">
            {product.rating}
            <Star
              size={10}
              fill="currentColor"
            />
          </span>
        </div>

        {/* PRICE */}
        <div className="mt-2">
          <span className="text-base font-bold text-stone-900 sm:text-lg">
            ₹{product.price}
          </span>
        </div>

        {/* ADD TO CART */}
        <button
          type="button"
          onClick={() => addToCart(product)}
          className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-md bg-amber-700 px-2 py-2 text-xs font-bold text-white transition hover:bg-amber-800 active:scale-95 sm:rounded-full sm:py-2.5 sm:text-sm"
        >
          <ShoppingCart size={14} />
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;