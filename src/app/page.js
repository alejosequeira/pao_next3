"use client";
import React, { useState, useEffect } from "react";
import JsonData from "../../api/data.json";
import "./page.module.css";
import { Navigation } from "@/components/Navigation";
import { Header } from "@/components/Header";
import { Features } from "@/components/Features";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import Carousel from "@/components/Carousel";


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
      <Carousel data={landingPageData.Carousel}/>
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