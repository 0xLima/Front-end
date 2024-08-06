"use client";

import Image from "next/image";
import footerImage from "./footer.png";
import { Logo } from "../logo";
import { scrollToTop } from "../../../helpers";
import Link from "next/dist/client/link";

export const Footer = () => {
  return (
    <footer className="h-[228px] w-full flex justify-center bg-white relative ">
      <div className="max-w-[1240px] px-5 py-8 w-full flex flex-col justify-between">
        <Logo />
        <nav className="flex flex-col opacity-40">
          <a onClick={scrollToTop} href="/#supply">
            Supply
          </a>
          <a onClick={scrollToTop} href="/#borrow">
            Borrow
          </a>
          <Link onClick={scrollToTop} href="/#">
            NFTs
          </Link>
        </nav>
      </div>
      <Image
        src={footerImage}
        alt="footer"
        className="w-[630px] object-contain absolute bottom-0 right-[-50px] sm:right-[90px]"
      />
    </footer>
  );
};
