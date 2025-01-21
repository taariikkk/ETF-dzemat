import React from "react";

const Podloga: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="max-w-96 px-6 py-8 bg-gray-100 w-5/6 mx-auto rounded-lg">{children}</div>;
};

export default Podloga;
