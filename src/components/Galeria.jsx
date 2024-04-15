import Image  from "./Imagen";
import React from 'react';

const Gallery = (props) => {
  return (
    <>
      <div id="portfolio" className='blank_space'>
      </div>
      <div className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>CUMMINS MOTORS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
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
    </>
  );
};
export default Gallery;
