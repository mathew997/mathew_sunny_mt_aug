import React from "react";

const Brand = ({ ImageUrl, Header, BrandName, HashTags }) => {
  return (
    <section className="flex flex-col lg:grid grid-cols-3 gap-6 lg:gap-16">
      <div className="col-span-2">
        <img src={ImageUrl} alt={BrandName} />
      </div>
      <div className="col-span-1 my-auto">
        <div className="flex flex-col">
          <span className="brand-name relative text-lg">{BrandName}</span>

          <h2 className="header text-2xl lg:text-6xl text-[#344097] font-extralight py-6 lg:py-16">
            {Header}
          </h2>

          <ul className="tags lg:w-1/2">
            {HashTags.map((tag, index) => (
              <li
                className="text-[#344097] font-normal inline-block pr-4 pb-3"
                key={index}
              >
                #{tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Brand;
