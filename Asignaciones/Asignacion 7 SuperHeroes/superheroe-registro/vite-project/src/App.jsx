import React, { useState } from 'react';
import SuperheroForm from './SuperheroForm';
import SuperheroList from './SuperheroList';
import './App.css';

function App() {
  const [superheroes, setSuperheroes] = useState([]);
  const [headerText, setHeaderText] = useState('Bienvenido a la Liga de Superhéroes');

  const addSuperhero = (superhero) => {
    setSuperheroes([...superheroes, superhero]);
    setHeaderText('Superhéroe Registrado');
  };

  return (
    <div className="App">
      <header>
        <h1>{headerText}</h1>
      </header>
      <SuperheroForm addSuperhero={addSuperhero} />
      <SuperheroList superheroes={superheroes} />
    </div>
  );
}

export default App;
