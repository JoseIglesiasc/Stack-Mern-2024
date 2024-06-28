import React, { useState } from 'react';

function SuperheroForm({ addSuperhero }) {
  const [form, setForm] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (form.nombre.length < 4) newErrors.nombre = 'El nombre debe tener al menos 4 caracteres.';
    if (form.apellido.length < 4) newErrors.apellido = 'El apellido debe tener al menos 4 caracteres.';
    if (form.email.length < 10) newErrors.email = 'El correo electrónico es muy corto.';
    if (form.password.length < 12) newErrors.password = 'La contraseña debe tener al menos 12 caracteres.';
    if (form.password !== form.confirmPassword) newErrors.confirmPassword = 'Las contraseñas no coinciden.';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addSuperhero(form);
      setForm({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input type="text" name="nombre" value={form.nombre} onChange={handleChange} />
        {errors.nombre && <p>{errors.nombre}</p>}
      </div>
      <div>
        <label>Apellido:</label>
        <input type="text" name="apellido" value={form.apellido} onChange={handleChange} />
        {errors.apellido && <p>{errors.apellido}</p>}
      </div>
      <div>
        <label>Correo Electrónico:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div>
        <label>Confirmar Contraseña:</label>
        <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
      </div>
      <button type="submit">Crear Superhéroe</button>
    </form>
  );
}

export default SuperheroForm;
