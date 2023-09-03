console.log("JS Inícializado.");

//CRIAR VARIAVEIS
var pontos = 0;
var poder_de_click = 1;

//CRIAR VAR PARA PEGAR HTML
var pegar_pontos = document.getElementById("pontos");
var pegar_horario = document.getElementById("horario");
var pegar_estado = document.getElementById("estado");
var pegar_rank = document.getElementById("rank");


function time(){
    today = new Date();
    hora = today.getHours();
    minutos = today.getMinutes();
    segundos = today.getSeconds();
    pegar_horario.innerHTML = hora + ":" + minutos + ":" + segundos;
    setTimeout("time()",500);
}

//sempre que for acionado o click, ira adicionar pontos com o poder de click, e executar a função que atualiza os pontos no display do html
function acao(){
    pontos += poder_de_click;
    atualizar_pontos();   
}

//função para atualizar pontos no display do html, e também sempre que for executada, executa a função para atualizar o rank
function atualizar_pontos(){
    pegar_pontos.innerHTML = ("Quantidade de Pontos: " + pontos);
    atualizar_rank();
    setTimeout("time()", 500);
}

//função que atualiza o rank no display de html
function atualizar_rank(){
    if (pontos >= 100) {
        pegar_rank.innerHTML = "teste";
    }
    
}

function atualizar_estado(){
    pegar_estado.innerHTML = "Estado Normal";
}

function save(){
    //guardar
    localStorage.pontos_guardar = (pontos);
    console.log("dados salvos: " + " pontos: " + pontos)
}

function load(){
    pontos = parseFloat(localStorage.pontos_guardar);
    atualizar_pontos();
    console.log("dados recuperados: " + pontos);
}