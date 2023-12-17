const horasTrabalhadas = document.querySelector("#horas-trabalhadas");
const numeroViagens = document.querySelector("#numero-viagens");
const valorRecebido = document.querySelector("#valor-recebido");

const resultContainer = document.querySelector(".result-container");

const duracaoMedia = document.querySelector("#duracao-media-viagem");
const valorHora = document.querySelector("#valor-hora");

const submitBtn = document.querySelector("#submit-btn");

// Classe Ganhos Semanais

class GanhosSemanais {
    horas;
    viagens;
    valor;

    constructor(horas, viagens, valor){
        this.horas = horas;
        this.viagens = viagens;
        this.valor = valor;
    }

    duracaoMediaViagem() {
        return Math.round((this.horas/this.viagens) * 60) + " minutos";
    }

    valorHora() {
       return (this.valor/this.horas).toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'}); 
    }
}


submitBtn.addEventListener("click", (event)=> {
    event.preventDefault();

    const novaSemana = new GanhosSemanais(horasTrabalhadas.value, numeroViagens.value, valorRecebido.value);

    duracaoMedia.innerHTML = novaSemana.duracaoMediaViagem();
    valorHora.innerHTML = novaSemana.valorHora();
    
    
    resultContainer.classList.add("active")
});