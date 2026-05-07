import Link from "next/link";

const HeaderLogo = () => {
  return (
    <Link href="/" className="text-3xl">
      Umair
      <span className="text-base text-white/60">/Dev</span>
    </Link>
  );
};

export default HeaderLogo;
