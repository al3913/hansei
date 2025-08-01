import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface FooterProps {
  logo?: {
    url?: string;
    src?: string;
    alt?: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  // {
  //   title: "Product",
  //   links: [
  //     { name: "Overview", href: "#" },
  //     { name: "Pricing", href: "#" },
  //     { name: "Marketplace", href: "#" },
  //     { name: "Features", href: "#" },
  //   ],
  // },
  // {
  //   title: "Company",
  //   links: [
  //     { name: "About", href: "#" },
  //     { name: "Team", href: "#" },
  //     { name: "Blog", href: "#" },
  //     { name: "Careers", href: "#" },
  //   ],
  // },
  // {
  //   title: "Resources",
  //   links: [
  //     { name: "Help", href: "#" },
  //     { name: "Sales", href: "#" },
  //     { name: "Advertise", href: "#" },
  //     { name: "Privacy", href: "#" },
  //   ],
  // },
];

const defaultSocialLinks = [
  { icon: <FaXTwitter className="size-5 md:size-8" />, href: "https://x.com/XenosKing", label: "X" },
  { icon: <FaYoutube className="size-5 md:size-8" />, href: "https://youtube.com/@peterlamxk?si=f7odlZ0Z5uIJ_x_Q", label: "Instagram" },
  { icon: <FaInstagram className="size-5 md:size-8" />, href: "https://www.instagram.com/xenosking/", label: "Instagram" },
  { icon: <FaLinkedin className="size-5 md:size-8" />, href: "https://www.linkedin.com/in/xenosking/", label: "LinkedIn" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

const Footer = ({
  logo = {
    url: "https://www.hansei.gg",
    src: "mascot/mascot.svg",
    alt: "logo",
    title: "SAY HELLO",
  },
  sections = defaultSections,
  description = "contact@hansei.gg",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 Hansei GG. All rights reserved.",
  legalLinks = defaultLegalLinks,
}: FooterProps) => {
  return (
    <section className="py-32 w-full">
      <div className="container">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <h2 className="text-3xl font-semibold">{logo.title}</h2>
            </div>
            <p className="text-muted-foreground max-w-[70%] text-lg">
              {description}
            </p>
            <ul className="text-muted-foreground flex items-center space-x-6">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="hover:text-primary font-medium">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="text-muted-foreground space-y-3 text-sm">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-medium"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="text-muted-foreground mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1 text-base">{copyright}</p>
          {/* <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </section>
  );
};

export { Footer };

