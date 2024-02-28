import React from "react";
import Container from "../Container";
import FooterList from "./FooterList";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#232F3E] text-white text-sm mt-16 flex pb-10 justify-center items-center md:block overflow-x-hidden select-none">
      <Container>
        <div className="grid grid-cols-3 gap-5 md:flex md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-2">ALL CATEGORIES</h3>
            <Link href="#">Phones</Link>
            <Link href="#">Laptops</Link>
            <Link href="#">Desktops</Link>
            <Link href="#">Watches</Link>
            <Link href="#">Tvs</Link>
            <Link href="#">Accessories</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">ABOUT SALER</h3>
            <Link href="#">Contact us</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Terms & Conditions</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">PAYMENT</h3>
            <Link href="#">Mastercard</Link>
            <Link href="#">Visa</Link>
            <Link href="#">Verve</Link>
            <Link href="#">Bank Transfer</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">BUYING ON SALER</h3>
            <Link href="#">Buyer Safety Centre</Link>
            <Link href="#">FAQs</Link>
            <Link href="#">Delivery</Link>
            <Link href="#">Saler Return Policy</Link>
            <Link href="#">Digital Services</Link>
            <Link href="#">Bulk Purchase</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">MORE INFO</h3>
            <Link href="#">Site Map</Link>
            <Link href="#">Track My Order</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Authentic Items Policy</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">MAKE MONEY ON SALER</h3>
            <Link href="#">Become a Saler Affiliate</Link>
            <Link href="#">Sell on Saler</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">CONNECT WITH US</h3>
            <div className="flex items-center justify-center gap-2">
              <Link href="#">
                <FaFacebook size={25} />
              </Link>
              <Link href="#">
                <FaXTwitter size={25} />
              </Link>
              <Link href="#">
                <FaInstagram size={25} />
              </Link>
              <Link href="#">
                <FaYoutube size={30} />
              </Link>
            </div>
          </FooterList>
        </div>
        <div className="mx-auto flex items-center justify-center">
          <Link href="https://www.linkedin.com/in/mlo-olagunju/">
            &copy; Saler by MlO {new Date().getFullYear()}. All rights reserved
          </Link>
        </div>
      </Container>
    </footer>
  );
};
//

export default Footer;
