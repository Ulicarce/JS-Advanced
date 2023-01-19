let movieArray = ['Posle dozdot', 'Sam doma', 'Brzi i besni', 'Memoarite na edna gejsha'];
let inputMovie = document.getElementById('inputMovie')
let buttonInput = document.getElementById('btn')
let displayInput = document.getElementById('displayInput')

function compareStrings(inputString, arrayString){
  if (inputString.toLowerCase() === arrayString.toLowerCase()){
      return true;
  } else{
    return false;
  }}

  inputButton.addEventListener('click', function() {
  let list = 0;
  displayInput.innerHTML = ''

  for(let movie of movieArray){
    if(compareStrings(inputMovie.value,movie)){
      list = 1;
    }
  }
  if(list === 1){
    let newHeader = document.createElement('h1')
    newHeader.innerText = 'The movie can be rented'
    newHeader.style.color = "green"
    displayInput.appendChild(newHeader)
  }
  else if (list === 0){
    let newHeader = document.createElement('h1')
    newHeader.innerText = "The movie can't be rented"
    newHeader.style.color = "red"
    displayInput.appendChild(newHeader)
  }
  inputMovie.value = ''
})
