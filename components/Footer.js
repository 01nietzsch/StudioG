import React from "react";
import Image from "next/image";
import Link from "next/link";
import NavArrow from "./NavArrow";

export default function Footer() {
  function docsRedirect() {
    window.location.href = "/assets/pdf/Final Design Report.pdf";
  }

  return (
    <footer className="w-full py-5  text-white bottom-0 ">
      <div className="w-full border-t-2 border-[#3C4555]  py-5 md:py-10 text-md">
        <div className=" w-2/3 mx-auto my-20 flex flex-wrap flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-between h-36">
            <div className="">
              <Image
                src="/assets/imgs/ChatGPT Image 13 juin 2025, 17_27_21.png"
                alt="Otto Logo"
                width={107}
                height={1}
                priority
                className="sm:mx-0 mx-auto"
              />
            </div>
            <div className="">
              Copyright © 2025 StudioG, All Rights Reserved
            </div>
          </div>

          <div className="w-full md:w-1/2 h-36 md:mt-0 text-center md:text-right flex flex-col  justify-between">
            <div className="flex flex-col sm:flex-row w-full justify-between float-right">
              <Link href="/" className="mx-4 my-2 md:my-0 text-white">
                Home
              </Link>
              <Link href="/team" className="mx-4 my-2 md:my-0 text-white">
                Team
              </Link>
              <a
                onClick={docsRedirect}
                href="#"
                className="mx-4 my-2 md:my-0 text-white cursor-pointer"
              >
                Documentation <NavArrow />
              </a>
              <a
                href="mailto:vj923@ic.ac.uk"
                className="mx-4 my-2 md:my-0 text-white cursor-pointer"
              >
                Get In Touch <NavArrow />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row justify-between float-right align-bottom">
              <Link href="/TA" className="mx-4 my-2 md:my-0 text-white">
                Terms & Agreements
              </Link>
              {/* <Link
                href="/PrivacyPolicy"
                className="mx-4 my-2 md:my-0 text-white"
              >
                Privacy Policy
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
