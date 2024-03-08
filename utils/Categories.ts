import { MdOutlineKeyboard, MdStorefront, MdTv, MdWatch } from "react-icons/md";
import { AiFillPhone, AiOutlineDesktop, AiOutlineLaptop } from "react-icons/ai";
import { IoPhonePortrait } from "react-icons/io5";

export const categories = [
  {
    label: "All",
    icon: MdStorefront,
  },
  {
    label: "Phone",
    icon: IoPhonePortrait,
  },
  {
    label: "Laptop",
    icon: AiOutlineLaptop,
  },
  {
    label: "Desktop",
    icon: AiOutlineDesktop,
  },
  {
    label: "Watch",
    icon: MdWatch,
  },
  {
    label: "TV",
    icon: MdTv,
  },
  {
    label: "Accesories",
    icon: MdOutlineKeyboard,
  },
];
