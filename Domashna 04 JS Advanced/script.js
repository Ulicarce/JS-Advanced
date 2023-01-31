console.log("Hello")

// povrzuvanje so html
let table = document.querySelector('#table');
let PlanetButton = document.querySelector('#getPlanets');
let tableBody = document.querySelector('#tBody');
let buttonDiv = document.querySelector('btnDiv');
let nextBtn = document.createElement('btn');
let previousBtn = document.createElement('btn');
let nextPage;
let previousPage;
document.getElementById('table').style.display = "none"

// povrzuvanje so api pri klik na kopceto
PlanetButton.addEventListener('click', () => {
 document.getElementById('table').style.display = "block"
 getData('https://swapi.dev/api/planets/?page=1')
 showNextBtn()
}) 
nextBtn.addEventListener('click', () =>{
 getData(nextPage)
 showPreviousBtn()
})
previousBtn.addEventListener('click', () =>{
 getData(previousPage)
 showNextBtn()
})
function getData(data) {
 fetch(data)
 .then(function (response) {
  return response.json()
 })
 .then(function (data){
  createTable(data)
  nextPage = 'https://swapi.dev/api/planets/?page=2';
  previousPage = 'https://swapi.dev/api/planets/?page=1';
 })
 .catch(function (){
  return 'error'
 })
}

// funkcii za kopcheto next i previous
function showNextBtn() {
 btnDiv.innerHTML = ''
 nextBtn.innerText = 'Next 10'
 nextBtn.className = 'btnStyle'
 btnDiv.appendChild(nextBtn);
}
function showPreviousBtn() {
 btnDiv.innerHTML = ''
 previousBtn.innerText = 'Previous 10'
 previousBtn.className = 'btnStyle'
 btnDiv.appendChild(previousBtn)
} 

// Tabela za planetite
function createTable(data){
 tBody.innerHTML = ''
 data.results.forEach(element => {
  let newRow = document.createElement('tr')
  tBody.appendChild(newRow)
  let colPlanetName = document.createElement('td')
  let colClimate = document.createElement('td')
  let colGravity = document.createElement('td')
  let colPopulation = document.createElement('td')
  colPlanetName.innerText = element.name;
  colClimate.innerText = element.climate;
  colGravity.innerText = element.gravity;
  colPopulation.innerText = element.population;
  newRow.appendChild(colPlanetName);
  newRow.appendChild(colClimate);
  newRow.appendChild(colGravity);
  newRow.appendChild(colPopulation);
 });
}

