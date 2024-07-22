"use client";
import React, { useState, useEffect } from 'react';
import Cummmins from '@/components/Cummins'
import NavBarCummins from '@/components/NavBarCummins'
import JsonData from "../../../api/data.json";
import FloatingWhatsAppButton from '@/components/FloatingWhatsApp';
import Cabecera from '@/components/Cabecera';
import Marcas from '@/components/Marcas';

export default function Cummins() {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);

  }, []);
  return (
    <div>
        <NavBarCummins />
        <Cabecera data={landingPageData.Header}/>
        <Cummmins data={landingPageData.Gallery}/>
        <FloatingWhatsAppButton/>
    </div>
  )
}
