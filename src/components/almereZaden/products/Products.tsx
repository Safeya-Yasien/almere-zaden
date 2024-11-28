import { CustomTitle } from "@/components/common";

const Products = () => {
  return (
    <div className="py-8">
      {/* custom title */}
      <CustomTitle title={"Trending Products"} desc={"Lorem ipsum dolor"} />

      {/* filter */}
      <ul className="flex items-center justify-center gap-4">
        <li>
          <button className="border-2  px-6 py-2 rounded-3xl  transition-all duration-500 border-sunset-orange bg-[#324700] text-white ">
            Featured
          </button>
        </li>
        <li>
          {/* #324700  */}
          <button className="border-2 border-[#e0e0df] px-6 py-2 text-[#888888] rounded-3xl  transition-all duration-500 hover:border-sunset-orange hover:bg-[#324700] hover:text-white ">
            Latest
          </button>
        </li>
        <li>
          <button className="border-2 border-[#e0e0df] px-6 py-2 text-[#888888] rounded-3xl  transition-all duration-500 hover:border-sunset-orange hover:bg-[#324700] hover:text-white ">
            Bestseller
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Products;
