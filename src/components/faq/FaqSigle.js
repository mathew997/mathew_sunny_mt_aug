import React from "react";
import { MinusIcon, PlusIcon } from "../../assets/icons";

const FaqSigle = ({ Header, Description, Open }) => {
  return (
    <>
      <details
        className="accordion group pb-10 border-b border-[#DCDCDC]"
        open={Open}
      >
        <summary className="list-none">
          <div className="flex gap-5 lg:gap-20 justify-between">
            <h3 className="heading text-2xl lg:text-4xl text-[#344097] font-extralight cursor-pointer">
              {Header}
            </h3>
            <div className="pt-4">
              <div className="icon group-open:hidden">
                <MinusIcon />
              </div>
              <div className="icon hidden group-open:block">
                <PlusIcon />
              </div>
            </div>
          </div>
        </summary>
        <p className="description text-xl lg:text-4xl text-[#7F829C] font-extralight mt-6">
          {Description}
        </p>
      </details>
    </>
  );
};

export default FaqSigle;
