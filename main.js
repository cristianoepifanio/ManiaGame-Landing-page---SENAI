//  Jogos À venda
const games = [
    {
        id: 0,
        name: 'Super Mario Bros',
        img: 'images/mario-to-site.jpg',
        quant: 0,
        preco: 50.00
    },
    
    {
        id: 1,
        name: 'Soccer',
        img: 'images/soccer-to-site.jpg',
        quant: 0,
        preco: 50.00
    },
    
    {
        id: 2,
        name: 'Cards',
        img: 'images/cards-to-site.jpg',
        quant: 0,
        preco: 50.00
    },
    
    {
        id: 3,
        name: 'Chees',
        img: 'images/chees-to-site.jpg',
        quant: 0,
        preco: 50.00
    },
]
abrirLoja = () => {
    var containerGames = document.getElementById('gameList');
    games.map((val)=>{
        containerGames.innerHTML += `
        <div class="game-single">
        <h2>${val.name}</h2>
        <img src=" ${val.img} " alt="${val.name}">
        <p>Preço: <b>R$ ${val.preco}</b></p>
        <a key="${val.id}" href="#"><button>Adicionar no carrinho</button></a>
        </div>
        `;
    })
} 
abrirLoja();

abrirCarrinho = () => {
    document.getElementById('openCarrinho').style.visibility = "visible";
}

atualizarCarrinho = () => {
   var containerCarrinho = document.getElementById('carrinho');
   containerCarrinho.innerHTML = "";
   games.map((val)=>{
    if (val.quant>0){
        containerCarrinho.innerHTML += `   
        <p>${val.name} : ${val.quant}<br>preço: R$ ${(val.quant)*(val.preco)}</p>
        `
    }
   });
}

var links = document.getElementsByTagName('a');
for(var i=0;i<links.length;i++){
    links[i].addEventListener('click',function(){
        let key = this.getAttribute('key');
        games[key].quant++;
        atualizarCarrinho();
        return false;
    })
} 

openMenu = () => {
    document.getElementsByClassName('openMenu').style() = `opacity: 1;
    width: 90vw;
    color: #000;
    background-color: #444;
    border: 2px solid black;
    border-radius: 10px;
    position: absolute;
    left: 20px;
    padding: 1rem;
`
}