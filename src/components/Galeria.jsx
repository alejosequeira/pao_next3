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
            <h2>NUESTROS PRODUCTOS </h2>
            <p>
            Contamos con bombas KSB de alta eficiencia para aplicaciones agricolas e industriales, como tambien motores Cummins.
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
