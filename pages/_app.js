import React, { useEffect } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import LightNode from "../components/LightNode";
import * as gtag from "../lib/gtag";
import { useRouter } from "next/router";
import Script from "next/script";
import MusicPlayer from "../components/MusicPlayer";
if (typeof window !== "undefined") {
  // only runs in the browser
  require("leaflet/dist/leaflet.css");
  require("leaflet-defaulticon-compatibility");
  require("leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css");
}
// import { Analytics } from '@vercel/analytics/react';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // useEffect(() => {
  //         const handleRouteChange = (url) => {
  //           gtag.pageview(url);
  //         };
  //
  //         router.events.on("routeChangeComplete", handleRouteChange);
  //
  //         return () => {
  //           router.events.off("routeChangeComplete", handleRouteChange);
  //         };
  //       }, [router.events]);

  return (
    <>
      {/* <Script strategy="afterInteractive" async src="https://www.googletagmanager.com/gtag/js?id=G-Z38YLEJL57"></Script>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
    __html: `
    window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-Z38YLEJL57');
        `
  }} */}

      {/* /> */}
      <Layout className="w-full h-full">
        <LightNode position="top-left" />
        <LightNode position="bottom-right" />
        <Component {...pageProps} />
        <MusicPlayer />
      </Layout>

      {/* <Analytics /> */}
    </>
  );
}
