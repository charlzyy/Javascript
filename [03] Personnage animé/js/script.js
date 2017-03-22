/** on va changer l'objet la classe**/
var Onepiece = document.getElementById("Onepiece").getElementsByTagName('div')[0]
console.log(Onepiece)
//on utilise le eventlistener
function jump() {
  Onepiece.className="jump";
  setTimeout(function(){ Onepiece.className='run' } , 300);


}

Onepiece.addEventListener( "click" , jump)
//element.addEventListener("click", myFunction);
