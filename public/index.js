var init = function(){
  console.log('app started');

// var button = document.getElementById( 'add-button' );

var form = document.getElementById('film-form');

var addFilm = document.getElementById( 'film-text-input' );

var films = document.getElementById('film-list');
  


var handleClick = function(){
  var listOfFilms = document.createElement('li');
  listOfFilms.innerText = addFilm.value;
  films.appendChild(listOfFilms);
  listOfFilms.style.color = "blue";
}


// button.onclick = handleClick;  //button .onclick is the event listener, this and the above has to be inside the init! 
//the onsubmit if the event listner and the function is event handler
form.onsubmit = function( event ){
  event.preventDefault();
  //this stops the onsubmit natural default which is to refresh the page and delete the entry.thus we dont need the var button. you can also console.log here and get the information of this object. 
  handleClick();
}



};



window.onload = init; //this doesnt need parathsis as it is a  callback. 