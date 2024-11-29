import product_1 from "@assets/images/products/product_1.webp";
import product_1_1 from "@assets/images/products/product_1_1.webp";
import product_2 from "@assets/images/products/product_2.webp";
import product_2_2 from "@assets/images/products/product_2_2.webp";
import product_3 from "@assets/images/products/product_3.webp";
import product_3_3 from "@assets/images/products/product_3_3.webp";

export interface IProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  hoverImage?: string;
  description?: string;
}

export const products = [
  {
    id: "1",
    name: "Product One",
    price: 49.99,
    image: product_1_1,
    hoverImage: product_1,
  },
  {
    id: "2",
    name: "Product Two",
    price: 59.99,
    image: product_2,
    hoverImage: product_2_2,
  },
  {
    id: "3",
    name: "Product Three",
    price: 39.99,
    image: product_3,
    hoverImage: product_3_3,
  },
];
