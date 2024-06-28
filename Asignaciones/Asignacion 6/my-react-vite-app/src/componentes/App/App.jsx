import React, { useState } from 'react';
import TarjetaProducto from '../Tarjeta/TarjetaProducto.jsx';
import './App.css';
import '../Tarjeta/TarjetaProducto.css'

const App = () => {
  const [stockLaptop, setStockLaptop] = useState(20);
  const [stockSmartphone, setStockSmartphone] = useState(20);
  const [stockAuriculares, setStockAuriculares] = useState(20);
  const [stockMonitor, setStockMonitor] = useState(20);

  return (
    <div className="app">
      <h1>TechStore - Tu Destino para la Mejor Tecnología</h1>
      <div className="productos">
        <TarjetaProducto 
          nombre="Laptop" 
          precio={1500} 
          descripcion="Una potente laptop para trabajar y jugar." 
          stock={stockLaptop} 
          setStock={setStockLaptop} 
        />
        <TarjetaProducto 
          nombre="Smartphone" 
          precio={800} 
          descripcion="Un smartphone de última generación con una de las mejores cámaras." 
          stock={stockSmartphone} 
          setStock={setStockSmartphone} 
        />
        <TarjetaProducto 
          nombre="Auriculares" 
          precio={200} 
          descripcion="Auriculares con cancelación de ruido. No escucharás nada a tu alrededor." 
          stock={stockAuriculares} 
          setStock={setStockAuriculares} 
        />
        <TarjetaProducto 
          nombre="Monitor" 
          precio={300} 
          descripcion="Monitor 4K para una experiencia visual increíble." 
          stock={stockMonitor} 
          setStock={setStockMonitor} 
        />
      </div>
    </div>
  );
};

export default App;
