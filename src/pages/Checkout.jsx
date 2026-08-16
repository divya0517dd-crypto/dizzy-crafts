import { useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  ArrowLeft,
  CheckCircle,
  CreditCard,
  MapPin,
  ShoppingBag,
  Truck,
} from "lucide-react";

import { useCart } from "../context/CartContext";

function Checkout() {
  const navigate = useNavigate();

  const { cart, clearCart } = useCart();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    payment: "cod",
  });

  const [error, setError] = useState("");
  const [placingOrder, setPlacingOrder] = useState(false);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal >= 999 || subtotal === 0 ? 0 : 79;

  const total = subtotal + shipping;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.phone ||
      !form.email ||
      !form.address ||
      !form.city ||
      !form.state ||
      !form.pincode
    ) {
      setError("Please fill all required fields.");
      return;
    }

    if (form.phone.length < 10) {
      setError("Please enter a valid phone number.");
      return;
    }

    if (form.pincode.length !== 6) {
      setError("Please enter a valid 6-digit pincode.");
      return;
    }

    setError("");
    setPlacingOrder(true);

    const order = {
      id: `DC${Date.now()}`,
      date: new Date().toLocaleDateString("en-IN"),
      customer: {
        name: form.name,
        phone: form.phone,
        email: form.email,
        address: form.address,
        city: form.city,
        state: form.state,
        pincode: form.pincode,
      },
      items: cart,
      subtotal,
      shipping,
      total,
      payment: form.payment,
      status: "Order Placed",
    };

    const previousOrders = JSON.parse(
      localStorage.getItem("dizzyCraftsOrders") || "[]"
    );

    localStorage.setItem(
      "dizzyCraftsOrders",
      JSON.stringify([order, ...previousOrders])
    );

    clearCart();

    setTimeout(() => {
      setPlacingOrder(false);
      navigate("/order-history");
    }, 800);
  };

  if (cart.length === 0) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-5">
        <div className="text-center">

          <ShoppingBag
            size={55}
            className="mx-auto text-stone-300"
          />

          <h1 className="mt-5 text-2xl font-bold text-stone-800">
            Your cart is empty
          </h1>

          <Link
            to="/"
            className="mt-5 inline-flex rounded-full bg-amber-700 px-6 py-3 font-bold text-white"
          >
            Continue Shopping
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">

      {/* HEADER */}
      <div className="mb-7">

        <Link
          to="/cart"
          className="inline-flex items-center gap-2 text-sm font-semibold text-stone-600 hover:text-amber-700"
        >
          <ArrowLeft size={17} />
          Back to Cart
        </Link>

        <h1 className="mt-4 text-2xl font-bold text-stone-800 sm:text-3xl">
          Checkout
        </h1>

        <p className="mt-1 text-sm text-stone-500">
          Complete your details to place your order.
        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        className="grid gap-6 lg:grid-cols-[1fr_380px]"
      >

        {/* LEFT */}
        <div className="space-y-6">

          {/* DELIVERY */}
          <section className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-6">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
                <MapPin
                  size={20}
                  className="text-amber-700"
                />
              </div>

              <div>
                <h2 className="text-lg font-bold text-stone-800">
                  Delivery Details
                </h2>

                <p className="text-xs text-stone-500">
                  Where should we deliver your crafts?
                </p>
              </div>

            </div>

            {/* FORM */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">

              <div className="sm:col-span-2">
                <label className="text-sm font-semibold text-stone-700">
                  Full Name *
                </label>

                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-stone-700">
                  Phone *
                </label>

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="10-digit phone number"
                  className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-stone-700">
                  Email *
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-semibold text-stone-700">
                  Address *
                </label>

                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  rows="3"
                  placeholder="House number, street, area"
                  className="mt-1.5 w-full resize-none rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-stone-700">
                  City *
                </label>

                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-stone-700">
                  State *
                </label>

                <input
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  placeholder="State"
                  className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-stone-700">
                  Pincode *
                </label>

                <input
                  name="pincode"
                  value={form.pincode}
                  onChange={handleChange}
                  inputMode="numeric"
                  maxLength={6}
                  placeholder="6-digit pincode"
                  className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-3 text-sm outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100"
                />
              </div>

            </div>

          </section>

          {/* PAYMENT */}
          <section className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-6">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <CreditCard
                  size={20}
                  className="text-green-700"
                />
              </div>

              <div>
                <h2 className="text-lg font-bold text-stone-800">
                  Payment Method
                </h2>

                <p className="text-xs text-stone-500">
                  Choose your preferred payment option.
                </p>
              </div>

            </div>

            <div className="mt-5 space-y-3">

              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-stone-200 p-4 hover:bg-stone-50">

                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={form.payment === "cod"}
                  onChange={handleChange}
                  className="accent-amber-700"
                />

                <div>
                  <p className="font-semibold text-stone-800">
                    Cash on Delivery
                  </p>

                  <p className="text-xs text-stone-500">
                    Pay when your order arrives.
                  </p>
                </div>

              </label>

              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-stone-200 p-4 hover:bg-stone-50">

                <input
                  type="radio"
                  name="payment"
                  value="online"
                  checked={form.payment === "online"}
                  onChange={handleChange}
                  className="accent-amber-700"
                />

                <div>
                  <p className="font-semibold text-stone-800">
                    Online Payment
                  </p>

                  <p className="text-xs text-stone-500">
                    Demo payment option.
                  </p>
                </div>

              </label>

            </div>

          </section>

        </div>

        {/* ORDER SUMMARY */}
        <aside className="h-fit lg:sticky lg:top-24">

          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm sm:p-6">

            <div className="flex items-center gap-2">
              <Truck
                size={20}
                className="text-amber-700"
              />

              <h2 className="text-xl font-bold text-stone-800">
                Order Summary
              </h2>
            </div>

            {/* ITEMS */}
            <div className="mt-5 max-h-64 space-y-3 overflow-y-auto">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-14 w-14 rounded-lg object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <p className="line-clamp-2 text-sm font-semibold text-stone-700">
                      {item.name}
                    </p>

                    <p className="mt-1 text-xs text-stone-500">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="text-sm font-bold text-stone-800">
                    ₹{item.price * item.quantity}
                  </p>
                </div>
              ))}

            </div>

            {/* TOTAL */}
            <div className="mt-5 space-y-3 border-t border-stone-200 pt-5 text-sm">

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

              <div className="flex justify-between border-t border-stone-200 pt-4">

                <span className="text-base font-bold">
                  Total
                </span>

                <span className="text-xl font-bold text-amber-800">
                  ₹{total}
                </span>

              </div>

            </div>

            {/* ERROR */}
            {error && (
              <div className="mt-4 rounded-lg bg-red-50 p-3 text-sm font-medium text-red-600">
                {error}
              </div>
            )}

            {/* PLACE ORDER */}
            <button
              type="submit"
              disabled={placingOrder}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-700 py-3.5 font-bold text-white transition hover:bg-amber-800 disabled:cursor-not-allowed disabled:bg-stone-400"
            >
              {placingOrder ? (
                "Placing Order..."
              ) : (
                <>
                  <CheckCircle size={19} />
                  Place Order
                </>
              )}
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-stone-500">
              By placing this order, you agree to our
              terms and shopping policies.
            </p>

          </div>

        </aside>

      </form>

    </main>
  );
}

export default Checkout;