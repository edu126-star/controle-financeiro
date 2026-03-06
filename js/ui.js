function adicionarDivida(){

    let nome = document.getElementById("nomeDivida").value;
    let valor = document.getElementById("valorDivida").value;
    let categoria = document.getElementById("categoriaDivida").value;

    adicionarDividaLista(nome, valor, categoria);

    atualizarLista();

    calcularSaldo();
}

function atualizarLista(){

    let lista = document.getElementById("listaDividas");

    lista.innerHTML = "";

    for(let i = 0; i < dividas.length; i++){

        let item = document.createElement("li");

        item.innerHTML =
        dividas[i].nome +
        " - R$ " +
        dividas[i].valor +
        " (" + dividas[i].categoria + ")" +
        ' <button onclick="excluirDivida('+ i +')">Excluir</button>';

        lista.appendChild(item);
    }
}

function excluirDivida(index){

    dividas.splice(index,1);

    atualizarLista();

    calcularSaldo();
}
let grafico;

function atualizarGrafico(dividas){

    const ctx = document.getElementById("graficoGastos");

    if(!ctx) return;

    const categorias = {};

    dividas.forEach(divida => {

        if(!categorias[divida.categoria]){
            categorias[divida.categoria] = 0;
        }

        categorias[divida.categoria] += Number(divida.valor);

    });

    const labels = Object.keys(categorias);
    const valores = Object.values(categorias);

    if(grafico){
        grafico.destroy();
    }

    grafico = new Chart(ctx, {
        type: "pie",
        data: {
            labels: labels,
            datasets: [{
                label: "Gastos",
                data: valores
            }]
        }
    });

}
