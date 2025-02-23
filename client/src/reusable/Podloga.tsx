import React from "react";
import { twMerge } from "tailwind-merge";

interface PodlogaProps {
  classname?: string;
  children: React.ReactNode;
}

const Podloga: React.FC<PodlogaProps> = ({ classname, children }) => {
  return (
    <div className={twMerge("mt-4 max-w-96 px-4 py-6 bg-gray-100 w-5/6 mx-auto rounded-lg", classname)}>{children}</div>
  );
};

export default Podloga;
