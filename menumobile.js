const botaoMobile = document.querySelector('.iconeMenu');
const menuMobile = document.querySelector('.menuMobile');

botaoMobile.onclick = function(){
    botaoMobile.style.display = "none";
    menuMobile.style.display = "block";
}

menuMobile.onclick = function(){
    botaoMobile.style.display = "inline";
    menuMobile.style.display = "none";
}



