"use client";
import { useContext } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CMSModal } from "@/context";
import { twMerge } from "tailwind-merge";

interface LayoutProp {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProp) => {
  const { menuActive } = useContext(CMSModal);
  return (
    <div
      className={twMerge(
        "min-h-[100vh] flex flex-col justify-between overflow-x-hidden relative bg-[#24242f]"
      )}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};
