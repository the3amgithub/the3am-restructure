"use client";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { twMerge } from "tailwind-merge";

interface LayoutProp {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProp) => {
  return (
    <div
      className={twMerge(
        "min-h-[100vh] flex flex-col justify-between overflow-x-hidden relative bg-[#24242f]"
      )}
    >
      <Header />
      <div className="mb-[120px]">{children}</div>
      <Footer />
    </div>
  );
};
