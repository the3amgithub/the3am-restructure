import { Container } from "../common/Container";
import { myLoader } from "@/utils/ImgLoader";
import Image from "next/image";
export const GallerySect = ({ data }: { data: any }) => {
  console.log(data, "data");

  return (
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-center">
        {data.map((item: any) => (
          <Image
            loader={() => myLoader(item?.attributes?.url)}
            src={`${process.env.NEXT_PUBLIC_API_URL_FILE}${item?.attributes?.url}`}
            width={500}
            height={500}
            alt="banner"
            className="w-[200px] h-[200px] lg:w-[400px] lg:h-[500px] hover:transition-width hover:scale-110 transition-transform"
            key={item.id}
          />
        ))}
      </div>
    </Container>
  );
};
