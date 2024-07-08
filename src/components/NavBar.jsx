import React from 'react';

const NavBar = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header d-flex align-items-center justify-content-center">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a href="/">           
              <img
                src="img/fotosweb/paoloniEmpresaLogo.png"
                alt="React Landing Page"
                style={{
                  maxHeight: '4rem',
                  objectFit: 'contain',
                  objectPosition: 'center',
                }}
              />
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
          <li>
              <a href="/cummins" className="page-scroll">
                Cummins
              </a>
            </li>
            <li>
              <a href="#features" className="page-scroll">
                Marcas
              </a>
            </li>
            <li>
              <a href="#carousel" className="page-scroll">
                Equipos
              </a>
            </li>

            <li>
              <a href="#about" className="page-scroll">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Servicios
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Motores
              </a>
            </li>
            {/* <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li> */} 
            {/* <li>
              <a href="#team" className="page-scroll">
                Team
              </a>
            </li> */}
            <li>
              <a href="#mapa" className="page-scroll">
                Ubicacíon
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  );
};
export default NavBar;
