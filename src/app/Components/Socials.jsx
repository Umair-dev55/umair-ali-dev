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
    ariaLabel: "Call Umair",
  },
  {
    name: "Email",
    icon: RiMailLine,
    link: "mailto:umair.dev55@gmail.com?subject=Hello&body=Hi%20Umair,",
    ariaLabel: "Send Email",
  },
  {
    name: "LinkedIn",
    icon: RiLinkedinLine,
    link: "https://www.linkedin.com/in/umair-dev55",
    ariaLabel: "Visit LinkedIn Profile",
  },
  {
    name: "GitHub",
    icon: RiGithubLine,
    link: "https://github.com/Umair-dev55",
    ariaLabel: "Visit GitHub Profile",
  },
];

const Socials = ({
  containerStyles = "flex gap-4",
  iconStyles = "text-2xl hover:text-primary transition-all duration-300 hover:scale-110",
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        const Icon = item.icon;

        return (
          <Link
            key={index}
            href={item.link}
            target={item.link.startsWith("http") ? "_blank" : undefined}
            rel={
              item.link.startsWith("http") ? "noopener noreferrer" : undefined
            }
            aria-label={item.ariaLabel}
            className={iconStyles}
            title={item.name}
          >
            <Icon size={28} />
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
