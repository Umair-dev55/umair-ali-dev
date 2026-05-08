import Link from "next/link";

const NavLinks = ({ containerStyles }) => {
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
          <Link className={`${containerStyles}`} key={idx} href={link.href}>
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
