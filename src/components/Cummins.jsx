import Image from "./Imagen";
import React from 'react';

const Cumminss = (props) => {
    return (
        <div className="cummins-section1">
            <h2>CUMMINS MOTORS</h2>
            <p className="description1">
                Cummins Motors offers a range of powerful and efficient engines for various applications.
            </p>
            <div className="motor-grid1">
                {props.data ? props.data.map((d, i) => (
                    <div key={`${d.title}-${i}`} className="motor-item1">
                        <img src={d.largeImage} alt={d.title} />
                        <h3 className="motor-title1">{d.title}</h3>
                        <p className="motor-description1">{d.description}</p>
                    </div>
                )) : "Loading..."}
            </div>
        </div>
    );
};
export default Cumminss;