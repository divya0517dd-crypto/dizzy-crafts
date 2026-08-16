import { useState } from "react";
import { Link, useParams } from "react-router";
import {
  ArrowLeft,
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Star,
} from "lucide-react";

import products from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find(
    (item) => String(item.id) === String(id)
  );

  if (!product) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-5">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-stone-800">
            Product Not Found
          </h1>

          <p className="mt-2 text-stone-500">
            This craft is currently unavailable.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex rounded-full bg-amber-700 px-6 py-3 font-semibold text-white"
          >
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const liked = isWishlisted(product.id);

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity((value) => value + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((value) => value - 1);
    }
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">

      {/* BACK */}
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-stone-600 hover:text-amber-700"
      >
        <ArrowLeft size={18} />
        Back to Shop
      </Link>

      {/* PRODUCT */}
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">

        {/* IMAGE */}
        <div className="relative">

          <div className="overflow-hidden rounded-2xl bg-stone-100 shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=80";
              }}
              className="aspect-square w-full object-cover"
            />
          </div>

          {/* Wishlist */}
          <button
            type="button"
            onClick={() => toggleWishlist(product)}
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105"
          >
            <Heart
              size={23}
              className={
                liked
                  ? "fill-red-500 text-red-500"
                  : "text-stone-700"
              }
            />
          </button>

        </div>

        {/* DETAILS */}
        <div className="flex flex-col justify-center">

          {/* CATEGORY */}
          <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
            {product.category}
          </p>

          {/* NAME */}
          <h1 className="mt-3 text-3xl font-bold leading-tight text-stone-900 sm:text-4xl">
            {product.name}
          </h1>

          {/* RATING */}
          <div className="mt-4 flex items-center gap-3">

            <span className="flex items-center gap-1 rounded-md bg-green-600 px-2 py-1 text-sm font-bold text-white">
              {product.rating}
              <Star
                size={14}
                fill="currentColor"
              />
            </span>

            <span className="text-sm text-stone-500">
              Customer Rating
            </span>

          </div>

          {/* PRICE */}
          <div className="mt-6 border-b border-stone-200 pb-6">
            <span className="text-3xl font-bold text-amber-800">
              ₹{product.price}
            </span>

            <span className="ml-3 text-sm text-green-700">
              Inclusive of all taxes
            </span>
          </div>

          {/* DESCRIPTION */}
          <div className="mt-6">
            <h2 className="text-lg font-bold text-stone-800">
              About this product
            </h2>

            <p className="mt-2 text-sm leading-7 text-stone-600 sm:text-base">
              {product.description}
            </p>
          </div>

          {/* PRODUCT INFO */}
          <div className="mt-6 grid grid-cols-2 gap-3">

            <div className="rounded-xl bg-stone-50 p-4">
              <p className="text-xs font-semibold text-stone-500">
                Material
              </p>

              <p className="mt-1 font-bold text-stone-800">
                {product.material}
              </p>
            </div>

            <div className="rounded-xl bg-stone-50 p-4">
              <p className="text-xs font-semibold text-stone-500">
                Size
              </p>

              <p className="mt-1 font-bold text-stone-800">
                {product.size}
              </p>
            </div>

          </div>

          {/* STOCK */}
          <div className="mt-5">

            {product.stock > 0 ? (
              <p className="text-sm font-semibold text-green-700">
                ✓ In Stock — {product.stock} available
              </p>
            ) : (
              <p className="text-sm font-semibold text-red-600">
                Out of Stock
              </p>
            )}

          </div>

          {/* QUANTITY + CART */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">

            {/* Quantity */}
            <div className="flex h-12 items-center justify-between rounded-xl border border-stone-300 px-2 sm:w-36">

              <button
                type="button"
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
                className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-stone-100 disabled:opacity-40"
              >
                <Minus size={17} />
              </button>

              <span className="font-bold text-stone-800">
                {quantity}
              </span>

              <button
                type="button"
                onClick={increaseQuantity}
                disabled={quantity >= product.stock}
                className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-stone-100 disabled:opacity-40"
              >
                <Plus size={17} />
              </button>

            </div>

            {/* Add Cart */}
            <button
              type="button"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-amber-700 px-6 font-bold text-white transition hover:bg-amber-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-stone-400"
            >
              <ShoppingCart size={20} />

              {added ? "Added to Cart ✓" : "Add to Cart"}
            </button>

          </div>

          {/* CART LINK */}
          {added && (
            <Link
              to="/cart"
              className="mt-3 text-center text-sm font-bold text-amber-700 hover:underline"
            >
              Go to Cart →
            </Link>
          )}

        </div>

      </div>

      {/* FEATURES */}
      <section className="mt-12 grid gap-4 border-t border-stone-200 pt-8 sm:grid-cols-3">

        <div className="rounded-xl bg-stone-50 p-5 text-center">
          <h3 className="font-bold text-stone-800">
            Handmade Quality
          </h3>

          <p className="mt-1 text-sm text-stone-500">
            Carefully crafted with attention to detail.
          </p>
        </div>

        <div className="rounded-xl bg-stone-50 p-5 text-center">
          <h3 className="font-bold text-stone-800">
            Secure Shopping
          </h3>

          <p className="mt-1 text-sm text-stone-500">
            Safe and simple checkout experience.
          </p>
        </div>

        <div className="rounded-xl bg-stone-50 p-5 text-center">
          <h3 className="font-bold text-stone-800">
            Crafted with Love
          </h3>

          <p className="mt-1 text-sm text-stone-500">
            Unique pieces made for your special spaces.
          </p>
        </div>

      </section>

    </main>
  );
}

export default ProductDetails;