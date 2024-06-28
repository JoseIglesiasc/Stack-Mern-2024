import React from 'react';

const TarjetaProducto = ({ nombre, precio, descripcion, stock, setStock }) => {
  const handleComprar = () => {
    if (stock > 0) {
      setStock(stock - 1);
    }
  };

  return (
    <div className="tarjeta-producto">
      <h2>{nombre}</h2>
      <p>${precio}</p>
      <p>{descripcion}</p>
      {stock > 0 ? (
        <>
          <p style={{ color: 'green' }}>En Stock: {stock}</p>
          <button 
            style={{ backgroundColor: '#00BFFF', borderRadius: '5px' }} 
            onClick={handleComprar}
          >
            Comprar
          </button>
        </>
      ) : (
        <>
          <p style={{ color: 'red' }}>Agotado</p>
          <button style={{ backgroundColor: 'grey', borderRadius: '5px' }} disabled>
            Comprar
          </button>
        </>
      )}
    </div>
  );
};

export default TarjetaProducto;
