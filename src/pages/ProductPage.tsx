import { CustomHero } from "@/components/almereZaden";
import { useParams } from "react-router-dom";
import { products } from "@/data/products";

const ProductPage = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      {/* Hero Section */}
      <CustomHero prevPage="Home" currentPage={product.name} />

      {/* Product Card */}
      <div className="flex flex-col md:flex-row items-center gap-8 p-6">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-md shadow-lg"
          />
        </div>

        {/* Product Information */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-700">{product.description}</p>
          <span className="text-2xl font-semibold text-green-600">
            {product.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
