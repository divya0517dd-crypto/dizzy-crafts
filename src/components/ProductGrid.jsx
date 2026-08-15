import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import ProductCard from "./ProductCard";

function ProductGrid({ products }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [products, search, category]);

  return (
    <div>

      {/* Search + Filter */}
      <div className="mb-8 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          {/* Search */}
          <div className="flex w-full items-center rounded-full border border-stone-200 bg-stone-50 px-4 py-3 lg:max-w-md">

            <Search
              size={20}
              className="shrink-0 text-stone-400"
            />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search handmade crafts..."
              className="ml-3 w-full bg-transparent text-sm outline-none placeholder:text-stone-400"
            />

          </div>

          {/* Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">

            <SlidersHorizontal
              size={18}
              className="shrink-0 text-stone-500"
            />

            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                  category === item
                    ? "bg-amber-700 text-white"
                    : "bg-stone-100 text-stone-600 hover:bg-amber-100 hover:text-amber-800"
                }`}
              >
                {item}
              </button>
            ))}

          </div>

        </div>

      </div>

      {/* Result Count */}
      <div className="mb-6 flex items-center justify-between">

        <p className="text-sm text-stone-500">
          Showing{" "}
          <span className="font-bold text-stone-800">
            {filteredProducts.length}
          </span>{" "}
          products
        </p>

        {search && (
          <button
            type="button"
            onClick={() => setSearch("")}
            className="text-sm font-semibold text-amber-700 hover:text-amber-800"
          >
            Clear Search
          </button>
        )}

      </div>

      {/* Products */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-stone-300 bg-white px-5 py-16 text-center">

          <div className="text-5xl">
            🔍
          </div>

          <h3 className="mt-5 text-2xl font-bold text-stone-800">
            No Crafts Found
          </h3>

          <p className="mt-2 text-stone-500">
            Try another product name or category.
          </p>

          <button
            type="button"
            onClick={() => {
              setSearch("");
              setCategory("All");
            }}
            className="mt-6 rounded-full bg-stone-800 px-6 py-3 font-semibold text-white transition hover:bg-amber-700"
          >
            Show All Products
          </button>

        </div>
      )}

    </div>
  );
}

export default ProductGrid;