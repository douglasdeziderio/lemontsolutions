let bt = document.querySelector('#bt');
let menu = document.querySelector('#menu');
let mudando = 0;

function ham(){
    menu.classList.remove('hidden');
    bt.classList.remove('bi-list');
    bt.classList.add('bi-x-lg');
};

function xis(){
    menu.classList.add('hidden');
    bt.classList.remove('bi-x-lg');
    bt.classList.add('bi-list');
}

function clicando(){
    if (mudando === 0){        
        ham();
        mudando = 1;
    }else{
        xis();
        mudando = 0;
    }
}

bt.addEventListener('click', clicando);