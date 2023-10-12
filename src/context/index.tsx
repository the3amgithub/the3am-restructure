"use client";
import { useState } from "react";
import { createContext } from "react";

export const CMSModal = createContext<any>(null);

export const CMSContext = ({ children }: { children: React.ReactNode }) => {
  const [menuActive, setMenuActive] = useState<boolean>(false);

  return (
    <CMSModal.Provider value={{ menuActive, setMenuActive }}>
      {children}
    </CMSModal.Provider>
  );
};
