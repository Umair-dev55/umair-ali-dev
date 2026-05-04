"use client";
import Link from "next/link";
import {
  RiGithubLine,
  RiLinkedinLine,
  RiMailLine,
  RiPhoneLine,
} from "@remixicon/react";

const socials = [
  {
    name: "Phone",
    icon: RiPhoneLine,
    link: "tel:+923086754944",
  },
  {
    name: "Email",
    icon: RiMailLine,
    link: "umair.dev55@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: RiLinkedinLine,
    link: "https://www.linkedin.com/in/umair-dev55",
  },
  {
    name: "GitHub",
    icon: RiGithubLine,
    link: "https://github.com/Umair-dev55",
  },
];

const Socials = ({ containerStyles = "", iconStyles = "" }) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((icon, index) => {
        const Icon = icon.icon;
        return (
          <Link
            key={index}
            href={icon.link}
            target="_blank"
            className={`${iconStyles}`}
          >
            <Icon size={25} />
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
