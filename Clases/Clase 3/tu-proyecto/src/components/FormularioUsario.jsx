import React, { useState, useRef, useEffect } from 'react';

const FormularioUsuario = () => {
  const [nombre, setNombre] = useState('');
  const nombreInputRef = useRef(null);

  useEffect(() => {
    nombreInputRef.current.focus();
  }, []);

  const manejarCambio = (evento) => {
    setNombre(evento.target.value);
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    setNombre('');
  };

  return (
    <form onSubmit={manejarEnvio}>
      <label>
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={manejarCambio}
          ref={nombreInputRef}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioUsuario;
