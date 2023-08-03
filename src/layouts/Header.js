import React from "react";
import BrandLogo from "../assets/images/brand-logo.png";
import { ToggleIcon } from "../assets/icons";

const Header = () => {
  return (
    <header className="container mx-auto px-5 lg:px-28 mt-6 fixed">
      <div className="flex items-center">
        <div className="logo">
          <img src={BrandLogo} />
        </div>

        <nav className="ml-auto hidden lg:block">
          <ul className="uppercase flex gap-16 items-center text-xs">
            <li className="text-[#323232]">Services</li>
            <li className="text-[#323232]">Clients</li>
            <li className="text-[#323232]">About Us</li>
            <li className="text-[#323232]">PLATFORMS</li>
            <li className="bg-[#344097] text-white py-2.5 px-6 rounded-full hover:bg-white border-2 hover:text-[#344097] hover:border-[#344097] transition-all ease-in-out duration-200">
              Let's Talk
            </li>
            <li>
              <button type="button">
                <ToggleIcon />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
