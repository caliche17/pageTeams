import React from 'react';
import './pageTeam.sass';
import Teams from "./components/Teams";

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

          <div class='equipo' id='nacional'>
            <div class='boton'>
              <h4><strong>1) NACIONAL (Uruguay)</strong></h4>
            </div>
            <div class='imagen'>
              <img src={"https://www.nacional.uy/images/logo-pie.png"} alt="nacional" />
            </div>
            <div class='parrafos'>
              <p>146 títulos (137 nacionales + 9 internacionales)</p>
              <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu mollis mauris, sed feugiat enim.
            Duis quis lorem risus </p>
            </div>
          </div>

          <div class='equipo' id='penarol'>
            <div class='boton'>
              <h4><strong>2) PEÑAROL (Uruguay)</strong></h4>
            </div>
            <div class='imagen'>
              <img src={'https://upload.wikimedia.org/wikipedia/commons/2/26/Escudo-club-atletico-penarol.png'} alt="penarol" />
            </div>
            <div class='parrafos'>
              <p>127 títulos (119 nacionales + 8 internacionales)</p>
              <p>Aenean orci lorem, iaculis sed euismod nec, elementum non urna. Praesent venenatis consectetur sodales.</p>
            </div>
          </div>

          <div class='equipo' id='alahly'>
            <div class='boton'>
              <h4><strong>3) AL AHLY (Egipto)</strong></h4>
            </div>
            <div class='imagen'>
              <img src={'https://upload.wikimedia.org/wikipedia/en/7/73/%D9%90%D9%90ASC.ALAHLYSC.png'} alt="alahly" />
            </div>
            <div class='parrafos'>
              <p>116 títulos (96 nacionlales + 20 internacionales)</p>
              <p>Vivamus porta ultrices sem sed feugiat. Mauris neque urna, viverra hendrerit nibh in, condimentum tempor
            libero.</p>
            </div>
          </div>

          <div class='equipo' id='rangers'>
            <div class='boton'>
              <h4><strong>4) RANGERS (Escocia)</strong></h4>
            </div>
            <div class='imagen'>
              <img
                src={'https://1.bp.blogspot.com/-CZogrrxnU7o/XwZkf99vKYI/AAAAAAABezY/nBdEEWuhmucaKEV6cdTGkCtZDoU8Tz3VwCK4BGAsYHg/s512/Rangers%2BFC.png'} alt="rangers" />
            </div>
            <div class='parrafos'>
              <p>115 títulos (114 nacionales + 1 internacional)</p>
              <p>Etiam ex diam, mollis eget vulputate quis, lacinia at felis.Vivamus porta ultrices sem sed feugiat. hendrerit nibh in, condimentum</p>
            </div>
          </div>
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
