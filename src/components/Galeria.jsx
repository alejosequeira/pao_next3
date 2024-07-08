import Image  from "./Imagen";
import React from 'react';

const Gallery = (props) => {
  return (
    <div className="blank_space">
      <div id="portfolio" className='blank_space'>
      </div>
      <div className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>MOTORES CUMMINS </h2>
            <p>
            Cummins Motors ofrece una gama de motores potentes y eficientes para diversas aplicaciones.
            </p>
          </div>
          <div className="row">
            <div className="portfolio-items">
              {props.data
                ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4 gallery_max_size"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
                : "Loading..."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
