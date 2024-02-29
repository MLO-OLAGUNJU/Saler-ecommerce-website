"use client";

import formatPrice from "@/utils/formatPrice";
import { CartProductType } from "../product/[productid]/ProductDetails";

interface ItemContentProps {
  item: CartProductType;
}
const ItemContent: React.FC<ItemContentProps> = ({ item }) => {
  return (
    <div className="grid grid-cols-5 text-xs md:text-sm gap-4 py-4 items-center ">
      <div></div>
      <div>{formatPrice(item.price)}</div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ItemContent;
