let dividas = [];

function adicionarDivida(){

    let salario = Number(document.getElementById("salario").value);
    let nome = document.getElementById("nomeDivida").value;
    let valor = Number(document.getElementById("valorDivida").value);
    let categoria = document.getElementById("categoriaDivida").value;

    let divida = {
        nome: nome,
        valor: valor,
        categoria: categoria
    };

    dividas.push(divida);

    adicionarDividaLista(nome, valor, categoria);

    let totalDividas = dividas.reduce((total, d) => total + d.valor, 0);

    let saldo = salario - totalDividas;

    document.getElementById("resultado").innerText =
    "Saldo restante: R$ " + saldo;

    atualizarGrafico(dividas);
}


function excluirDivida(index) {
    dividas.splice(index, 1);
    atualizarTela();
}

function atualizarTela() {

    const lista = document.getElementById("listaDividas");
    lista.innerHTML = "";

    let total = 0;

    dividas.forEach((d, index) => {

        total += d.valor;

        const li = document.createElement("li");

        li.innerHTML = `
        ${d.nome} - R$ ${d.valor} (${d.categoria})
        <button onclick="excluirDivida(${index})">Excluir</button>
        `;

        lista.appendChild(li);

    });

    const salario = Number(document.getElementById("salario").value);

    const resultado = document.getElementById("resultado");

    if (salario) {

        const sobra = salario - total;

        resultado.innerHTML =
        `
        Total de dívidas: R$ ${total} <br>
        Sobra do salário: R$ ${sobra}
        `;
    }

}

