import React from 'react';
export default function () {

  const listTeams = ["liverpool", "flamengo", "barcelona", "river plate", "palmeiras",]

  return (
    listTeams.map((equipo, index) => <li className="equipos" id={index + 1}><a href={`./pagina2.html?equipoId=${index + 1}`}>{equipo}</a></li>)
  );
}