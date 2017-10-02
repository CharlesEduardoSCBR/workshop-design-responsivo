document.querySelector('.menu-abrir').onclick = function () {
    document.documentElement.classList.add('menu-fechar');
};

document.querySelector('.menu-fechar').onclick = function () {
    document.documentElement.classList.add('menu-abrir');
};

document.documentElement.onclick = function(event) {
    if (event.target === document.documentElement){
        document.documentElement.classList.Remove("menu-ativo");
    }
};