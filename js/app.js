const close = document.getElementById('nav__close');
const open = document.getElementsByClassName('nav__bar__mob')[0];
const nav = document.getElementById('nav__open');
open.addEventListener('touchstart', opennav);


close.addEventListener('touchstart', closenav);

function closenav(e){
    nav.style.display = 'none';
        close.style.display = 'none';
}

function opennav(e){
    
    
        nav.style.display = 'unset';
        close.style.display = 'unset';
        
    
    

}