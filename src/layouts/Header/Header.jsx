import './Header.css';

export const Header = () => {
  return (
    <div id="header">
      <div id='nombreApp'>
        <h2>GestorTime</h2>
      </div>

      <div id='tituloPosicion'>
        <h3>Tablero</h3>
      </div>

      <div id='pestañas'>
        <ul>
          <li>Administracion</li>
          <li>Peticiones de cambio</li>
          <li>Tiempo en la aplicacion</li>
        </ul>
      </div>

      <div id='opciones'>
        <h2>Opciones</h2>
      </div>
    </div>
  )
}
