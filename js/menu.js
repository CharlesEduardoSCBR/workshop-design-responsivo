document.querySelector('.menu-abrir').onclick = function () {
    document.documentElement.classList.add('menu-fechar');
};

document.querySelector('.menu-fechar').onclick = function () {
    document.documentElement.classList.add('menu-abrir');
};