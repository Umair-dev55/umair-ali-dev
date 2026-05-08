"use client";
import NavLinks from "./NavLinks";
import HeaderLogo from "./HeaderLogo";
import { Download } from "lucide-react";

const MainNav = () => {
  return (
    <nav className="py-14 w-full flex flex-col justify-between items-center ">
      <HeaderLogo />
      <NavLinks containerStyles="flex p-5 uppercase" />
      {/* Download CV Btn  */}
      <a
        href="/assets/M.Umair Ali.pdf"
        target="_blank"
        download="Umair_Ali_CV.pdf"
        className="min-w-full flex justify-center md:min-w-0 pb-6"
      >
        <div className="btn btn-lg btn-tertiary max-w-15 gap-2 flex items-center">
          <span>Download CV</span>
          <Download size={20} />
        </div>
      </a>
    </nav>
  );
};

export default MainNav;
