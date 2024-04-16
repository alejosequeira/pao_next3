"use client"
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Whatsapp } from 'react-bootstrap-icons';

const FloatingWhatsAppButton = () => {
  const phoneNumber = '3454090694'; // Replace with your recipient's phone number
  const [showForm, setShowForm] = useState(false);
  const [customMessage, setCustomMessage] = useState('Hola! Queria consultar por...');

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(customMessage);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappLink, '_blank');
    setShowForm(false);
  };

  return (
    <>
      <a
        className="floating-whatsapp-button"
        onClick={handleButtonClick}
      >
        <Whatsapp size={30} color="white" />
      </a>

      {showForm && (
        <div className="whatsapp-form">
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="messageInput" className="form-label">Mensaje</label>
              <textarea
                className="form-control"
                id="messageInput"
                rows="3"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="button-container">
              <Button variant="primary" type="submit" >
                Enviar Mensaje
              </Button>
              <Button variant="secondary" onClick={handleCloseForm}>
                Cancelar
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default FloatingWhatsAppButton;

// import React from 'react';
// import { Whatsapp } from 'react-bootstrap-icons';

// const FloatingWhatsAppButton = () => {
//   const phoneNumber = '3454090694'; // Replace with your recipient's phone number
//   const message = encodeURIComponent('Hello, this is a pre-filled message.');

//   return (
//     <a
//       href={`https://wa.me/${phoneNumber}?text=${message}`}
//       className="floating-whatsapp-button"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <Whatsapp size={30} color="white" />
//     </a>
//   );
// };

// export default FloatingWhatsAppButton;
