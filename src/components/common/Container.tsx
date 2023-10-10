import React from "react";

interface ContainerProp {
  children: React.ReactNode;
}
export const Container = ({ children }: ContainerProp) => {
  return <div className="px-6 py-2 lg:px-10 ">{children}</div>;
};
