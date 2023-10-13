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
        "w-full min-h-screen flex flex-col overflow-x-hidden",
        menuActive && "overflow-hidden"
      )}
    >
      <Header />
      <div >{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
