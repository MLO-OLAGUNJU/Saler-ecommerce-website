"use client";

import React, { Children } from "react";
interface FooterListsProps {
  children: React.ReactNode;
}

const FooterList: React.FC<FooterListsProps> = ({ children }) => {
  return (
    <div className="w-full sm:w-1/2 md:h-1/4 lg:w-1/6 mb-6 flex flex-col gap-2">
      {children}
    </div>
  );
};

export default FooterList;
