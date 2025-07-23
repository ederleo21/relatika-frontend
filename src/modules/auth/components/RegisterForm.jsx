import React, { useState } from 'react';

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
    birth_date: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    // Aquí puedes llamar al backend o hacer lo que quieras con los datos
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded space-y-4">
      <input
        name="username"
        placeholder="Nombre de usuario"
        value={formData.username}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        name="email"
        type="email"
        placeholder="Correo"
        value={formData.email}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        name="password"
        type="password"
        placeholder="Contraseña"
        value={formData.password}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        name="password2"
        type="password"
        placeholder="Confirmar contraseña"
        value={formData.password2}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <input
        name="birth_date"
        type="date"
        value={formData.birth_date}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        Registrarse
      </button>
    </form>
  );
};
