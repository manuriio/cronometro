//Declaração de Variáveis
let segundos = 0;
let intervalo = null;
//Elementos do DOM para manipulação
const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

//botão star
startBtn.addEventListener("click", iniciarCronometro);

//botão pause
pauseBtn.addEventListener("click", pauseCronometro);

//botao resete
resetBtn.addEventListener("click", resetCronometro);

//função de sart no cronometro
function iniciarCronometro(){
 if (intervalo) return; //evita que existam multiplos intervalos

    //guarda em intervalo o passar de 1seg ou 1000ms
    intervalo = setInterval(() => {
        segundos++;
        atualizaDisplay();
    }, 1000);

}

//função de pause no cronometro
function pauseCronometro(){
    clearInterval(intervalo);
    intervalo = null

}

//função de reset no cronometro
function resetCronometro(){
    pauseCronometro();
    segundos = 0;
   atualizaDisplay()
}

//função de formartar o tempo
function formatarTempo(segundosTotais){
 const minutos = Math.floor(segundosTotais/60);
 const segundos = segundosTotais % 60;
 return`${String(minutos).padStart(2,'0')}:${String(segundos).padStart(2,'0')}`
}

    //função que envia o tempo para apágina
    function atualizaDisplay(){
        display.textContent = formatarTempo(segundos);

    }