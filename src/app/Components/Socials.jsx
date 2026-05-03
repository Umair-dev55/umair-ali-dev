"use client";
import Link from "next/link";
import {
  RiGithubLine,
  RiLinkedinLine,
  RiMailLine,
  RiPhoneLine,
} from "@remixicon/react";

const socialsData = [
  {
    name: "GitHub",
    icon: RiGithubLine,
    link: "https://github.com/Umair-dev55",
  },
  {
    name: "LinkedIn",
    icon: RiLinkedinLine,
    link: "https://www.linkedin.com/in/umair-dev55",
  },
  {
    name: "Email",
    icon: RiMailLine,
    link: "umair.dev55@gmail.com",
  },
  {
    name: "Phone",
    icon: RiPhoneLine,
    link: "tel:+923086754944",
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-4">
      {socialsData.map((item, index) => {
        const Icon = item.icon;
        return (
          <Link
            key={index}
            href={item.link}
            target="_blank"
            className="hover:text-accent transition-all"
          >
            <Icon size={22} />
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
