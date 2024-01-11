import Image from "next/image";
import { Container } from "../Container";
import {
  TbBrandInstagram,
  TbBrandFacebook,
  TbBrandWhatsapp,
  TbBrandYoutube,
} from "react-icons/tb";
import Link from "next/link";

const socialIcons = [
  {
    link: <TbBrandFacebook />,
  },
  {
    link: <TbBrandInstagram />,
  },
  {
    link: <TbBrandWhatsapp />,
  },
  {
    link: <TbBrandYoutube />,
  },
];
export const Footer = () => {
  return (
    <footer className="bg-black mt-8 absolute bottom-0 w-full">
      <Container>
        <div className="flex gap-6 items-center justify-between">
          <Link
            href="/"
            aria-label="navigate to Home page"
            className="relative w-[80px] md:w-[120px] lg:w-[120px] h-[100px]"
          >
            <Image
              src="/img/logo_white.png"
              layout="fill"
              objectFit="contain"
              alt="logo"
            />
          </Link>
          <span className="text-center text-[10px] md:text-sm">
            All rights reserved © 2023
          </span>
          <p className="flex gap-2 lg:gap-4">
            {socialIcons.map((item, i) => (
              <Link
                href="/a"
                className="text-xl cursor-pointer hover:text-red-500"
                key={i}
                aria-label="navigate to social platform"
              >
                {item.link}
              </Link>
            ))}
          </p>
        </div>
      </Container>
    </footer>
  );
};
