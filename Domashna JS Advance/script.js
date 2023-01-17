let movie = ['Posle dozdot', 'Sam doma', 'Brzi i besni', 'Grofot od Monte Kristo', 'Memoarite na edna gejsha'];
let form = document.querySelector('form');
let button = document.querySelector('#btn');
let result = document.createElement('h1');
let text = document.getElementById('movies');

btn.addEventListener('click', function(event) {
 for (let i = 0; i < movie.length; i++){
  if(text === movie.length){
   console.log(h1.innerText('The movie can be rented'))
  } else {
   console.log(h1.innerText ("The movie can't be rented") )
  }
  }console.log(event)
})
btn.addEventListener('click', () => {console.log(result) })