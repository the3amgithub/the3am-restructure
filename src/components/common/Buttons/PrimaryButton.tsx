import Link from "next/link";
import Image from "next/image";
interface PrimaryButtonProp {
  link: string;
  label: string;
  target?: string;
}
export const PrimaryButton = ({ link, label, target }: PrimaryButtonProp) => {
  const gradientStyles = {
    backgroundImage: "linear-gradient(-45deg, #c1089e 20%, #ff4e00 100%)",
  };
  return (
    <Link
      href={link}
      className="text-md md:text-lg px-3 md:px-6 py-2 rounded-full text-center font-bold w-full"
      style={gradientStyles}
      aria-label={`navigate to ${label}`}
      target={target}
    >
      {label}
    </Link>
  );
};
