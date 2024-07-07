"use client";
import React, { useState, useEffect } from 'react';
import Cummmins from '@/components/Cummins'
import NavBar from '@/components/NavBar'
import JsonData from "../../../api/data.json";

export default function Cummins() {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);

  }, []);
  return (
    <div className="blank_space">
        <NavBar />
        <Cummmins data={landingPageData.Gallery}/>
    </div>
  )
}
