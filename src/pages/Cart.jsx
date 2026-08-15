import { Link } from "react-router";
import {
  ArrowLeft,
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
} from "lucide-react";

import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  /* Empty Cart */
  if (cartItems.length === 0) {
    return (
      <main className="mx-auto flex min-h-[75vh] max-w-7xl items-center justify-center px-5">

        <div className="text-center">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-amber-100">
            <ShoppingBag
              size={40}
              className="text-amber-700"
            />
          </div>

          <h1 className="mt-6 text-3xl font-bold text-stone-800">
            Your Cart is Empty
          </h1>

          <p className="mt-3 text-stone-500">
            Looks like you haven't added any crafts yet.
          </p>

          <Link
            to="/"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-stone-800 px-7 py-3 font-semibold text-white transition hover:bg-amber-700"
          >
            <ArrowLeft size={18} />
            Continue Shopping
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-5 py-10 sm:py-14">

      {/* Header */}
      <div className="mb-10">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
          Your Shopping Bag
        </p>

        <h1 className="mt-2 text-4xl font-bold text-stone-800">
          Shopping Cart
        </h1>

        <p className="mt-2 text-stone-500">
          {cartItems.length} different item
          {cartItems.length !== 1 ? "s" : ""} in your cart
        </p>

      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_380px]">

        {/* ================= CART ITEMS ================= */}
        <div className="space-y-5">

          {cartItems.map((item) => (

            <div
              key={item.id}
              className="flex gap-4 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm sm:gap-6"
            >

              {/* Image */}
              <div className="h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-stone-100 sm:h-36 sm:w-36">

                <img
                  src={item.image}
                  alt={item.name}
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src =
                      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=600&q=80";
                  }}
                  className="h-full w-full object-cover"
                />

              </div>

              {/* Details */}
              <div className="flex min-w-0 flex-1 flex-col">

                <div className="flex items-start justify-between gap-3">

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                      {item.category}
                    </p>

                    <h2 className="mt-1 text-base font-bold text-stone-800 sm:text-lg">
                      {item.name}
                    </h2>

                  </div>

                  {/* Remove */}
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="rounded-full p-2 text-stone-400 transition hover:bg-red-50 hover:text-red-600"
                    aria-label="Remove item"
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

                <div className="mt-auto flex items-end justify-between gap-3">

                  {/* Quantity */}
                  <div className="flex items-center overflow-hidden rounded-full border border-stone-300">

                    <button
                      type="button"
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                      className="p-2 transition hover:bg-stone-100"
                    >
                      <Minus size={15} />
                    </button>

                    <span className="w-9 text-center text-sm font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                      className="p-2 transition hover:bg-stone-100"
                    >
                      <Plus size={15} />
                    </button>

                  </div>

                  {/* Price */}
                  <p className="text-lg font-bold text-amber-800">
                    ₹{item.price * item.quantity}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* ================= ORDER SUMMARY ================= */}
        <aside className="h-fit rounded-2xl border border-stone-200 bg-white p-6 shadow-sm lg:sticky lg:top-28">

          <h2 className="text-xl font-bold text-stone-800">
            Order Summary
          </h2>

          <div className="mt-6 space-y-4">

            <div className="flex justify-between text-sm">
              <span className="text-stone-500">
                Subtotal
              </span>

              <span className="font-semibold text-stone-800">
                ₹{cartTotal}
              </span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-stone-500">
                Shipping
              </span>

              <span className="font-semibold text-green-600">
                FREE
              </span>
            </div>

            <div className="border-t border-stone-200 pt-4">

              <div className="flex justify-between">

                <span className="font-semibold text-stone-800">
                  Total
                </span>

                <span className="text-2xl font-bold text-amber-800">
                  ₹{cartTotal}
                </span>

              </div>

            </div>

          </div>

          {/* Checkout */}
          <Link
            to="/checkout"
            className="mt-7 flex w-full items-center justify-center rounded-full bg-stone-800 px-6 py-3.5 font-semibold text-white transition hover:bg-amber-700"
          >
            Proceed to Checkout
          </Link>

          {/* Continue */}
          <Link
            to="/"
            className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-stone-600 hover:text-amber-700"
          >
            <ArrowLeft size={16} />
            Continue Shopping
          </Link>

        </aside>

      </div>

    </main>
  );
}

export default Cart;