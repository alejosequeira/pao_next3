import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Nuestras Marcas</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                <div className="d-flex flex-column align-items-center">
                  <div
                    className="image-container d-flex justify-content-center align-items-center mb-3"
                    style={{
                      height: '10rem',
                      width: '25rem'
                    }}

                  >
                    <img
                      className="img-fluid rounded-circle"
                      src={d.image}
                      alt="Image"
                      style={{
                        width: '50%',
                        height: '50%',
                        objectFit: 'fill',
                        objectPosition: 'center',
                        border: '2px solid #333', // Dark gray border with a width of 2px
                        borderRadius: '8px', // Rounded corners with a radius of 8px
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Adding a subtle shadow effect
                        padding: "2px",

                      }}
                    />
                  </div>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  );
};
