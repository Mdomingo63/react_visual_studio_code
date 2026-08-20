import { useState } from 'react';
import Formulario from './componentes/Formulario';
import Galeria from './componentes/galeria';

function App() {
  const [mostrarGaleria, setMostrarGaleria] = useState(true);

  return (
    <div>
      <h1>Sistema de Nómina</h1>
      <Formulario />
      <p>Tu proyecto React + TypeScript está listo para empezar.</p>
      <button onClick={() => setMostrarGaleria(!mostrarGaleria)}>
        {mostrarGaleria ? 'Ocultar Galería' : 'Mostrar Galería'}
      </button>
      {mostrarGaleria && <Galeria />}
    </div>
  );
}

export default App;