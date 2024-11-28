import aboutBg from "@assets/images/about-bg.webp";
import about from "@assets/images/about.webp";
const About = () => {
  return (
    <>
      <div
        className="bg-cover bg-center h-100 mb-5"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 ">
          <div className="sm:px-24 pt-5">
            <h2 className="text-sunset-orange text-[30px] font-bold mb-5">
              About Us
            </h2>
            <p className="text-gray-300  text-[20px] ">
              Welcome to Almere Zaden, where our passion for high-quality
              vegetable seeds is driven by a commitment to ethical practices and
              exceptional breeding standards. Founded in the heart of the
              Netherlands, our mission is fueled by the desire to share the
              excellence that characterizes this region’s renowned horticultural
              practices with the entire world.
            </p>
            <button className="bg-transparent hover:bg-sunset-orange text-sunset-orange font-semibold hover:text-white py-2 px-4 border border-sunset-orange hover:border-transparent rounded mt-8">
              Read more
            </button>
          </div>

          <div className="flex justify-center">
            <img
              src={about}
              alt="About"
              className="w-full max-w-md object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
