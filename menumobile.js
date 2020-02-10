const botaoMobile = document.querySelector('.iconeMenu');
const menuMobile = document.querySelector('.menuMobile');

botaoMobile.onclick = function(){
    botaoMobile.style.display = "none";
    menuMobile.style.transform = "translateY(0px)";
}

menuMobile.onclick = function(){
    botaoMobile.style.display = "inline";
    menuMobile.style.transform = "translateY(-9999px)";
}



