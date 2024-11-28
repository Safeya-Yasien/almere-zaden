import swiper6 from "@assets/images/swiper2.jpg";
import swiper5 from "@assets/images/swiper3.jpg";
import swiper4 from "@assets/images/swiper5.jpg";
import swiper3 from "@assets/images/swiper1.jpg";
import swiper1 from "@assets/images/swiper6.jpg";
import swiper2 from "@assets/images/swiper7.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css" ;
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <Swiper
      spaceBetween={30}
      modules={[Navigation]}
      className="w-[100%] h-[70vh] m-0"
    >
      <SwiperSlide>
        <SwiperSlice image={swiper1} text={"Title 1"} />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSlice image={swiper2} text={"Title 2"} />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSlice image={swiper3} text={"Title 3"} />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSlice image={swiper4} text={"Title 4"} />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSlice image={swiper5} text={"Title 5"} />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSlice image={swiper6} text={"Title 6"} />
      </SwiperSlide>
    </Swiper>
  );
};
export default Hero;

const SwiperSlice = ({ image, text }: {image:string, text:string}) => {
  return (
    <div className="relative">
      <img src={image} alt="swiper1" className="w-full h-[90vh] object-cover" />
      {/* Light overlay on text */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
        <div className="p-4 rounded-md">
          <h2 className="text-white text-4xl font-bold">{text}</h2>
        </div>
      </div>
    </div>
  );
};
