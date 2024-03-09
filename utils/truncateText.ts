import React from "react";

export const truncateText = (str: string) => {
  if (str.length < 25) return str;

  return str.slice(0, 25) + "...";
};

export default truncateText;
