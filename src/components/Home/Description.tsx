import { myLoader } from "@/utils/ImgLoader";
import Image from "next/image";
import { Container } from "../common/Container";
export const Description = () => {
  return (
    <Container>
      <Image
        src="/img/about.png"
        width={500}
        height={500}
        alt="description"
        className="w-full "
      />
    </Container>
  );
};
