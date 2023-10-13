import Image from "next/image";
import { Container } from "../Container";
export const Footer = () => {
  return (
    <footer className="bg-black">
      <Container>
        <div className="flex gap-6 items-center md:justify-between">
          <Image
            src="/img/logo_white.png"
            width={200}
            height={100}
            alt="logo"
            className="w-[80px] md:w-[120px] lg:w-[200px]"
          />
          <span className="text-center text-[10px] md:text-sm">
            All rights reserved © 2023
          </span>
          <div className="flex flex-col gap-2 text-[10px] md:text-lg">
            <a>info@the3amproject.com</a>
            <h2>+917018505259</h2>
            <h2>Chandigarh, India</h2>
          </div>
        </div>
      </Container>
    </footer>
  );
};
