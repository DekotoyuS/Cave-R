console.log("JS Inícializado.");

//CRIAR VARIAVEIS
var pontos = 0;
var poder_de_click = 1;

//CRIAR VAR PARA PEGAR HTML
var pegar_pontos = document.getElementById("pontos");
var pegar_horario = document.getElementById("horario");
var pegar_estado = document.getElementById("estado");
var pegar_rank = document.getElementById("rank");
var pegar_div_centro = document.getElementById("mensagens_centro");

//VARIAVEIS BOOLEANAS PARA VERIFICAÇÃO
var mensagem1_executada = false;
var mensagem2_executada = false;
var mensagem3_executada = false;
var mensagem4_executada = false;
var mensagem5_executada = false;
var mensagem_final_executada = false;

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
    pegar_pontos.innerHTML = ("Pontos: " + pontos);
    mensagens();
    setTimeout("time()", 500);
}

//função que atualiza o rank no display de html
function atualizar_rank(){
    if (pontos >= 100) {
        pegar_rank.innerHTML = "teste";
    }
    
}

function mensagens(){
    if (pontos >= 10 && mensagem1_executada == false){
        var criar_a = document.createElement("a");
        criar_a.textContent = "🥉primeiros 10 pontos";
        pegar_div_centro.insertBefore(criar_a, pegar_div_centro.firstChild);
        console.log("mensagem1");
        mensagem1_executada = true;
    }
    else if(pontos >= 50 && mensagem2_executada == false){
        var criar_a = document.createElement("a");
        criar_a.textContent = "🥉primeiros 50 pontos";
        pegar_div_centro.insertBefore(criar_a, pegar_div_centro.firstChild);
        console.log("mensagem2");
        mensagem2_executada = true;
    }
    else if(pontos >= 150 && mensagem3_executada == false){
        var criar_a = document.createElement("a");
        criar_a.textContent = "🥉primeiros 150 pontos";
        pegar_div_centro.insertBefore(criar_a, pegar_div_centro.firstChild);
        console.log("mensagem3");
        mensagem3_executada = true;
    }
    else if(pontos >= 350 && mensagem4_executada == false){
        var criar_a = document.createElement("a");
        criar_a.textContent = "🥉primeiros 350 pontos";
        pegar_div_centro.insertBefore(criar_a, pegar_div_centro.firstChild);
        console.log("mensagem4");
        mensagem4_executada = true;
    }
    else if(pontos >= 1000 && mensagem5_executada == false){
        var criar_a = document.createElement("a");
        criar_a.textContent = "🥉primeiros 1000 pontos";
        pegar_div_centro.insertBefore(criar_a, pegar_div_centro.firstChild);
        console.log("mensagem5");
        mensagem5_executada = true;
    }
    else if(pontos >= 1500 && mensagem_final_executada == false){
        var criar_a = document.createElement("a");
        criar_a.textContent = "😅apenas isso ate aqui";
        pegar_div_centro.insertBefore(criar_a, pegar_div_centro.firstChild);
        console.log("mensagem final");
        mensagem_final_executada = true;
    }
}

function atualizar_estado(){
    pegar_estado.innerHTML = "Estado Normal";
}

function save(){
    //guardar
    localStorage.pontos_guardar = (pontos);
    localStorage.poder_de_click_guardar = (poder_de_click);
    console.log("dados salvos: " + " pontos: " + pontos + " , " + "poder de click: " + poder_de_click)
}

function load(){
    pontos = parseFloat(localStorage.pontos_guardar);
    poder_de_click = parseFloat(localStorage.poder_de_click_guardar);
    atualizar_pontos();
    console.log("dados recuperados: " + " pontos: " + pontos + " , " + "poder de click: " + poder_de_click);
}

function reset(){
    localStorage.removeItem("pontos_guardar", "poder_de_click_guardar");
    parseFloat(pontos = 0);
    console.log("dados resetados")
}