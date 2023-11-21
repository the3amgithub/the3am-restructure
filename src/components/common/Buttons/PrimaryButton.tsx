import Link from "next/link";

interface PrimaryButtonProp {
  link: string;
  label: string;
}
export const PrimaryButton = ({ link, label }: PrimaryButtonProp) => {
  const gradientStyles = {
    backgroundImage: "linear-gradient(-45deg, #c1089e 20%, #ff4e00 100%)",
  };
  return (
    <Link
      href={link}
      className="text-md md:text-lg px-3 md:px-6 py-2 rounded-full text-center font-bold w-full"
      style={gradientStyles}
      aria-label="navigate to next location"
    >
      {label}
    </Link>
  );
};
