import React, { useState, useEffect, useRef } from 'react';

const Cumminss = (props) => {
    const [selectedMotor, setSelectedMotor] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const modalRef = useRef(null);

    useEffect(() => {
        console.log("Props data:", props.data);
    }, [props.data]);

    const handleMotorClick = (motor) => {
        console.log("Motor clicked:", motor);
        setSelectedMotor(motor);
        setCurrentImageIndex(0);
    };

    const closeModal = () => {
        setSelectedMotor(null);
    };

    const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            closeModal();
        }
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            (prevIndex + 1) % getMotorImages(selectedMotor).length
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => 
            (prevIndex - 1 + getMotorImages(selectedMotor).length) % getMotorImages(selectedMotor).length
        );
    };

    const getMotorImages = (motor) => {
        return Object.entries(motor)
            .filter(([key, value]) => key.startsWith('largeImage') && value)
            .map(([_, value]) => value);
    };

    console.log("Current selected motor:", selectedMotor);

    return (
        <div className="cummins-section1">
            <h2>MOTORES CUMMINS</h2>
            <p className="description1">
                Cummins Motors ofrece una gama de motores potentes y eficientes para diversas aplicaciones.
            </p>
            <div className="motor-grid1">
                {props.data ? props.data.map((d, i) => (
                    <div key={`${d.title}-${i}`} className="motor-item1" onClick={() => handleMotorClick(d)}>
                        <img src={d.smallImage || d.largeImage} alt={d.title} />
                        <h3 className="motor-title1">{d.title}</h3>
                        <p className="motor-description1">{d.description}</p>
                        <div className="button-container">
                            <button className="contact-button">COTIZAR AQUI</button>
                        </div>
                    </div>
                )) : "Loading..."}
            </div>

            {selectedMotor && (
                <div className="modal-cummins" onClick={handleOutsideClick}>
                    <div className="modal-content-cummins" ref={modalRef}>
                        <span className="close-cummins" onClick={closeModal}>&times;</span>
                        <h2>{selectedMotor.title}</h2>
                        <div className="modal-inner-content">
                            <div className="image-gallery-cummins">
                                <button className="nav-button prev" onClick={prevImage}>&lt;</button>
                                <img 
                                    src={getMotorImages(selectedMotor)[currentImageIndex]} 
                                    alt={`${selectedMotor.title} - ${currentImageIndex + 1}`} 
                                />
                                <button className="nav-button next" onClick={nextImage}>&gt;</button>
                            </div>
                            <div className="motor-info">
                                <div className="info-section">
                                    <h3>Descripción</h3>
                                    <p>{selectedMotor.description}</p>
                                </div>
                                <div className="info-section">
                                    <h3>Especificaciones</h3>
                                    <p>{selectedMotor.especificaciones}</p>
                                </div>
                                <button className="contact-button">COTIZAR AHORA</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cumminss;