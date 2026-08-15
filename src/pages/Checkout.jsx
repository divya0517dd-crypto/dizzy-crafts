import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, CheckCircle, CreditCard } from "lucide-react";

import { useCart } from "../context/CartContext";

function Checkout() {
  const navigate = useNavigate();

  const {
    cartItems,
    cartTotal,
    clearCart,
  } = useCart();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [payment, setPayment] = useState("Cash on Delivery");

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handlePlaceOrder = (event) => {
    event.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.address ||
      !form.city ||
      !form.pincode
    ) {
      setError("Please fill all required fields.");
      return;
    }

    const newOrder = {
      id: `DC-${Date.now()}`,
      date: new Date().toLocaleDateString(),
      customer: form,
      payment,
      items: cartItems,
      total: cartTotal,
      status: "Order Placed",
    };

    const oldOrders =
      JSON.parse(localStorage.getItem("dizzyOrders")) || [];

    localStorage.setItem(
      "dizzyOrders",
      JSON.stringify([newOrder, ...oldOrders])
    );

    clearCart();

    navigate("/order-success");
  };

  if (cartItems.length === 0) {
    return (
      <main className="flex min-h-[75vh] items-center justify-center px-5">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-stone-800">
            Your cart is empty
          </h1>

          <Link
            to="/"
            className="mt-6 inline-block rounded-full bg-amber-700 px-6 py-3 font-semibold text-white"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-5 py-10">

      <Link
        to="/cart"
        className="mb-8 inline-flex items-center gap-2 text-sm text-stone-600 hover:text-amber-700"
      >
        <ArrowLeft size={18} />
        Back to Cart
      </Link>

      <div className="grid gap-10 lg:grid-cols-[1fr_380px]">

        {/* FORM */}
        <form
          onSubmit={handlePlaceOrder}
          className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <h1 className="text-3xl font-bold text-stone-800">
            Checkout
          </h1>

          <p className="mt-2 text-stone-500">
            Enter your delivery details
          </p>

          {error && (
            <div className="mt-5 rounded-xl bg-red-50 p-4 text-sm font-medium text-red-600">
              {error}
            </div>
          )}

          <div className="mt-8 grid gap-5 sm:grid-cols-2">

            <div className="sm:col-span-2">
              <label className="text-sm font-semibold text-stone-700">
                Full Name *
              </label>

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-600"
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
                className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-600"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-stone-700">
                Phone *
              </label>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-600"
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
                placeholder="House no, street, area"
                className="mt-2 w-full resize-none rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-600"
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
                className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-600"
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
                placeholder="Pincode"
                className="mt-2 w-full rounded-xl border border-stone-300 px-4 py-3 outline-none focus:border-amber-600"
              />
            </div>

          </div>

          {/* PAYMENT */}
          <div className="mt-8">

            <h2 className="text-lg font-bold text-stone-800">
              Payment Method
            </h2>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">

              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-stone-300 p-4">
                <input
                  type="radio"
                  value="Cash on Delivery"
                  checked={payment === "Cash on Delivery"}
                  onChange={(e) => setPayment(e.target.value)}
                />

                <span className="font-medium">
                  Cash on Delivery
                </span>
              </label>

              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-stone-300 p-4">
                <input
                  type="radio"
                  value="Card"
                  checked={payment === "Card"}
                  onChange={(e) => setPayment(e.target.value)}
                />

                <span className="flex items-center gap-2 font-medium">
                  <CreditCard size={18} />
                  Card
                </span>
              </label>

            </div>

          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-stone-800 px-6 py-4 font-semibold text-white transition hover:bg-amber-700"
          >
            Place Order — ₹{cartTotal}
          </button>

        </form>

        {/* SUMMARY */}
        <aside className="h-fit rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">

          <h2 className="text-xl font-bold text-stone-800">
            Order Summary
          </h2>

          <div className="mt-6 space-y-4">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded-lg object-cover"
                />

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">
                    {item.name}
                  </p>

                  <p className="text-xs text-stone-500">
                    Qty: {item.quantity}
                  </p>
                </div>

                <p className="text-sm font-bold">
                  ₹{item.price * item.quantity}
                </p>
              </div>
            ))}

          </div>

          <div className="mt-6 border-t pt-5">

            <div className="flex justify-between">
              <span className="font-semibold">
                Total
              </span>

              <span className="text-xl font-bold text-amber-800">
                ₹{cartTotal}
              </span>
            </div>

          </div>

        </aside>

      </div>

    </main>
  );
}

export default Checkout;