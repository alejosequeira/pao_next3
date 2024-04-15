"use client";
import React, { useState, useEffect } from "react";
import JsonData from "../../../api/data.json";
import "../page.module.css";
import Navigation from "../../components/Navigation";
import Header  from "../../components/Header";
import Features  from "../../components/Features";
import About from "../../components/About";
import Services  from "../../components/Services";
import Gallery  from "../../components/Gallery";
import Team  from "../../components/Team";
import Contact  from "../../components/Contact";
import Carousel from "../../components/Carousel";


export default function Inicio() {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);

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
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};