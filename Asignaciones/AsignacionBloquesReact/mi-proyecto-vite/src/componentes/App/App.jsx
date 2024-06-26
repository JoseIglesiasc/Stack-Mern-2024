import './App.css'
import '../Tarjeta/Props'


import React from 'react';

function Component1() {
  return (
    <div className='NavBar'>
      {/* Your component 1 content */}
    </div>
  );
}

function Component2() {
  return (
    <div className='Main'>
      {/* Your component 2 content */}
      <div className="Cuadrado">

      </div>
      <div className="Cuadrado">

      </div>
      <div className="Cuadrado">

      </div>

      <div className='Third'></div>
    </div>
  );
}

function Component3() {
  return (
    <div className='Side'>
      {/* Your component 3 content */}
    </div>  
  );
}

function App() {
  return (
    <div className="App">
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  );
}


export default App;

