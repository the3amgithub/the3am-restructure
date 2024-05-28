import { myLoader } from "@/utils/ImgLoader";
import { Container } from "../common/Container";
import { Image } from "@nextui-org/react";
export const Description = () => {
  return (
    <Container>
      <h2 className="text-4xl">
        About <span className="font-bold text-primary">3am</span>
      </h2>
      <Image src="/img/about.png" alt="description" className="w-full mt-4" />
    </Container>
  );
};
