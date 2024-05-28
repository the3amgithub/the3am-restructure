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
    url:"https://www.facebook.com/thethreeamproject/"
  },
  {
    link: <TbBrandInstagram />,
    url:"https://www.instagram.com/the3am_project/?hl=en"
  },
  {
    link: <TbBrandWhatsapp />,
    url:"https://wa.me/7409999071"
  },
  {
    link: <TbBrandYoutube />,
    url:'https://www.youtube.com/channel/UCqBweP81lJ2X5eBCDwlIqqA'
  },
];
export const Footer = () => {
  return (
    <footer className="bg-black w-full">
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

            All rights reserved © { new Date().getFullYear()}

          </span>
          <p className="flex gap-2 lg:gap-4">
            {socialIcons.map((item, i) => (
              <Link
                href={item.url}
                target="_bank"
                className="text-xl cursor-pointer hover:text-primary"
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
