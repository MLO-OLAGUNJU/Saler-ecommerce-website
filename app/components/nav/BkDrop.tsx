"use client";

import React from "react";
interface BackkDropProps {
  onClick: () => void;
}
const BkDrop: React.FC<BackkDropProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="z-10 bg-slate-200 opacity-50 w-screen h-screen fixed top-0 left-0"
    ></div>
  );
};

export default BkDrop;
