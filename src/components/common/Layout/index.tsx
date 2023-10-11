import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProp {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProp) => {
  return (
    <div className="w-full h-screen flex flex-col justify-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
