import React from "react";
import Navbar from "./Navbar";
import Head from "next/head";
// import MusicPlayer from "./MusicPlayer";
import Footer from "./Footer";
import ArrowTop from "./ArrowTop";

export default function Layout({ children }) {
  return (
    <div className="w-full h-full">
      <Head>
        <title>Chilli Powder Corp</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="right-0 float-right fixed  audio-margin  sm:mb-16 sm:mr-10 sm:bottom-auto bottom-0 mb-16 mr-4 z-10">
        {/* <div className=" cursor-pointer  bg-gray-900 text-center w-14 h-14 rounded-full mb-5" onClick={() => {
              window.location.href = "#top";
            }}>
            <ArrowTop  />
        </div> */}
        {/* <MusicPlayer /> */}
      </div>
      <main id="main-container" className="h-full w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
