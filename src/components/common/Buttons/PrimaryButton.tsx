import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
interface PrimaryButtonProp {
  link: string;
  label: string;
  target?: string;
  disable?: boolean;
}
export const PrimaryButton = ({
  link,
  label,
  target,
  disable,
}: PrimaryButtonProp) => {
  const gradientStyles = {
    backgroundImage: "linear-gradient(-45deg, #c1089e 20%, #ff4e00 100%)",
  };
  return (
    <Link
      href={link}
      className={twMerge(
        "text-md md:text-lg px-3 md:px-6 py-2 rounded-full text-center font-bold w-full hover:from-indigo-500 hover:to-purple-500", 
        disable ?"pointer-events-none	bg-gray-500":"bg-gradient-to-l from-yellow-500 to-purple-500"
      )}
      aria-label={`navigate to ${label}`}
      target={target}
      aria-disabled={disable ? disable : false}
    >
      {label}
    </Link>
  );
};
