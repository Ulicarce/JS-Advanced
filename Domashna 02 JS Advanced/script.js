// Exercise 2
// Create a button When the button is clicked, call the StarWars api for the first person.
// Print the person name in an h1 tag. izvrsheno
// Print the person stats in a table:
// Height
// Birth year
// Eye color
// Hair color
// URL: https://swapi.dev/api/people/1


let starWars = document.getElementById('starWars')
let header = document.createElement('h1')
let table = document.createElement('table')

displayDiv.appendChild(header)
displayDiv.appendChild(table)

function createTable(data) {
  let properti = ['height', 'birth_year', 'eye_color', 'hair_color']
  for (let properties of properti) {
    let rows = document.createElement('td')
    table.appendChild(rows)

    let rowsProperti = document.createElement('tr')
    let rowsValue = document.createElement('tr')

    rowsProperti.innerText = properties;
    rowsValue.innerText = data[properties];

    rows.appendChild(rowsProperti)
    rows.appendChild(rowsValue)

  }
}


starWars.addEventListener('click', function () {
 fetch('https://swapi.dev/api/people/1')
  .then(function (response) {
   return response.json()
  })
  .then(function (data) {
    createHeader(data)
    createTable(data)
   
  })
  .catch(function (error) {
   console.log('Error:', error)
  })
})



function createHeader(data){
  header.innerText = data.name
}