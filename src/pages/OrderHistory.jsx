import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  Package,
  CalendarDays,
  ShoppingBag,
} from "lucide-react";

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders =
      JSON.parse(localStorage.getItem("dizzyOrders")) || [];

    setOrders(savedOrders);
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-5 py-10 sm:py-14">

      <div className="mb-10">

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
          Your Orders
        </p>

        <h1 className="mt-2 text-4xl font-bold text-stone-800">
          Order History
        </h1>

      </div>

      {orders.length === 0 ? (
        <div className="rounded-3xl border border-stone-200 bg-white p-10 text-center shadow-sm">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-100">
            <Package
              size={38}
              className="text-amber-700"
            />
          </div>

          <h2 className="mt-6 text-2xl font-bold text-stone-800">
            No Orders Yet
          </h2>

          <p className="mt-2 text-stone-500">
            Your completed orders will appear here.
          </p>

          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-stone-800 px-6 py-3 font-semibold text-white hover:bg-amber-700"
          >
            <ShoppingBag size={18} />
            Start Shopping
          </Link>

        </div>
      ) : (
        <div className="space-y-6">

          {orders.map((order) => (

            <div
              key={order.id}
              className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
            >

              {/* Order Header */}
              <div className="flex flex-col gap-4 border-b border-stone-200 bg-stone-50 p-5 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                    Order ID
                  </p>

                  <p className="mt-1 font-bold text-stone-800">
                    {order.id}
                  </p>

                </div>

                <div className="flex items-center gap-2 text-sm text-stone-500">
                  <CalendarDays size={17} />
                  {order.date}
                </div>

                <span className="w-fit rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  {order.status}
                </span>

              </div>

              {/* Products */}
              <div className="space-y-4 p-5">

                {order.items.map((item) => (

                  <div
                    key={item.id}
                    className="flex items-center gap-4"
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 rounded-xl object-cover"
                    />

                    <div className="min-w-0 flex-1">

                      <h3 className="truncate font-semibold text-stone-800">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-sm text-stone-500">
                        Quantity: {item.quantity}
                      </p>

                    </div>

                    <p className="font-bold text-amber-800">
                      ₹{item.price * item.quantity}
                    </p>

                  </div>

                ))}

              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-stone-200 p-5">

                <div>
                  <p className="text-sm text-stone-500">
                    Payment
                  </p>

                  <p className="font-semibold text-stone-800">
                    {order.payment}
                  </p>
                </div>

                <div className="text-right">

                  <p className="text-sm text-stone-500">
                    Total
                  </p>

                  <p className="text-2xl font-bold text-amber-800">
                    ₹{order.total}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>
      )}

    </main>
  );
}

export default OrderHistory;