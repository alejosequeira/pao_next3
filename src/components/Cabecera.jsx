import React from 'react';

const Cabecera = (props) => {
  return (
    <header className="intro" id="header">
      <p>{props.data ? "" : "Loading"}</p>
      {props.data && (
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
          data-interval="3000" 
        >
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="item active">
              <img className="d-block w-100" src={props.data[0].image} alt="First slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Motores CUMMINS</h5>
              </div>
            </div>
            <div className="item">
              <img className="d-block w-100" src={props.data[1].image} alt="Second slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Bombas KSB</h5>
              </div>
            </div>
            <div className="item">
              <img className="d-block w-100" src={props.data[2].image} alt="Third slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Producción agricola</h5>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      )}
    </header>
  );
};
export default Cabecera;


{/* <img className="intro" src={props.data.image} alt="Image" /> */ }