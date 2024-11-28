import { Categories, Hero, Products, Vision } from "@/components/almereZaden";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="flex flex-col gap-12 px-6 md:px-24 pb-16 ">
        <Categories />
        <Products />
        <Vision />
      </div>
    </>
  );
};
export default Home;
