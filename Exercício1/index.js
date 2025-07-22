const btnTrocarCor = document.getElementById("btn-troca-cor");
const btnVoltarCor = document.getElementById("btn-voltar-cor");

const box = document.querySelector(".azul");

btnTrocarCor.addEventListener("click", trocarCor);
btnVoltarCor.addEventListener("click", voltarCor);

function trocarCor(){
    box.classList.remove("azul");
    box.classList.add("amarelo");
}

function voltarCor(){
    box.classList.remove("amarelo");
    box.classList.add("azul");
}
