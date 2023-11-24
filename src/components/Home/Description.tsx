import { myLoader } from "@/utils/ImgLoader";
import Image from "next/image";
import { Container } from "../common/Container";
export const Description = ({ img }: { img: string }) => {
  return (
    <Container>
      <Image
        loader={() => myLoader(img)}
        src={`${process.env.NEXT_PUBLIC_API_URL_FILE}${img}`}
        width={500}
        height={500}
        alt="description"
        className="w-full "
      />
    </Container>
  );
};
