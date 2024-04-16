import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";

const heroHeight = {
  height: "80vh",
};

const Slider = ({ handleScroll }) => {
  return (
    <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={heroHeight}
        modules={[Autoplay]}
        className="mySwiper mb-16"
      >
        <SwiperSlide>
          <div
            className="hero  h-full rounded-[50px] overflow-hidden"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/WsbnNy8/Beautiful-Family-Home.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-45 "></div>
            <div className="hero-content  mt-52 text-center text-neutral-content">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-5xl font-bold">
                  Beautiful Family Home
                </h1>
                <p className="mb-5">
                  Modern townhouse in a prime location, offering sophisticated
                  living spaces and contemporary design elements.
                </p>
                <button
                  onClick={handleScroll}
                  className="btn rounded-full bg-opacity-50 hover:bg-sky-500 duration-300 px-10 hover:text-white outline-0 border-0"
                >
                  Explore All
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero  h-full rounded-[50px] overflow-hidden "
            style={{
              backgroundImage:
                "url(https://i.ibb.co/rsCxq6q/Senior-Living.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-45"></div>
            <div className="hero-content mt-52 text-center text-neutral-content">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-5xl font-bold">
                  Senior Living Community
                </h1>
                <p className="mb-5">
                  Retirement community with various amenities, offering a
                  tranquil and supportive environment for seniors to enjoy their
                  golden years.
                </p>
                <button
                  onClick={handleScroll}
                  className="btn rounded-full  bg-opacity-50 hover:bg-sky-500 duration-300 px-10 hover:text-white outline-0 border-0"
                >
                  Explore All
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero h-full rounded-[50px] overflow-hidden"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/FWNZDhF/Vacation-Rentals.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-45"></div>
            <div className="hero-content mt-52 text-center text-neutral-content">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-5xl font-bold">Vacation Rentals</h1>
                <p className="mb-5">
                  Exquisite villa with private beach access and stunning ocean
                  views, offering the ultimate retreat for relaxation and
                  rejuvenation.
                </p>
                <button
                  onClick={handleScroll}
                  className="btn rounded-full  bg-opacity-50 hover:bg-sky-500 duration-300 px-10 hover:text-white outline-0 border-0"
                >
                  Explore All
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
