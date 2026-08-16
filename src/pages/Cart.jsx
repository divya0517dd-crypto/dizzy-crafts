import { Link } from "react-router";
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";

import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart = [],
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const subtotal = cart.reduce(
    (total, item) =>
      total + Number(item.price || 0) * Number(item.quantity || 1),
    0
  );

  const shipping =
    subtotal === 0 || subtotal >= 999 ? 0 : 79;

  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-5">
        <div className="text-center">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-stone-100">
            <ShoppingBag
              size={42}
              className="text-stone-400"
            />
          </div>

          <h1 className="mt-6 text-2xl font-bold text-stone-800">
            Your Cart is Empty
          </h1>

          <p className="mt-2 text-sm text-stone-500">
            Add some beautiful handmade crafts to your cart.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-700 px-6 py-3 font-bold text-white"
          >
            <ArrowLeft size={18} />
            Continue Shopping
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10">

      {/* HEADER */}
      <div className="mb-6">

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-stone-600"
        >
          <ArrowLeft size={17} />
          Continue Shopping
        </Link>

        <h1 className="mt-4 text-2xl font-bold text-stone-800 sm:text-3xl">
          Shopping Cart
        </h1>

        <p className="mt-1 text-sm text-stone-500">
          {cart.length} {cart.length === 1 ? "item" : "items"}
        </p>

      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">

        {/* PRODUCTS */}
        <section className="space-y-3">

          {cart.map((item) => (

            <div
              key={item.id}
              className="rounded-2xl border border-stone-200 bg-white p-3 shadow-sm sm:p-4"
            >

              <div className="flex gap-3 sm:gap-5">

                {/* IMAGE */}
                <Link
                  to={`/product/${item.id}`}
                  className="h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-stone-100 sm:h-36 sm:w-36"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=500&q=80";
                    }}
                  />
                </Link>

                {/* INFO */}
                <div className="min-w-0 flex-1">

                  <div className="flex justify-between gap-2">

                    <Link
                      to={`/product/${item.id}`}
                      className="min-w-0"
                    >
                      <h2 className="line-clamp-2 text-sm font-bold text-stone-800 sm:text-lg">
                        {item.name}
                      </h2>
                    </Link>

                    <button
                      type="button"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      className="shrink-0 rounded-full p-2 text-stone-400 hover:bg-red-50 hover:text-red-500"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                  <p className="mt-2 text-lg font-bold text-amber-800">
                    ₹{item.price}
                  </p>

                  {/* QUANTITY */}
                  <div className="mt-4 flex items-center justify-between">

                    <div className="flex h-9 items-center rounded-lg border border-stone-300">

                      <button
                        type="button"
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                        className="flex h-8 w-8 items-center justify-center"
                      >
                        <Minus size={15} />
                      </button>

                      <span className="w-8 text-center text-sm font-bold">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                        className="flex h-8 w-8 items-center justify-center"
                      >
                        <Plus size={15} />
                      </button>

                    </div>

                    <p className="font-bold text-stone-800">
                      ₹
                      {Number(item.price || 0) *
                        Number(item.quantity || 1)}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </section>

        {/* SUMMARY */}
        <aside className="h-fit lg:sticky lg:top-24">

          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">

            <h2 className="text-xl font-bold text-stone-800">
              Price Details
            </h2>

            <div className="mt-5 space-y-4 text-sm">

              <div className="flex justify-between">
                <span className="text-stone-500">
                  Subtotal
                </span>

                <span className="font-semibold">
                  ₹{subtotal}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-stone-500">
                  Delivery
                </span>

                <span className="font-semibold text-green-600">
                  {shipping === 0
                    ? "FREE"
                    : `₹${shipping}`}
                </span>
              </div>

              <div className="border-t border-stone-200 pt-4">

                <div className="flex justify-between">

                  <span className="text-base font-bold">
                    Total
                  </span>

                  <span className="text-xl font-bold text-amber-800">
                    ₹{total}
                  </span>

                </div>

              </div>

            </div>

            <Link
              to="/checkout"
              className="mt-6 flex w-full items-center justify-center rounded-xl bg-amber-700 py-3.5 font-bold text-white hover:bg-amber-800"
            >
              Proceed to Checkout
            </Link>

          </div>

        </aside>

      </div>

    </main>
  );
}

export default Cart;