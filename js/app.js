const iconoMenu = document.querySelector('#icono-menu'),
           menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    const rutaActual = e.target.getAttribute('src');
    
    if(rutaActual == 'img/list.svg'){
        e.target.setAttribute('src', 'img/list2.svg');
    }
    else{
        e.target.setAttribute('src', 'img/list.svg'); 
    }
});           