import React from "react";

const Contact = () => {
  return (
    <section className="container mx-auto px-5 lg:px-28 py-7 lg:py-16">
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-28">
        <div className="flex-[2]">
          <h2 className="text-2xl lg:text-4xl font-extralight">
            <span className="block text-[#344097]">
              Innovazia is a Digital Experience Agency that delivers
              <span className="highlight after:hidden lg:after:block">
                {" "}
                high performance
              </span>{" "}
              digital experiences for
            </span>
            <span className="block text-[#7F829C]">
              mid-range and large enterprises as well as startups.
            </span>
          </h2>
        </div>
        <div className="flex-1">
          <a className="text-[#344097] h-36 w-36 aspect-square border-dashed border-2 flex items-center justify-center rounded-full cursor-pointer hover:bg-[#344097] hover:text-white transition-all ease-in-out duration-200">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
