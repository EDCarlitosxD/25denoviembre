document.addEventListener('DOMContentLoaded', function(){

    eventListeners();
});
function eventListeners(){
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', navegacionResponsive)
}
const navegacion = document.querySelector('.nav');
const cerrarMenu = document.querySelectorAll('.btn-menu')


function navegacionResponsive(){
    navegacion.classList.toggle('mostrar');
}

function cerrar(){
    navegacion.classList.remove('mostrar');
}

for(i =0; i < cerrarMenu.length; i++){
    
    cerrarMenu[i].addEventListener('click',cerrar)
} 



