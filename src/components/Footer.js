import React from "react";

const Footer = () => {
  return (
    <footer className="footer container mx-auto px-5 lg:px-28 py-7 lg:py-16">
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-28">
        <div className="flex-[2]">
          <h2 className="text-2xl lg:text-6xl font-extralight">
            <span className="text-[#344097]">Realize Your Digital Vision.</span>
            <span className="text-[#7F829C] block">Let's Talk</span>
          </h2>
        </div>
        <div className="flex-1">
          <a className="text-[#344097] h-36 w-36 aspect-square border-dashed border-2 flex items-center justify-center rounded-full cursor-pointer hover:bg-[#344097] hover:text-white transition-all ease-in-out duration-200">
            Contact Us
          </a>
        </div>
      </div>

      <div className="footer-nav grid gap-5 grid-cols-1 lg:grid-cols-3 mt-8 lg:mt-10 border-t pt-5 lg:pt-16">
        <div className="item">
          <a className="text-3xl text-[#344097] font-extralight">
            info@innovazia.com
          </a>

          <div className="flex gap-4 mt-3.5 flex-wrap">
            <div className="flex gap-2.5">
              <span className="text-[#808080]">Tel : </span>
              <span className="text-[#263D4D]">+971 4 3966233</span>
            </div>
            <div className="flex gap-2.5">
              <span className="text-[#808080]">Tel : </span>
              <span className="text-[#263D4D]">+971 4 3966233</span>
            </div>
          </div>
        </div>

        <div className="lg:text-center text-[#7F829C]">
          Innovazia Technologies LLC, Office Number #415, Hamsah Comples, Karama
          Opposite: Ministry of External Affairs, P O Box 28023 - Dubai, UAE
          Internet city, Dubai, UAE
        </div>

        <div className="item lg:text-right">
          <span className="block text-[#344097]">Privacy Policy</span>
          <span className="block text-[#7F829C]">
            © 2021 Innovazia Technologies LLC.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
