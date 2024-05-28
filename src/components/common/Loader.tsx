import React from "react";
import HashLoader from "react-spinners/HashLoader";

export const Loader = () => {
  return (
    <div className="fixed z-1 left-0 top-0 w-full h-full overflow-auto bg-custom-gradient">
      <div className="relative left-[40%] lg:left-[50%] top-[45%]">
        <HashLoader size={60} color="#ebcc60eb" />
      </div>
    </div>
  );
};
