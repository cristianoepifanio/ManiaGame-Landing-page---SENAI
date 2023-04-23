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
        <a key="${val.id} href=""><button>Adicionar no carrinho</button></a>
        </div>
        `;
    })
} 
abrirLoja();

// abrirCarrinho = () => {
//     document.getElementById('carrinho'){
        
//     }
// }

atualizarCarrinho = () => {
    console.log(games);
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