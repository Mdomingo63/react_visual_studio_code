import React, { useState } from 'react';

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [salario, setSalario] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Empleado: ${nombre}, Salario: ${salario}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre: </label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div>
        <label>Salario: </label>
        <input
          type="number"
          value={salario}
          onChange={(e) => setSalario(e.target.value)}
        />
      </div>
      <button type="submit">Guardar</button>
    </form>
  );
}

export default Formulario;
