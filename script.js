// 1 - Criar o balão
// 2 - Estourar o balão
// 3 - Carregar o jogo

/* 
    var x = largura -> Pense em um plano cartesiano
    var y = altura  -> Pense em um plano cartesiano
*/

var total = 0;

function criarBalao() {
    var balao = document.createElement("div");
    balao.setAttribute("class", "balao");

    var x = Math.floor(Math.random() * 600);
    var y = Math.floor(Math.random() * 400);
    //O Math.random gera números aleatórios
    //O Math.floor gera apenas números inteiros, ou seja, números sem vírgula
    /*Quando multiplicamos o Math.random por um número, o número que está multiplicando o método irá ser 
    o número limite gerado. Exemplo: Math.random * 5, o número gerado será de no máximo 5.
    */

    balao.setAttribute("style", "left:" +x +"px;top:" +y +"px;");
    balao.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(balao);
}

function estourar(objeto) {
    document.body.removeChild(objeto);
    total++;
    var score = document.getElementById('total');
    score.innerHTML = "Balões estourados: " +total;
}

function carregarJogo() {
    //set Intervcal irá servir para criar um intervalo para chamar a função que foi colocada nele.
    //Os números após a vírgula simbolizam a quantidade do tempo do intervalo em que ele chamará a função
    //A medida de tempo é em milisegundos
    setInterval(criarBalao, 1000);
}