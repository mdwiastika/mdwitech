import { Swiper, SwiperSlide } from "swiper/react";
import { RxDesktop, RxRocket, RxArrowTopRight, RxFigmaLogo } from "react-icons/rx";
import { RiReactjsLine, RiCloudLine } from "react-icons/ri";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
const serviceData = [
  {
    icon: <RiReactjsLine />,
    title: "Web Development",
    description: "From concept to execution, we craft responsive and user-friendly websites to enhance your online presence.",
  },
  {
    icon: <RxFigmaLogo />,
    title: "UI/UX",
    description: "Elevate user satisfaction with our UI/UX design services. We focus on creating visually appealing and intuitive.",
  },
  {
    icon: <RxDesktop />,
    title: "Desktop Development",
    description: "Our team specializes in creating tailor-made desktop app that align with your unique business needs.",
  },
  {
    icon: <RiCloudLine />,
    title: "Web Hosting & Domain",
    description: "We ensuring a smooth transition from development to a live and accessible online presence.",
  },
  {
    icon: <RxRocket />,
    title: "SEO Optimization",
    description: "We implement strategies to enhance search engine rankings to your website and increasing its discoverability.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={false}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">{item.description}</p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
