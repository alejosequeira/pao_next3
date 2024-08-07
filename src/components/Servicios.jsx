import React from 'react';

const Servicios = (props) => {
  return (
    <>
      <div id="services" className='blank_space'>
      </div>
      <div className="services text-center">
        <div className="container">
          <div className="section-title">
            <h2>Nuestros Servicios</h2>
            <p>
            Especialistas en mantenimiento, reparación y revisión de maquinaria de fuerza y generación de energía.
            </p>
          </div>
          <div className="row">
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
              : "loading"}
          </div>
        </div>
      </div>
    </>
  );
};
export default Servicios;
