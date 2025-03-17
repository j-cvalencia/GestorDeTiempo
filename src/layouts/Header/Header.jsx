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
        <button id='botonPlay'><i class="fa-solid fa-play"></i></button>
        <button id='botonColaboracion'><i class="fa-solid fa-user-plus"></i></button>
        <div id='divisor'></div>
        <button id='botonAyuda'><i class="fa-regular fa-circle-question"></i></button>
        <button id='botonConfiguracion'><i class="fa-solid fa-gear"></i></button>
      </div>
    </div>
  )
}
