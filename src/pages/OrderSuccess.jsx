import { Link } from "react-router";
import { CheckCircle, ShoppingBag, Package } from "lucide-react";

function OrderSuccess() {
  return (
    <main className="flex min-h-[75vh] items-center justify-center px-5">

      <div className="w-full max-w-lg rounded-3xl border border-stone-200 bg-white p-8 text-center shadow-sm sm:p-10">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <CheckCircle
            size={45}
            className="text-green-600"
          />
        </div>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">
          Thank You
        </p>

        <h1 className="mt-2 text-3xl font-bold text-stone-800">
          Order Placed Successfully!
        </h1>

        <p className="mt-4 leading-7 text-stone-500">
          Your handmade craft order has been placed successfully.
          You can track your order from Order History.
        </p>

        <div className="mt-7 rounded-2xl bg-stone-50 p-5">

          <div className="flex items-center justify-center gap-3 text-stone-700">
            <Package size={22} />
            <span className="font-semibold">
              Order Confirmed
            </span>
          </div>

        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">

          <Link
            to="/orders"
            className="flex items-center justify-center gap-2 rounded-full bg-stone-800 px-5 py-3 font-semibold text-white hover:bg-amber-700"
          >
            <Package size={18} />
            Order History
          </Link>

          <Link
            to="/"
            className="flex items-center justify-center gap-2 rounded-full border border-stone-300 px-5 py-3 font-semibold text-stone-700 hover:border-amber-700 hover:text-amber-700"
          >
            <ShoppingBag size={18} />
            Continue Shopping
          </Link>

        </div>

      </div>

    </main>
  );
}

export default OrderSuccess;