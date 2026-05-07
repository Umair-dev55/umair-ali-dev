import Link from "next/link";

const HeaderLogo = () => {
  return (
    <Link href={"/"} className="text-2xl  font-bold ">
      Umair
      <span className="text-sm">/DEV</span>
    </Link>
  );
};

export default HeaderLogo;
