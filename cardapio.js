const body = document.querySelector('body');
const divItens = document.querySelector('div.itens');
const botaoPizzas = document.querySelector('a.pizzas');
const botaoMassas = document.querySelector('a.massas');
const botaoSobremesas = document.querySelector('a.sobremesas');
const botaoBebidas = document.querySelector('a.bebidas');

let itens = []

let produto = function(nome, descricao, preco, categoria){
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao;
    this.categoria = categoria
}

//Pizzas
let pizzaMargherita = new produto('Pizza Margherita', 'Muçarela, tomate e manjericão', 'R$44,90', 'pizza');
itens.push(pizzaMargherita);
let pizzaPortuguesa = new produto('Pizza Portuguesa', 'Muçarela, calabresa, azeitona, cebola e ovos', 'R$48,90', 'pizza');
itens.push(pizzaPortuguesa);
let pizzaCalabresa = new produto('Pizza Calabresa', 'Muçarela e calabresa', 'R$38,90', 'pizza');
itens.push(pizzaCalabresa);
let pizzaQuatroQueijos = new produto('Pizza Quatro Queijos','Muçarela, requeijão cremoso, provolone e parmesão','R$44,90', 'pizza');
itens.push(pizzaQuatroQueijos);
let pizzaPalmitoBolonhesa = new produto('Pizza Palmito a Bolonhesa','Muçarela, palmito e molho a bolonhesa','R$48,90','pizza');
itens.push(pizzaPalmitoBolonhesa);
let pizzaSalaminho = new produto('Pizza Salaminho','Muçarela e salaminho', 'R$42,90','pizza');
itens.push(pizzaSalaminho);

//Massas
let lasanhaPresunto = new produto('Lasanha de Presunto', 'Lasanha de presunto a bolonhesa', 'R$37,90','massa');
itens.push(lasanhaPresunto);
let lasanhaFrango = new produto('Lasanha de Frango', 'Lasanha de frango a bolonhesa ou molho branco', 'R$37,90','massa');
itens.push(lasanhaFrango);
let espaguete = new produto('Espaguete', 'Espaguete a bolonhesa gratinado','R$32,90','massa');
itens.push(espaguete);
let nhoque = new produto('Nhoque', 'Nhoque a bolonhesa gratinado','R$45,90','massa');
itens.push(nhoque);

//Sobremesas
let pudim = new produto('Pudim', 'Pudim de Leite Condensado','R$9,50','sobremesa');
itens.push(pudim);
let mousse = new produto('Mousse', 'Mousse de chocolate ou maracujá','R$7,50','sobremesa');
itens.push(mousse);
let sorvete = new produto('Sorvete', 'Flocos,chocolate, Morango e creme', 'R$6,90', 'sobremesa');
itens.push(sorvete);

//Bebidas
let refrigerante = new produto('Refrigerante', 'Coca-Cola, Guaraná Antarctica, Fanta Uva e Fanta Laranja','R$5,50','bebida');
itens.push(refrigerante);
let cerveja = new produto('Cerveja', 'Long Neck Brahma','R$6,50','bebida');
itens.push(cerveja);
let agua = new produto('Água', 'Água Mineral','R$3,50','bebida');
itens.push(agua);

function mostrarItens(categ,cor,botao){
    botaoPizzas.style.textDecoration  = 'none';
    botaoMassas.style.textDecoration  = 'none';
    botaoSobremesas.style.textDecoration  = 'none';
    botaoBebidas.style.textDecoration  = 'none';
    botao.style.textDecoration  = 'underline';
    divItens.innerHTML = "";
    for(let i in itens){
        if(itens[i].categoria === categ){
            let ponto = '. '
            let pontos = ''
            if(itens[i].nome.length > 20){
                pontos = ponto.repeat(43 - itens[i].nome.length);
            }
            else if(itens[i].nome.length < 10){
                pontos = ponto.repeat(47 - itens[i].nome.length);
            }
            else{
                pontos = ponto.repeat(45 - itens[i].nome.length);
            }
            let novoProduto = document.createElement('p');
            novoProduto.innerHTML = `${itens[i].nome}${pontos}${itens[i].preco}`;
            novoProduto.style.color = cor;
            novoProduto.style.fontSize = '1.4em';

            divItens.appendChild(novoProduto);
            let novaDescricao = document.createElement('p');
            novaDescricao.innerHTML = `${itens[i].descricao}`;
            novaDescricao.style.paddingBottom  = '10px';
            novaDescricao.style.fontStyle = 'italic';
            divItens.appendChild(novaDescricao);
        }
    }
}

body.onload = function(){
    mostrarItens('pizza','#b92312',botaoPizzas);
};

botaoPizzas.onclick = function(){
    mostrarItens('pizza','#b92312',botaoPizzas);
};

botaoMassas.onclick = function(){
    mostrarItens('massa','#1223b9', botaoMassas);
};

botaoSobremesas.onclick = function(){
    mostrarItens('sobremesa','#5db912', botaoSobremesas);
};

botaoBebidas.onclick = function(){
    mostrarItens('bebida','#b96b12', botaoBebidas);
};

