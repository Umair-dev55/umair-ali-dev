import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const NavLinks = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div>
      {links.map((link, idx) => {
        // return <Link key={idx}>{link.label}</Link>;
        return (
          <Link className="flex p-5 uppercase" key={idx} href={link.href}>
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
