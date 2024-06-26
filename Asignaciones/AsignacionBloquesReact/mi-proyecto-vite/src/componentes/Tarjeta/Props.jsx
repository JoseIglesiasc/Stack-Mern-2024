import React from 'react';

const TarjetaProducto = ({ nombreProducto, precio, descripcion, enStock }) => {
    return (
        <div>
            <h2>{nombreProducto}</h2>
            <p>{precio}</p>
            <p>{descripcion}</p>
            <p>{enStock ? 'Disponible' : 'Agotado'}</p>
        </div>
    );
};
export default TarjetaProducto;



    