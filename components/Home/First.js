import { motion } from "framer-motion";
import Arrow from "../Arrow";

function Firstsection() {
  const docsRedirect = () => {
    window.location.href = "/assets/pdf/Final Design Report.pdf";
  };

  return (
    <section className="w-full text-white h-screen" id="top">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-center"
        >
          <div className="relative z-0 w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl leading-normal font-bold">
              Where Engineering Meets
              <br />
              <span>Everyday Cooking</span>
            </h1>
            <p className="my-6 text-base sm:text-lg md:text-xl">
              Better materials for better meals—and a better planet.
            </p>
            <button
              onClick={() => {
                window.location.href = "#pilars-of-stability";
              }}
              className="inline-flex items-center justify-center py-3 px-7 bg-[#2e2e2e] text-[#FF8C00] drop-shadow-[0_0_6px_rgba(255,140,0,0.8)] drop-shadow-[0_0_12px_rgba(184,115,51,0.6)] rounded-full transition-shadow duration-300 hover:drop-shadow-[0_0_16px_rgba(255,140,0,0.9)]"
            >
              Cook smarter, live greener
            </button>
          </div>
          <div className="flex justify-center w-full mt-6">
            <div
              className="cursor-pointer"
              onClick={() => {
                window.location.href = "#pilars-of-stability";
              }}
            >
              <Arrow />
              <Arrow />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Firstsection;
