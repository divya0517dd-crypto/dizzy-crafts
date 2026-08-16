import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  ArrowLeft,
  CalendarDays,
  ChevronDown,
  ChevronUp,
  Package,
  ShoppingBag,
  Truck,
} from "lucide-react";

function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [openOrder, setOpenOrder] = useState(null);

  useEffect(() => {
    const savedOrders = JSON.parse(
      localStorage.getItem("dizzyCraftsOrders") || "[]"
    );

    setOrders(savedOrders);
  }, []);

  const toggleOrder = (orderId) => {
    setOpenOrder((current) =>
      current === orderId ? null : orderId
    );
  };

  if (orders.length === 0) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-5 py-10">
        <div className="w-full max-w-md text-center">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-stone-100">
            <Package
              size={42}
              className="text-stone-400"
            />
          </div>

          <h1 className="mt-6 text-2xl font-bold text-stone-800">
            No Orders Yet
          </h1>

          <p className="mt-2 text-sm leading-6 text-stone-500">
            Your completed Dizzy Crafts orders will
            appear here.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-700 px-7 py-3 font-bold text-white transition hover:bg-amber-800"
          >
            <ShoppingBag size={18} />
            Start Shopping
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">

      {/* HEADER */}
      <div className="mb-7">

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-stone-600 hover:text-amber-700"
        >
          <ArrowLeft size={17} />
          Continue Shopping
        </Link>

        <div className="mt-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">

          <div>
            <h1 className="text-2xl font-bold text-stone-800 sm:text-3xl">
              My Orders
            </h1>

            <p className="mt-1 text-sm text-stone-500">
              Track and view your Dizzy Crafts orders.
            </p>
          </div>

          <div className="w-fit rounded-full bg-amber-50 px-4 py-2 text-sm font-bold text-amber-800">
            {orders.length}{" "}
            {orders.length === 1
              ? "Order"
              : "Orders"}
          </div>

        </div>

      </div>

      {/* ORDERS */}
      <div className="space-y-4">

        {orders.map((order) => {

          const isOpen = openOrder === order.id;

          return (
            <article
              key={order.id}
              className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
            >

              {/* ORDER HEADER */}
              <button
                type="button"
                onClick={() => toggleOrder(order.id)}
                className="w-full p-4 text-left transition hover:bg-stone-50 sm:p-5"
              >

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                  <div className="flex min-w-0 gap-3">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100">
                      <Package
                        size={21}
                        className="text-amber-700"
                      />
                    </div>

                    <div className="min-w-0">

                      <p className="text-xs font-semibold uppercase tracking-wide text-stone-400">
                        Order ID
                      </p>

                      <p className="truncate text-sm font-bold text-stone-800 sm:text-base">
                        {order.id}
                      </p>

                      <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-stone-500">

                        <span className="flex items-center gap-1">
                          <CalendarDays size={13} />
                          {order.date}
                        </span>

                        <span>
                          {order.items.length}{" "}
                          {order.items.length === 1
                            ? "item"
                            : "items"}
                        </span>

                      </div>

                    </div>

                  </div>

                  <div className="flex items-center justify-between gap-4 sm:justify-end">

                    <div className="text-left sm:text-right">

                      <p className="text-xs text-stone-500">
                        Total
                      </p>

                      <p className="font-bold text-amber-800">
                        ₹{order.total}
                      </p>

                    </div>

                    <div className="flex items-center gap-2">

                      <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-700">
                        {order.status}
                      </span>

                      {isOpen ? (
                        <ChevronUp
                          size={19}
                          className="text-stone-500"
                        />
                      ) : (
                        <ChevronDown
                          size={19}
                          className="text-stone-500"
                        />
                      )}

                    </div>

                  </div>

                </div>

              </button>

              {/* DETAILS */}
              {isOpen && (
                <div className="border-t border-stone-200 bg-stone-50 p-4 sm:p-5">

                  {/* PRODUCTS */}
                  <div>

                    <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-stone-600">
                      Items Ordered
                    </h2>

                    <div className="space-y-3">

                      {order.items.map((item) => (
                        <div
                          key={item.id}
                          className="flex gap-3 rounded-xl bg-white p-3"
                        >

                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-16 w-16 shrink-0 rounded-lg object-cover"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src =
                                "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=400&q=80";
                            }}
                          />

                          <div className="min-w-0 flex-1">

                            <p className="line-clamp-2 text-sm font-bold text-stone-800">
                              {item.name}
                            </p>

                            <p className="mt-1 text-xs text-stone-500">
                              ₹{item.price} × {item.quantity}
                            </p>

                          </div>

                          <p className="shrink-0 text-sm font-bold text-stone-800">
                            ₹{item.price * item.quantity}
                          </p>

                        </div>
                      ))}

                    </div>

                  </div>

                  {/* DELIVERY + PAYMENT */}
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">

                    <div className="rounded-xl bg-white p-4">

                      <div className="flex items-center gap-2">
                        <Truck
                          size={18}
                          className="text-amber-700"
                        />

                        <h3 className="font-bold text-stone-800">
                          Delivery Address
                        </h3>
                      </div>

                      <p className="mt-3 text-sm leading-6 text-stone-600">
                        {order.customer.name}
                        <br />
                        {order.customer.address}
                        <br />
                        {order.customer.city},{" "}
                        {order.customer.state}
                        <br />
                        PIN: {order.customer.pincode}
                        <br />
                        Phone: {order.customer.phone}
                      </p>

                    </div>

                    <div className="rounded-xl bg-white p-4">

                      <h3 className="font-bold text-stone-800">
                        Payment & Summary
                      </h3>

                      <div className="mt-3 space-y-2 text-sm">

                        <div className="flex justify-between">
                          <span className="text-stone-500">
                            Payment
                          </span>

                          <span className="font-semibold capitalize">
                            {order.payment === "cod"
                              ? "Cash on Delivery"
                              : "Online Payment"}
                          </span>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-stone-500">
                            Subtotal
                          </span>

                          <span>
                            ₹{order.subtotal}
                          </span>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-stone-500">
                            Shipping
                          </span>

                          <span>
                            {order.shipping === 0
                              ? "FREE"
                              : `₹${order.shipping}`}
                          </span>
                        </div>

                        <div className="flex justify-between border-t border-stone-200 pt-3 font-bold">
                          <span>Total</span>

                          <span className="text-amber-800">
                            ₹{order.total}
                          </span>
                        </div>

                      </div>

                    </div>

                  </div>

                </div>
              )}

            </article>
          );
        })}

      </div>

    </main>
  );
}

export default OrderHistory;