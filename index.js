
let drop = document.querySelector("selectField");

selectField.addEventListener('click', myFunction() );

function myFunction(){
  preventDefault();
  this.classList.toggle('active');
}
;