import Image from "next/image";
import React from "react";

const banners = [
  {
    title: "Gadget Bazaar!",
    description: "Explore our vast collection of gadgets.",
    discount: "SAVE UPTO 30%",
    imageSrc: "/banner.png",
  },
  // {
  //   title: "Tech Wonderland",
  //   description: "Discover the latest tech wonders.",
  //   discount: "Don't miss out!",
  //   imageSrc: "/banner2.png",
  // },
  // {
  //   title: "Electronics Extravaganza",
  //   description: "Find the best deals on electronics.",
  //   discount: "Limited Time Offer",
  //   imageSrc: "/banner3.png",
  // },
  // {
  //   title: "Gizmo Galore",
  //   description: "Your one-stop shop for all things gizmos.",
  //   discount: "Shop Now!",
  //   imageSrc: "/banner4.webp",
  // },
  // {
  //   title: "Digital Delights",
  //   description: "Experience the future with our digital gadgets.",
  //   discount: "Exclusive Discounts Inside",
  //   imageSrc: "/banner5.png",
  // },
];

const HomeBanner = () => {
  return (
    <div>
      {banners.map((banner, index) => (
        <div
          key={index}
          className=" relative select-none bg-gradient-to-r from-[#548DC7] to-[#BF7BB0] mb-8"
        >
          <div className=" mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
            <div className="mb-8 md:mb-0 md:text-start text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#131921]">
                {banner.title}
              </h1>
              <p className=" text-lg md:text-xl text-[#131921] mb-2">
                {banner.description}
              </p>
              <p className="text-5xl md:text-7xl text-[#F9A024] font-extrabold text-outline">
                {banner.discount}
              </p>
            </div>
            <div className=" relative md:w-1/3  w-[60%] aspect-video">
              <Image
                src={banner.imageSrc}
                fill
                alt="Banner Image"
                className=" object-contain "
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeBanner;
