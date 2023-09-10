console.log("JS Inícializado.");

//CRIAR VARIAVEIS
var pontos = 0;
var poder_de_click = 1;

//CRIAR VAR PARA PEGAR HTML
var pegar_pontos = document.getElementById("pontos");
var pegar_horario = document.getElementById("horario");
var pegar_estado = document.getElementById("estado");
var pegar_rank = document.getElementById("rank");
var pegar_conquistas = document.getElementById("conquistas");
var pegar_mudar_botao = document.getElementById("mudar_botao");
var pegar_div_centro = document.getElementById("mensagens_centro");

//VARIAVEIS BOOLEANAS PARA VERIFICAÇÃO
var mensagem1_executada = false;
var mensagem2_executada = false;
var mensagem3_executada = false;
var mensagem4_executada = false;
var mensagem5_executada = false;
var mensagem_final_executada = false;

//PEGAR CONQUISTAS
var pegar_conquista1 = document.getElementById("conquista1");
var pegar_conquista2 = document.getElementById("conquista2");
var pegar_conquista3 = document.getElementById("conquista3");
var pegar_conquista4 = document.getElementById("conquista4");
var pegar_conquista5 = document.getElementById("conquista5");
var pegar_conquista6 = document.getElementById("conquista6");
var pegar_conquista7 = document.getElementById("conquista7");
var pegar_conquista8 = document.getElementById("conquista8");
var pegar_conquista9 = document.getElementById("conquista9");
var pegar_conquista10 = document.getElementById("conquista10");
var pegar_conquista11 = document.getElementById("conquista11");
var pegar_conquista12 = document.getElementById("conquista12");



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
        pegar_conquista1.innerHTML = "🥉primeiros 10 pontos";
    }
    else if(pontos >= 50 && mensagem2_executada == false){
        var criar_a = document.createElement("a");
        criar_a.textContent = "🥉primeiros 50 pontos";
        pegar_div_centro.insertBefore(criar_a, pegar_div_centro.firstChild);
        console.log("mensagem2");
        mensagem2_executada = true;
        pegar_conquista2.innerHTML = "🥉primeiros 50 pontos";
    }
    else if(pontos >= 150 && mensagem3_executada == false){
        var criar_a = document.createElement("a");
        criar_a.textContent = "🥉primeiros 150 pontos";
        pegar_div_centro.insertBefore(criar_a, pegar_div_centro.firstChild);
        console.log("mensagem3");
        mensagem3_executada = true;
        pegar_conquista3.innerHTML = "🥉primeiros 150 pontos";
    }
    else if(pontos >= 350 && mensagem4_executada == false){
        var criar_a = document.createElement("a");
        criar_a.textContent = "🥉primeiros 350 pontos";
        pegar_div_centro.insertBefore(criar_a, pegar_div_centro.firstChild);
        console.log("mensagem4");
        mensagem4_executada = true;
        pegar_conquista4.innerHTML = "🥉primeiros 350 pontos";
    }
    else if(pontos >= 1000 && mensagem5_executada == false){
        var criar_a = document.createElement("a");
        criar_a.textContent = "🥉primeiros 1000 pontos";
        pegar_div_centro.insertBefore(criar_a, pegar_div_centro.firstChild);
        console.log("mensagem5");
        mensagem5_executada = true;
        pegar_conquista5.innerHTML = "🥉primeiros 1000 pontos";
    }
    else if(pontos >= 1500 && mensagem_final_executada == false){
        var criar_a = document.createElement("a");
        criar_a.textContent = "😅apenas isso ate aqui";
        pegar_div_centro.insertBefore(criar_a, pegar_div_centro.firstChild);
        console.log("mensagem final");
        mensagem_final_executada = false;
        pegar_conquista6.innerHTML = "😅apenas isso ate aqui";
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

function abrir_conquistas(){
    pegar_conquistas.style.transform = "translateX(0%)"
    pegar_mudar_botao.style.left = "-50%"
    pegar_div_centro.style.left = "-50%"
}

function fechar_conquistas(){
    pegar_conquistas.style.transform = "translateX(150%)"
    pegar_mudar_botao.style.left = "50%"
    pegar_div_centro.style.left = "50%"
}
