"use client";
import React, { useState, useEffect } from 'react';
import JsonData from "../../../api/data.json";
import "../page.module.css";
import Navigation from "../../components/NavBar";
import Header  from "../../components/Cabecera";
import Features  from "../../components/Marcas";
import About from "../../components/SobreNosotros";
import Services  from "../../components/Servicios";
import Gallery  from "../../components/Galeria";
import Team  from "../../components/Team";
import Contact  from "../../components/Contacto";
import Carousel from "../../components/Carousel";


export default function Home() {
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