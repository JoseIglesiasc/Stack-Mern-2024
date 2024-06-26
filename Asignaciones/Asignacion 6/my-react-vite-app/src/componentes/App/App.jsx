
import './App.css'
import TarjetaProducto from '../Tarjeta/TarjetaProducto'

function App() {
  return (
    <div className="App">
      <TarjetaProducto
        nombre="Laptop"
        precio={1500}
        descripcion="Laptop de 15 pulgadas"
        enStock={true}
      />
      <TarjetaProducto
        nombre="Smartphone"
        precio={800}
        descripcion="Smartphone de gama media"
        enStock={false}
      />
      <TarjetaProducto
        nombre="Audífonos"
        precio={200}
        descripcion="Audífonos con cancelación de ruido"
        enStock={true}
      />
      <TarjetaProducto
        nombre="Monitor"
        precio={300}
        descripcion="Monitor de 24 pulgadas"
        enStock={true}
      />
    </div>
  )
}

export default App