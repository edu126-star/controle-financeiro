let dividas = [];

function adicionarDividaLista(nome, valor, categoria){

    let divida = {
        nome: nome,
        valor: Number(valor),
        categoria: categoria
    };

    dividas.push(divida);
}

function calcularSaldo(){

    let salario = Number(document.getElementById("salario").value);

    let totalDividas = 0;

    for(let i = 0; i < dividas.length; i++){
        totalDividas += dividas[i].valor;
    }

    let saldo = salario - totalDividas;

    document.getElementById("resultado").innerText =
    "Saldo restante: R$ " + saldo;
}

