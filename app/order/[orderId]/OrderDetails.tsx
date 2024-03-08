"use client";
import Heading from "@/app/components/Heading";
import Status from "@/app/components/Status";
import formatPrice from "@/utils/formatPrice";
import { Order } from "@prisma/client";
import { useRouter } from "next/navigation";
import React from "react";
import { MdAccessTimeFilled, MdDeliveryDining, MdDone } from "react-icons/md";
interface OrderDetailsProps {
  order: Order;
}
const OrderDetails: React.FC<OrderDetailsProps> = ({ order }) => {
  const router = useRouter();
  return (
    <>
      <div className=" max-w-[1150px] m-auto flex flex-col gap-2">
        <div className=" mt-8">
          <Heading title="Order Details" />
        </div>
        <div>Order ID: {order.id}</div>
        <div>
          Total Amount:{" "}
          <span className=" font-bold ">{formatPrice(order.amount)}</span>
        </div>
        <div className="flex gap-2 items-center">
          <div>Payment status:</div>
          <div>
            {order.status === "pending" ? (
              <Status
                text="pending"
                icon={MdAccessTimeFilled}
                bg="bg-slate-200"
                color="text-slate-700"
              />
            ) : order.status === "complete" ? (
              <Status
                text="completed"
                icon={MdDone}
                bg="bg-green-200"
                color="text-green-700"
              />
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div>Delivery status:</div>
          <div>
            {order.deliveryStatus === "pending" ? (
              <Status
                text="pending"
                icon={MdAccessTimeFilled}
                bg="bg-slate-200"
                color="text-slate-700"
              />
            ) : order.deliveryStatus === "dispatched" ? (
              <Status
                text="dispatched"
                icon={MdDeliveryDining}
                bg="bg-purple-200"
                color="text-purple-700"
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
