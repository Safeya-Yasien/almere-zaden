import { CustomTitle } from "@/components/common";
import { Link } from "react-router-dom";

import product_1 from "@assets/images/products/product_1.webp";
import product_1_1 from "@assets/images/products/product_1_1.webp";
import product_2 from "@assets/images/products/product_2.webp";
import product_2_2 from "@assets/images/products/product_2_2.webp";
import product_3 from "@assets/images/products/product_3.webp";
import product_3_3 from "@assets/images/products/product_3_3.webp";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Product One",
    price: 49.99,
    image: product_1_1,
    hoverImage: product_1,
  },
  {
    id: 2,
    name: "Product Two",
    price: 59.99,
    image: product_2,
    hoverImage: product_2_2,
  },
  {
    id: 3,
    name: "Product Three",
    price: 39.99,
    image: product_3,
    hoverImage: product_3_3,
  },
];

const Products = () => {
  const [activeFilter, setActiveFilter] = useState("Featured");

  const filters = ["Featured", "Latest", "Bestseller"];

  return (
    <div className="py-8">
      {/* Custom Title */}
      <CustomTitle title="Trending Products" desc="Lorem ipsum dolor" />

      {/* Filter Buttons */}
      <ul className="flex items-center justify-center gap-4">
        {filters.map((filter) => (
          <li key={filter}>
            <button
              onClick={() => setActiveFilter(filter)}
              className={`border-2 px-6 py-2 rounded-3xl transition-all duration-500 ${
                activeFilter === filter
                  ? "border-sunset-orange bg-custom-green text-white"
                  : "border-[#e0e0df] text-[#888888] hover:border-sunset-orange hover:bg-custom-green hover:text-white"
              }`}
            >
              {filter}
            </button>
          </li>
        ))}
      </ul>

      {/* Product Grid */}
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mt-12 gap-x-8 gap-y-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-[#eeeeee] rounded-md p-3 flex flex-col gap-6 
               transition-all duration-500 hover:shadow-lg "
            >
              <Link
                to=""
                key={product.id}
                className="flex flex-col gap-4 border rounded-md "
              >
                <div className="relative w-full h-60">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover hover:opacity-0 absolute z-10 transition-opacity duration-500 rounded-md w-full h-full"
                  />
                  <img
                    src={product.hoverImage}
                    alt={product.name}
                    className="absolute object-cover rounded-md w-full h-full"
                  />
                </div>
              </Link>
              {/* bg-[#F7F7F7] */}
              <div className="flex flex-col items-center justify-between pb-4 ">
                <span className="font-medium">{product.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
