import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
          link: "https://github.com/mdwiastika/mdwitech",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          link: "https://github.com/mdwiastika/mdwitech",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
          link: "https://github.com/mdwiastika/mdwitech",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
          link: "https://github.com/mdwiastika/mdwitech",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
          link: "https://github.com/mdwiastika/mdwitech",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
          link: "https://github.com/mdwiastika/mdwitech",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          link: "https://github.com/mdwiastika/mdwitech",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
          link: "https://github.com/mdwiastika/mdwitech",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div className="relative rounded-lg overflow-hidden flex items-center justify-center group" key={index}>
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      <Image src={image.path} width={500} height={300} alt={image.title} />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                    </div>
                    <a href={image.link} target="_blank" className="absolute -top-5 group-hover:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300">
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                        <div className="delay-100">LIVE</div>
                        <div className="-translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">PROJECT</div>
                        <div className="">
                          <BsArrowRight />
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
