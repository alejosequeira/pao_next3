"use client";
import React, { useState, useEffect } from "react";
import JsonData from "../../api/data.json";
import "./page.module.css";
import { Navigation } from "../../src/components/Navigation";
import { Header } from "../../src/components/Header";
import { Features } from "../../src/components/Features";
import { About } from "../../src/components/About";
import { Services } from "../../src/components/Services";
import { Gallery } from "../../src/components/Gallery";
import { Testimonials } from "../../src/components/Testimonials";
import { Team } from "../../src/components/Team";
import { Contact } from "../../src/components/Contact";
import Carousel from "../../src/components/Carousel";


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
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;