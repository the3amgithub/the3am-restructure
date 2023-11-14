import { myLoader } from "@/utils/ImgLoader";
import Image from "next/image";
interface BoilerCardProp {
  img: string;
  label: string;
}
export const BoilerCard = ({ img, label }: BoilerCardProp) => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center text-[0px] hover:before:opacity-[.4] hover:text-xl hover:lg:text-3xl cursor-pointer transition-all duration-400 before:content-'' before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-red-400 before:z-[10] before:opacity-0">
      <Image
        loader={() => myLoader(img)}
        src={`${process.env.NEXT_PUBLIC_API_URL_FILE}${img}`}
        layout="fill"
        objectFit="cover"
        alt="artists"
      />
      <h2 className="relative mt-10 text-center font-bold z-[20]">{label}</h2>
    </div>
  );
};
