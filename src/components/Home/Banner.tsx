import { myLoader } from "@/utils/ImgLoader";
import Image from "next/image";
import { Container } from "../common/Container";

export const Banner = ({ img }: { img: string }) => {
  return (
    <div className="bg-black">
      <Container>
        <Image
          loader={() => myLoader(img)}
          src={`${process.env.NEXT_PUBLIC_API_URL_FILE}${img}`}
          width={500}
          height={500}
          alt="banner"
          className="w-full py-10 lg:px-10"
        />
      </Container>
    </div>
  );
};
