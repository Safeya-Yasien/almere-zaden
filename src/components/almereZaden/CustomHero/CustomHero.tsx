import { Link } from "react-router-dom";

const CustomHero = ({
  prevPage,
  currentPage,
}: {
  prevPage: string;
  currentPage: string;
}) => {
  return (
    <div
      className="bg-[url('assets/images/single-product-page.webp')] bg-no-repeat bg-cover bg-center h-[250px]
  text-center flex items-center justify-center "
    >
      <div className="flex items-center justify-center gap-4 text-4xl text-white ">
        <Link to={`/${prevPage.toLowerCase()}`} className="">
          {prevPage}
        </Link>
        <span> / </span>
        <span className="text-sunset-orange font-bold ">{currentPage}</span>
      </div>
    </div>
  );
};
export default CustomHero;
