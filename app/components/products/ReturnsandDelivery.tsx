import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";
import { RiShieldStarFill } from "react-icons/ri";
import Horizontal from "../Horizontal";

const ReturnsandDelivery = () => {
  return (
    <div className="p-3 bg-[#FFFFFF] rounded-md flex flex-col h-fit">
      <p>Returns and Delivery</p>
      <Horizontal />
      <div className="flex flex-col gap-1">
        <p className="flex items-center gap-1">
          <TbTruckDelivery className="text-[#F89F24]" /> Delivery
        </p>
        <p className=" text-[10px]">
          Estimated delivery time 1-9 business days
        </p>
        <p>Express Delivery Available</p>
        <p className=" text-[10px]">
          Same day delivery: Order before 11AM and get it today
        </p>
        <p className=" text-[10px]">
          Next day delivery: Order after 11AM and get it tomorrow{" "}
        </p>
        <p className=" text-[10px]">
          Note: Subject to availability in your location
        </p>
      </div>
      <Horizontal />
      <div className="flex flex-col gap-1">
        <p className="flex items-center gap-1">
          <RiRefund2Fill className="text-[#F89F24]" /> Return Policy
        </p>
        <p className="font-semibold text-gray-500">7 Day Return Guarantee</p>
        <p className=" text-[10px]">
          For more information on the return shipping options, go to Konga
          Return Policy
        </p>
      </div>
      <Horizontal />
      <div className="flex flex-col gap-1">
        <p className="flex items-center gap-1">
          <RiShieldStarFill className="text-[#F89F24]" /> Warranty
        </p>
        <p className=" text-[10px]">
          Warranty information unavailable for this item.
        </p>
      </div>
    </div>
  );
};

export default ReturnsandDelivery;
