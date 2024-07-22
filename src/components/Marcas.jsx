"use client"
import React from 'react';
import { useState } from 'react';

const Marcas = (props) => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };
  return (
    <div id="features" className="blank_space">
      <div id="features" className="text-center ">
        <div className="container mb-14">
          <div className="row">
            <div className="col-md-12 text-center mb-4 section-title">
              <h2>Nuestras Marcas</h2>
            </div>
          </div>
          <div className="rowu">
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-6 mb-4">
                  <div className="brand-item text-center mb-4">
                    <div className="image-container mb-3">
                      <img
                        src={d.image}
                        alt={d.title}
                        className="img-fluid brand-image"
                        style={{
                          height: '7rem',
                          width: '20rem',
                          objectFit: 'contain',
                          marginTop: "3rem",
                        }}
                      />
                    </div>
                    <h3>{d.title}</h3>
                    <div onClick={() => toggleExpand(i)} className="dtext-container">
                      <p className={`dtext ${expanded[i] ? 'expanded' : ''}`}>{d.text}</p>
                    </div>
                    {d.text.length > 60 && (
                      <button onClick={() => toggleExpand(i)} className="btn-link">
                        {expanded[i] ? 'Ver menos' : 'Ver más'}
                      </button>
                    )}
                  </div>
                </div>
              ))
              : 'Loading...'}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Marcas;
