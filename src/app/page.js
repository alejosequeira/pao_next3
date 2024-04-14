"use client";
import React, { useState, useEffect } from "react";
import JsonData from "../../api/data.json";
import "./page.module.css";
import { Navigation } from "@/components/navigation";
import { Header } from "@/components/header";
import { Features } from "@/components/features";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { Team } from "@/components/Team";
import { Contact } from "@/components/contact";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  // const [smoothScroll, setSmoothScroll] = useState(null);

  useEffect(() => {
    setLandingPageData(JsonData);

    // // Initialize smooth-scrollbar
    // if (typeof window !== 'undefined') {
    //   const scroll = Scrollbar.init(document.body, {
    //     damping: 0.07,
    //     renderByPixels: true,
    //     alwaysShowTracks: true,
    //   });
    //   setSmoothScroll(scroll);
    // }

    // return () => {
    //   smoothScroll?.destroy();
    // };
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;