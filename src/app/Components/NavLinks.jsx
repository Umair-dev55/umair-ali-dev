import Link from "next/link";
import React from "react";

const NavLinks = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Contact", href: "/contact" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div>
      {links.map((link, index) => (
        <Link className=" flex flex-col p-6" key={index} href={link.href}>
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
