"use client";

import Heading from "@/app/components/Heading";
import { Rating } from "@mui/material";
import moment from "moment";
import React from "react";
import { Horizontal } from "./ProductDetails";
import Avatar from "@/app/components/Avatar";

interface ListRatingProps {
  product: any;
}

const ListRating: React.FC<ListRatingProps> = ({ product }) => {
  return (
    <div className="p-3 bg-[#FFFFFF] rounded-md flex flex-col h-fit">
      <Heading title="Product Reviews" />
      <div className="text-sm mt-2">
        {product.reviews &&
          product.reviews.map((review: any) => {
            return (
              <div key={review.id}>
                <div className="flex gap-2 items-center">
                  <Avatar src={review?.user.image} />
                  <div className=" font-semibold ">{review?.user.name}</div>
                  <div className=" font-light">
                    {moment(review.createdDate).fromNow()}
                  </div>
                </div>

                <div className="mt-2 ">
                  <Rating value={review.rating} readOnly />
                  <div className="ml-2 mt-4 mb-4">{review.comment}</div>
                  <Horizontal />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListRating;
