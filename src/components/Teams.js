window.onload =function (){

const listTeams = [ "liverpool", "flamengo", "barcelona", "river plate", "palmeiras",]
const contenedor = document.querySelector('#lista-equipos')

if (contenedor) {
    listTeams.forEach(function (text) {
      const item = document.createElement('li')
      item.className = 'equipos'
      const valor = listTeams.indexOf(text) + 1
      item.id = valor
      contenedor.appendChild(item)
      const a = document.createElement('a')
      a.setAttribute('href', './pagina2.html?equipoId=' + valor)
      a.textContent = text
      item.appendChild(a)
    })
  }
};

export default window.onload