import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NavArrow from "./NavArrow";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  // 3. Auto-close on desktop resize
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768 && showLinks) {
        setShowLinks(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showLinks]);

  const docsRedirect = () => {
    window.location.href = "/assets/pdf/Final Design Report.pdf";
  };

  // helper for closing menu when picking a link
  const handleNavClick = (cb) => () => {
    if (typeof cb === "function") cb();
    setShowLinks(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-red bg-opacity-70 backdrop-blur-sm text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/imgs/ChatGPT Image 13 juin 2025, 17_27_21.png"
            alt="Logo"
            width={107}
            height={40}
            priority
          />
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex space-x-8 font-thin">
          <Link href="/" onClick={handleNavClick()}>
            Home
          </Link>
          <Link href="/team" onClick={handleNavClick()}>
            Team
          </Link>
          <button
            onClick={handleNavClick(docsRedirect)}
            className="flex items-center font-thin"
          >
            Documentation <NavArrow />
          </button>
          <Link href="/OttoProtocol" onClick={handleNavClick()}>
            Repair Services
          </Link>
        </nav>

        {/* Burger button (visible on mobile) */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setShowLinks((v) => !v)}
          aria-label="Toggle menu"
        >
          {showLinks ? (
            // X icon
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path
                d="M18 6L6 18M6 6l12 12"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <rect y="4" width="24" height="2" rx="1" />
              <rect y="11" width="24" height="2" rx="1" />
              <rect y="18" width="24" height="2" rx="1" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile slide-out */}
      <div
        className={`
    fixed inset-0 z-40 md:hidden
    bg-black bg-opacity-80 backdrop-blur-sm
    transform transition-transform duration-200 ease-in-out
    ${showLinks ? "translate-x-0" : "-translate-x-full"}
  `}
        onClick={() => setShowLinks(false)}
      >
        {/* Close button inside the menu */}
        {showLinks && (
          <button
            className="absolute top-4 right-4 p-2 text-white"
            onClick={() => setShowLinks(false)}
            aria-label="Close menu"
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M18 6L6 18M6 6l12 12"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}

        <nav
          className="flex h-full flex-col items-center justify-center space-y-6 text-xl"
          onClick={(e) => e.stopPropagation()}
        >
          <Link href="/" onClick={handleNavClick()}>
            Home
          </Link>
          <Link href="/team" onClick={handleNavClick()}>
            Team
          </Link>
          <button
            onClick={handleNavClick(docsRedirect)}
            className="flex items-center font-thin"
          >
            Documentation <NavArrow />
          </button>
          <Link href="/OttoProtocol" onClick={handleNavClick()}>
            Repair Services
          </Link>
        </nav>
      </div>
    </header>
  );
}
