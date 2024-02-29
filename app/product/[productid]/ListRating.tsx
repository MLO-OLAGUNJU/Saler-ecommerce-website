"use client";

import Heading from "@/app/components/Heading";
import React from "react";

interface ListRatingProps {
  product: any;
}

const ListRating: React.FC<ListRatingProps> = ({ product }) => {
  return (
    <div>
      <Heading title="Product Reviews" />
      <div className="text-sm mt-2">
        {product.reviews &&
          product.reviews.map(() => {
            return;
          })}
      </div>
    </div>
  );
};

export default ListRating;
