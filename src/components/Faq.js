import React from "react";
import FaqSigle from "./faq/FaqSigle";

const Faq = () => {
  const faqArray = [
    {
      heading:
        "Innovazia is a Digital Experience Agency that delivers high performance digital experiences for mid-range and large enterprises as well as startups.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      open: true,
    },
    {
      heading: "Do you provide dealership CRM as well?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      open: false,
    },
    {
      heading: "Realize Your Digital Vision.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      open: false,
    },
  ];
  return (
    <section className="container mx-auto px-5 lg:px-28 py-6 lg:py-16">
      <h1 className="text-2xl lg:text-7xl text-[#344097] font-extralight mb-7">
        FAQ
      </h1>

      {faqArray.map((item, index) => (
        <FaqSigle
          key={index}
          Header={item?.heading}
          Description={item?.description}
          Open={item?.open}
        />
      ))}
    </section>
  );
};

export default Faq;
