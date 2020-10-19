import React from 'react';
import './pageTeam.sass';
import Teams from "./components/Teams";
import Equipos from "./components/Equipos";

function App() {

  return (
    <div className="App">
      <header>
        <h1><strong>Las Curiosidades del Futbol</strong>
        </h1>
      </header>
      <section class='equipos'>
        <div>
          <h2><strong>¿Cuáles son los 4 equipos de fútbol con más títulos del mundo?</strong></h2>
        </div>
        <div class='introduccion'>
          <p class='line first'>¿Real Madrid? ¿Barcelona? ¿Boca Jr? ¿Bayern? ¿Juventus?
        No, el líder es una sorpresa. <strong>Aqui pronto lo descubriras!!</strong></p>
        </div>

        <div class='contenido'>
          
          <Equipos description="146 títulos (137 nacionales + 9 internacionales)" nombre="1) NACIONAL (Uruguay)" id ="nacional" imgUrl="https://www.nacional.uy/images/logo-pie.png"/>
          <Equipos description="127 títulos (119 nacionales + 8 internacionales)" nombre="2) PEÑAROL (Uruguay)" id= "penarol" imgUrl="https://upload.wikimedia.org/wikipedia/commons/2/26/Escudo-club-atletico-penarol.png" />
          <Equipos description="116 títulos (96 nacionlales + 20 internacionales)" nombre="3) AL AHLY (Egipto)" id="alahly" imgUrl="https://upload.wikimedia.org/wikipedia/en/7/73/%D9%90%D9%90ASC.ALAHLYSC.png" />
          <Equipos description="115 títulos (114 nacionales + 1 internacional)" nombre="4) RANGERS (Escocia)" id= "rangers" imgUrl="https://1.bp.blogspot.com/-CZogrrxnU7o/XwZkf99vKYI/AAAAAAABezY/nBdEEWuhmucaKEV6cdTGkCtZDoU8Tz3VwCK4BGAsYHg/s512/Rangers%2BFC.png" />
          
        </div>

      </section>

      <h4>Pero estos son los mejores equipos segun la FIFA 2020</h4>
      <ul id="lista-equipos"> 
      </ul>
      {Teams}
    </div>
   
  );

}

export default App;
