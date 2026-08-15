import { Routes, Route } from "react-router";
import Wishlist from "./pages/Wishlist";

import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import OrderHistory from "./pages/OrderHistory";

import products from "./data/products";

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-amber-50">

        <div className="mx-auto max-w-7xl px-5 py-20 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">
            Handmade With Love
          </p>

          <h1 className="mt-4 text-5xl font-bold text-stone-800 sm:text-6xl">
            Discover Beautiful
            <span className="block text-amber-700">
              Handmade Crafts
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-stone-600">
            Unique handmade crafts created with creativity,
            passion and love.
          </p>

          <a
            href="#products"
            className="mt-8 inline-block rounded-full bg-stone-800 px-8 py-3 font-semibold text-white transition hover:bg-amber-700"
          >
            Shop Collection
          </a>

        </div>

      </section>

      {/* PRODUCTS */}
      <section
        id="products"
        className="mx-auto max-w-7xl px-5 py-16"
      >

        <div className="mb-10">

          <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">
            Our Collection
          </p>

          <h2 className="mt-2 text-3xl font-bold text-stone-800">
            Featured Crafts
          </h2>

          <p className="mt-2 text-stone-500">
            Discover our collection of handmade products.
          </p>

        </div>

        <ProductGrid products={products} />

      </section>
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-stone-50">

      <Navbar />

      <Routes>
        <Route
  path="/wishlist"
  element={<Wishlist />}
/>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />

        <Route
          path="/order-success"
          element={<OrderSuccess />}
        />

        <Route
          path="/orders"
          element={<OrderHistory />}
        />

      </Routes>

    </div>
  );
}

export default App;