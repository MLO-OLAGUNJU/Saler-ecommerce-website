"use client";
import { Order, Product, User } from "@prisma/client";
import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import formatPrice from "@/utils/formatPrice";
import { formatNumber } from "@/utils/formatNumber";

interface SummryProps {
  orders: Order[];
  products: Product[];
  users: User[];
}

type summaryDataType = {
  [key: string]: {
    label: string;
    digit: number;
  };
};
const Summary: React.FC<SummryProps> = ({ orders, products, users }) => {
  const [summaryData, setSummaryData] = useState<summaryDataType>({
    sale: {
      label: "Total Sale",
      digit: 0,
    },
    products: {
      label: "Total Products",
      digit: 0,
    },
    orders: {
      label: "Total Orders",
      digit: 0,
    },
    paidOrders: {
      label: "Paid Orders",
      digit: 0,
    },
    unpaidOrders: {
      label: "Unpaid Orders",
      digit: 0,
    },
    users: {
      label: "Total Users",
      digit: 0,
    },
  });

  useEffect(() => {
    setSummaryData((prev) => {
      let tempData = { ...prev };

      const totalSale = orders.reduce((acc, item) => {
        if (item.status === "complete") {
          return acc + item.amount;
        } else return acc;
      }, 0);

      const paidOrders = orders.filter((order) => {
        return order.status === "complete";
      });
      const unPaidOrders = orders.filter((order) => {
        return order.status === "pending";
      });

      tempData.sale.digit = totalSale;
      tempData.orders.digit = orders.length;
      tempData.paidOrders.digit = paidOrders.length;
      tempData.unpaidOrders.digit = unPaidOrders.length;
      tempData.products.digit = products.length;
      tempData.users.digit = users.length;

      return tempData;
    });
  }, [orders, products, users]);

  const summaryKeys = Object.keys(summaryData);
  return (
    <div className=" max-w-[1150px] mx-auto  bg-white">
      <div className=" pb-4 pt-8">
        <Heading title="Your Saler seller stats" center />
      </div>
      <div className="grid grid-cols-2 gap-3 max-h-[80vh] overflow-y-auto p-8">
        {summaryKeys &&
          summaryKeys.map((key) => {
            return (
              <div
                key={key}
                className=" rounded-xl border-2 p-4 flex flex-col items-center gap-2 transition"
              >
                <div className=" text-xl md:text-4xl font-bold">
                  {summaryData[key].label === "Total Sale" ? (
                    <>{formatPrice(summaryData[key].digit / 100)}</>
                  ) : (
                    <>{formatNumber(summaryData[key].digit)}</>
                  )}
                </div>
                <div>{summaryData[key].label}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Summary;
