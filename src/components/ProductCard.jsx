import { Link } from "react-router";
import { ShoppingBag, Star, Eye } from "lucide-react";
import { useCart } from "../context/CartContext";
import { Heart } from "lucide-react";
import { useWishlist } from "../context/WishlistContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const fallbackImage =
    "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80";

  return (
    <div className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Product Image */}
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-stone-100">

          <img
            src={product.image}
            alt={product.name}
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = fallbackImage;
            }}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          {/* Category */}
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-amber-800 shadow-sm backdrop-blur">
            {product.category}
          </span>

        </div>
      </Link>

      {/* Product Content */}
      <div className="p-4">

        {/* Product Name */}
        <Link to={`/product/${product.id}`}>
          <h3 className="line-clamp-1 text-lg font-semibold text-stone-800 transition hover:text-amber-700">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">

          <Star
            size={16}
            fill="currentColor"
            className="text-amber-500"
          />

          <span className="text-sm font-medium text-stone-600">
            {product.rating}
          </span>

          <span className="text-xs text-stone-400">
            / 5
          </span>

        </div>

        {/* Price */}
        <p className="mt-3 text-xl font-bold text-amber-800">
          ₹{product.price}
        </p>

        {/* Buttons */}
        <div className="mt-4 flex gap-2">

          {/* Details */}
          <Link
            to={`/product/${product.id}`}
            className="flex flex-1 items-center justify-center gap-1 rounded-full border border-stone-300 px-3 py-2 text-sm font-semibold text-stone-700 transition hover:border-amber-700 hover:text-amber-700"
          >
            <Eye size={16} />
            Details
          </Link>

          {/* Add To Cart */}
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="flex flex-1 items-center justify-center gap-1 rounded-full bg-stone-800 px-3 py-2 text-sm font-semibold text-white transition hover:bg-amber-700"
          >
            <ShoppingBag size={16} />
            Add
          </button>
          <button
  type="button"
  onClick={() => toggleWishlist(product)}
  className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur transition hover:scale-105"
  aria-label="Add to wishlist"
>
  <Heart
    size={20}
    className={
      isWishlisted(product.id)
        ? "fill-red-500 text-red-500"
        : "text-stone-600"
    }
  />
</button>

        </div>

      </div>
    </div>
  );
}

export default ProductCard;