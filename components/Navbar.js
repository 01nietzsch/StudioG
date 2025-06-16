import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavArrow from "./NavArrow";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  function docsRedirect() {
    window.location.href = "/assets/pdf/Final Design Report.pdf";
  }

  function appRedirect() {
    window.location.href = "/assets/imgs/20240613-135010-1-1_kGaEK3U6.mp4";
  }

  return (
    <header className="fixed top-0 w-full px-10 pb-5 font-thin text-white bg-red pt-7 bg-opacity-70 backdrop-blur-sm navBar">
      {/* Burger menu
      <button
        className="inline-block sm:hidden fill-white"
        onClick={() => setShowLinks(!showLinks)}
      >
        <svg viewBox="0 0 200 180" width="35" height="35">
          <rect width="200" height="12" rx="8"></rect>
          <rect y="30" width="125" height="12" rx="8"></rect>
          <rect y="60" width="125" height="12" rx="8"></rect>
        </svg>
      </button>
      <button
        className={`md:hidden absolute top-36 right-5 ${
          showLinks ? "block" : "hidden"
        }`}
        onClick={() => setShowLinks(false)}
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
          <path
            fillRule="evenodd"
            d="M13.414 12l5.293-5.293a1 1 0 0 0-1.414-1.414L12 10.586 6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 1 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button> */}

      <div className="inline-block align-middle">
        <Link href={"/"}>
          <Image
            src="/assets/imgs/ChatGPT Image 13 juin 2025, 17_27_21.png"
            alt="Otto Logo"
            width={107}
            height={1}
            priority
            className="inline-block align-middle"
          />
        </Link>
      </div>

      <nav className="hidden text-center md:inline-block topnav-centered">
        <Link href="/" className="mr-10">
          Home
        </Link>
        <Link href="/team" className="mr-10">
          Team
        </Link>
        <Link onClick={docsRedirect} href="" className="mr-10">
          Documentation <NavArrow />
        </Link>
      </nav>

      {/* <div className="inline-block float-right align-middle mt-10">
        <button
          onClick={docsRedirect}
          className="inline-flex items-center justify-center w-auto h-auto py-3 text-black rounded-full px-7 bg-primary-gradient"
        >
          More on the slow cooker
        </button>
      </div> */}

      {/* Mobile links */}
      <nav
        className={`md:hidden ${
          showLinks ? "block" : "hidden"
        } absolute top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-sm text-center py-4`}
      >
        <Link href="/" className="block my-2">
          Home
        </Link>
        <Link href="/team" className="block my-2">
          Team
        </Link>
        <Link onClick={docsRedirect} href="" className="block my-2">
          Documentation <NavArrow />
        </Link>
      </nav>

      <div className="bottom-0"></div>
    </header>
  );
}
