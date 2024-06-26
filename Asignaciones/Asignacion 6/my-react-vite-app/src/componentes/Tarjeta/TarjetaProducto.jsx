import React from 'react';
import './TarjetaProducto.css';

const TarjetaProducto = ({ nombre, precio, descripcion, enStock }) => {
  return (
    <div className="tarjeta-producto">
      <h2>{nombre}</h2>
      <p className="precio">${precio}</p>
      <p className="descripcion">{descripcion}</p>
      <p className={enStock ? 'en-stock' : 'agotado'}>
        {enStock ? 'En Stock' : 'Agotado'}
      </p>
    </div>
  );
};

export default TarjetaProducto;
