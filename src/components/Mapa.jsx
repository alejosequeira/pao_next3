import React from 'react';
import { Map, Marker } from 'pigeon-maps';

const Mapa = () => {
    const lat = -31.62750672020673;
    const lng = -58.50948019937925;
    const position = [lat, lng];

    return (
        <div className="blank_space" id='mapa'>
            <div className="text-center">
                <div className="container">
                    <div className="section-title">
                        <h2>NUESTRA UBICACIÓN</h2>
                        <p>
                        Ubicados estratégicamente en un punto clave de Entre Ríos, ofrecemos fácil acceso y una posición central ideal.
                        </p>
                    </div>
                    <Map height={400} defaultCenter={position} defaultZoom={14}>
                        <Marker anchor={position} payload={2} />
                    </Map>
                </div>
            </div>

        </div>
    );
};

export default Mapa;
