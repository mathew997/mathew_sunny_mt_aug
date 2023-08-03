import React from "react";
import Brand from "./Brand";
import BMW from "../../assets/images/portfolio/bmw.png";
import Delmonte from "../../assets/images/portfolio/delmonte.png";
import Driving from "../../assets/images/portfolio/driving.png";
import NMC from "../../assets/images/portfolio/nmc.png";

const Portfolio = () => {
  const bmwTags = ["AGMC", "BMW", "Mini", "E-commerce", "oOrjit"];
  const delmonteTags = ["Delmonte", "E-commerce", "oOrjit"];
  const nmcTags = ["NMC", "Healthcare", "ollco"];
  const drivingTags = ["Business Application", "ERP", "oOrjit", "Odoo"];
  return (
    <section className="container mx-auto px-5 lg:px-28 grid gap-5 lg:gap-20">
      <Brand
        ImageUrl={BMW}
        BrandName="BMW"
        Header="Digital Showroom"
        HashTags={bmwTags}
      />

      <Brand
        ImageUrl={Delmonte}
        BrandName="Delmonte"
        Header="Delivered Fresh"
        HashTags={delmonteTags}
      />

      <Brand
        ImageUrl={NMC}
        BrandName="NMC"
        Header="Healthcare Digitized"
        HashTags={nmcTags}
      />

      <Brand
        ImageUrl={Driving}
        BrandName="Excellence Driving"
        Header="Learn Driving. The Digital Way."
        HashTags={drivingTags}
      />
    </section>
  );
};

export default Portfolio;
