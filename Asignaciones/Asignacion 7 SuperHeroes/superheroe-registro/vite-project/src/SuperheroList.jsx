import React from 'react';

function SuperheroList({ superheroes }) {
  return (
    <div>
      <h2>Lista de Superhéroes</h2>
      <ul>
        {superheroes.map((superhero, index) => (
          <li key={index}>
            {superhero.nombre} {superhero.apellido} - {superhero.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SuperheroList;



