import { Link, useParams } from "react-router";
import { useState } from "react";
import {
  ArrowLeft,
  ShoppingBag,
  Star,
  Plus,
  Minus,
} from "lucide-react";

import products from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);

  const fallbackImage =
    "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=80";

  /* Product not found */
  if (!product) {
    return (
      <main className="flex min-h-[75vh] items-center justify-center px-5">

        <div className="text-center">

          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-amber-100 text-3xl">
            🛍️
          </div>

          <h1 className="text-3xl font-bold text-stone-800">
            Product Not Found
          </h1>

          <p className="mt-3 text-stone-500">
            Sorry, this product doesn't exist.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-700 px-6 py-3 font-semibold text-white transition hover:bg-amber-800"
          >
            <ArrowLeft size={18} />
            Back to Shop
          </Link>

        </div>

      </main>
    );
  }

  /* Increase quantity */
  const increaseQuantity = () => {
    setQuantity((currentQuantity) => currentQuantity + 1);
  };

  /* Decrease quantity */
  const decreaseQuantity = () => {
    setQuantity((currentQuantity) =>
      Math.max(1, currentQuantity - 1)
    );
  };

  /* Add product to cart */
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <main className="mx-auto max-w-7xl px-5 py-8 sm:py-12">

      {/* Back Button */}
      <Link
        to="/"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-stone-600 transition hover:text-amber-700"
      >
        <ArrowLeft size={18} />
        Back to Shop
      </Link>

      {/* Main Product Section */}
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

        {/* ================= IMAGE ================= */}
        <div className="overflow-hidden rounded-3xl bg-stone-100 shadow-sm">

          <img
            src={product.image}
            alt={product.name}
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = fallbackImage;
            }}
            className="h-full max-h-[650px] min-h-[400px] w-full object-cover"
          />

        </div>

        {/* ================= DETAILS ================= */}
        <div className="flex flex-col justify-center">

          {/* Category */}
          <span className="w-fit rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">
            {product.category}
          </span>

          {/* Name */}
          <h1 className="mt-5 text-4xl font-bold leading-tight text-stone-800 sm:text-5xl">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="mt-5 flex items-center gap-2">

            <div className="flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1">

              <Star
                size={18}
                fill="currentColor"
                className="text-amber-500"
              />

              <span className="font-semibold text-stone-700">
                {product.rating}
              </span>

            </div>

            <span className="text-sm text-stone-400">
              Customer Rating
            </span>

          </div>

          {/* Price */}
          <p className="mt-6 text-3xl font-bold text-amber-800">
            ₹{product.price}
          </p>

          {/* Description */}
          <div className="mt-6 border-t border-stone-200 pt-6">

            <h2 className="text-lg font-semibold text-stone-800">
              Product Description
            </h2>

            <p className="mt-3 leading-8 text-stone-600">
              {product.description}
            </p>

          </div>

          {/* Quantity */}
          <div className="mt-8">

            <p className="mb-3 text-sm font-semibold text-stone-700">
              Quantity
            </p>

            <div className="flex w-fit items-center overflow-hidden rounded-full border border-stone-300">

              <button
                type="button"
                onClick={decreaseQuantity}
                className="p-3 text-stone-600 transition hover:bg-stone-100 hover:text-amber-700"
              >
                <Minus size={18} />
              </button>

              <span className="w-12 text-center font-semibold text-stone-800">
                {quantity}
              </span>

              <button
                type="button"
                onClick={increaseQuantity}
                className="p-3 text-stone-600 transition hover:bg-stone-100 hover:text-amber-700"
              >
                <Plus size={18} />
              </button>

            </div>

          </div>

          {/* Add To Cart */}
          <button
            type="button"
            onClick={handleAddToCart}
            className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-stone-800 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-amber-700"
          >
            <ShoppingBag size={21} />
            Add to Cart
          </button>

          {/* Extra Info */}
          <div className="mt-8 grid grid-cols-3 gap-3">

            <div className="rounded-xl bg-stone-100 p-4 text-center">
              <p className="text-lg">🎨</p>
              <p className="mt-1 text-xs font-medium text-stone-600">
                Handmade
              </p>
            </div>

            <div className="rounded-xl bg-stone-100 p-4 text-center">
              <p className="text-lg">📦</p>
              <p className="mt-1 text-xs font-medium text-stone-600">
                Secure Pack
              </p>
            </div>

            <div className="rounded-xl bg-stone-100 p-4 text-center">
              <p className="text-lg">✨</p>
              <p className="mt-1 text-xs font-medium text-stone-600">
                Quality
              </p>
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}

export default ProductDetails;