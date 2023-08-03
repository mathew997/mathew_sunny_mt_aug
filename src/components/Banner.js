import React from "react";
import HeroImage from "../assets/images/hero-image.png";

const Banner = () => {
  return (
    <section className="container mx-auto pl-5 lg:pl-28">
      <div className="flex flex-col-reverse lg:grid grid-col-3">
        <div className="text-wrapper col-span-1 flex flex-col justify-center">
          <span className="uppercase text-xs text-[#333E95] font-normal">
            WE MAKE IT HAPPEN
          </span>
          <h1 className="text-2xl lg:text-6xl font-light mt-5 lg:mt-16">
            <span className="block text-[#344097]">Learn Driving.</span>
            <span className="block text-[#7F829C]">The Digital Way.</span>
          </h1>

          <a className="mt-6 lg:mt-28 text-[#333E95] font-normal w-fit border-dashed border-b-2">
            More projects
          </a>
        </div>
        <div className="image-wrapper col-start-2 col-end-4 h-screen">
          <img
            src={HeroImage}
            className="h-full w-full object-cover"
            alt="Hero image"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
