import React from 'react';
import './assets/pageTeam.sass';
import Teams from "./components/pages/Teams";
import Equipo from "./components/pages/Equipo";
import Pagina1 from './components/pages/Pagina1';

function App() {
  return (
    <div className="App">
      <Pagina1 />
      <div class='contenido'>
        <Equipo description="146 títulos (137 nacionales + 9 internacionales)" nombre="1) NACIONAL (Uruguay)" id="nacional" imgUrl="https://www.nacional.uy/images/logo-pie.png" />
        <Equipo description="127 títulos (119 nacionales + 8 internacionales)" nombre="2) PEÑAROL (Uruguay)" id="penarol" imgUrl="https://upload.wikimedia.org/wikipedia/commons/2/26/Escudo-club-atletico-penarol.png" />
        <Equipo description="116 títulos (96 nacionlales + 20 internacionales)" nombre="3) AL AHLY (Egipto)" id="alahly" imgUrl="https://upload.wikimedia.org/wikipedia/en/7/73/%D9%90%D9%90ASC.ALAHLYSC.png" />
        <Equipo description="115 títulos (114 nacionales + 1 internacional)" nombre="4) RANGERS (Escocia)" id="rangers" imgUrl="https://1.bp.blogspot.com/-CZogrrxnU7o/XwZkf99vKYI/AAAAAAABezY/nBdEEWuhmucaKEV6cdTGkCtZDoU8Tz3VwCK4BGAsYHg/s512/Rangers%2BFC.png" />
      </div>
      <h4>Pero estos son los mejores equipos segun la FIFA 2020</h4>
      <ul id="lista-equipos">
        <Teams />
      </ul>
    </div >
  );
}

export default App;
