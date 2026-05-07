import React from "react";
import Logo from "./HeaderLogo";
const Header = () => {
  return (
    <div className="2xl:hidden absolute z-40 left-0 top-0 right-0">
      <div className="container mx-auto">
        <div>
          {/* logo */}
          <Logo />
          {/* Nav Mobile Sheet Component*/}
        </div>
      </div>
    </div>
  );
};

export default Header;
