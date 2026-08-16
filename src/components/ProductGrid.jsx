import { useMemo } from "react";
import { useSearchParams } from "react-router";
import ProductCard from "./ProductCard";

function ProductGrid({ products = [] }) {
  const [searchParams] = useSearchParams();

  const searchQuery = (
    searchParams.get("search") || ""
  ).toLowerCase().trim();

  const filteredProducts = useMemo(() => {
    if (!searchQuery) {
      return products;
    }

    return products.filter((product) => {
      const name = String(product.name || "").toLowerCase();
      const category = String(product.category || "").toLowerCase();
      const description = String(
        product.description || ""
      ).toLowerCase();

      return (
        name.includes(searchQuery) ||
        category.includes(searchQuery) ||
        description.includes(searchQuery)
      );
    });
  }, [products, searchQuery]);

  return (
    <section className="w-full">

      {/* HEADER */}
      <div className="mb-4 flex items-center justify-between gap-3 sm:mb-6">

        <div className="min-w-0">
          <h2 className="text-xl font-bold text-stone-800 sm:text-2xl lg:text-3xl">
            {searchQuery
              ? `Search results for "${searchQuery}"`
              : "Explore Our Crafts"}
          </h2>

          <p className="mt-1 text-xs text-stone-500 sm:text-sm">
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1
              ? "product"
              : "products"}{" "}
            available
          </p>
        </div>

        {/* Product count */}
        <div className="shrink-0 rounded-full bg-stone-100 px-3 py-1.5 text-xs font-semibold text-stone-600 sm:px-4 sm:py-2">
          {filteredProducts.length} items
        </div>

      </div>

      {/* PRODUCTS */}
      {filteredProducts.length > 0 ? (

        <div
          className="
            grid
            grid-cols-2
            gap-2.5
            min-[480px]:gap-3
            sm:grid-cols-2
            sm:gap-4
            md:grid-cols-3
            lg:grid-cols-4
            xl:gap-5
          "
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      ) : (

        /* EMPTY SEARCH */
        <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed border-stone-300 bg-stone-50 px-5 text-center">

          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl shadow-sm">
            🔍
          </div>

          <h3 className="text-lg font-bold text-stone-800">
            No crafts found
          </h3>

          <p className="mt-2 max-w-md text-sm text-stone-500">
            We couldn't find any products matching
            {searchQuery && (
              <span className="font-semibold text-stone-700">
                {" "}
                "{searchQuery}"
              </span>
            )}
            .
          </p>

        </div>

      )}

    </section>
  );
}

export default ProductGrid;