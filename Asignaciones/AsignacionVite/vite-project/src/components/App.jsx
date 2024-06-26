import { useState } from 'react'

import reactLogo from './assets/react.svg'

import viteLogo from '/vite.svg'

import './App.css'

import Saludo from './Saludo';

function App() {

  const [count, setCount] = useState(0)

  return (

    <div className="App">

      <header className="App-header">

        <h1>¡Hola, <Saludo Mensaje="este es mi primer react"/>!</h1>
        <h2>Lista de cosas por hacer</h2>
        <li>
          <input type="checkbox" />
          <label>Aprender react</label>

        </li>

        <button onClick={() => setCount((count) => count + 1)}>

          Contador: {count}

        </button>

      </header>

    </div>

  )

}

export default App