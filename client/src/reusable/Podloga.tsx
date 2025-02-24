import React from "react";
import { twMerge } from "tailwind-merge";

interface PodlogaProps {
  classname?: string;
  children: React.ReactNode;
}

const Podloga: React.FC<PodlogaProps> = ({ classname, children }) => {
  return (
    <div
      // izmedu 83% od w-10/12 i 91% od w-11/12
      style={{ width: "87%" }}
      className={twMerge("mt-4 max-w-96 px-4 py-6 bg-gray-100 mx-auto rounded-lg", classname)}
    >
      {children}
    </div>
  );
};

export default Podloga;
