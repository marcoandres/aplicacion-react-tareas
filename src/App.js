/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.png'

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>

      
    </div>
  );
}

export default App;
