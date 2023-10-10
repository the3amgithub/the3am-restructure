import Image from "next/image";
import { Container } from "../Container";
export const Footer = () => {
  return (
    <div className="bg-black relative bottom-0 ">
      <Container>
        <div className="flex justify-between items-center">
          <Image
            src="/img/logo_white.png"
            width={200}
            height={100}
            alt="logo"
          />
          <span className="text-sm">All rights reserved © 2023</span>
          <div className="flex flex-col gap-2">
            <a>info@the3amproject.com</a>
            <h2>+917018505259</h2>
            <h2>Chandigarh, India</h2>
          </div>
        </div>
      </Container>
    </div>
  );
};
