const menuprincipal = document.querySelectorAll('.menu-item');

menuprincipal.forEach(function(item){
    item.addEventListener('click', function(e){
        const actualItem = document.querySelector('.active');
        actualItem.classList.remove('active');
        e.target.classList.add('active');
    });


});
// aqui querio que el boton de glitch haga que cambie el color de fondo de mi pagina
// queria hacer que cambiara otras cosas pero por ahora no me quiero complicar tanto
var toggle = document.getElementById('tomate');
var main = document.querySelector('main');

toggle.onclick = function(){
    toggle.classList.toggle('active')
    main.classList.toggle('active')
}

    

