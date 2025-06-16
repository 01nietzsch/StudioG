import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="fixed bottom-6 right-6 z-10">
      <button
        onClick={scrollToTop}
        className="bg-white p-3 rounded-full text-black focus:outline-none"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ScrollTopButton;
