window.onload = function () {
    iniciar();
};

function iniciar() {

    const input = document.getElementById("tarefaInput");
    const btnAdicionar = document.getElementById("btnAdicionar");
    const lista = document.getElementById("listaTarefas");

    btnAdicionar.addEventListener("click", () => {

        // recupera o valor do campo input text
        const texto = input.value.trim();

        // criar um elemento da minha lista de tarefas
        const itemLista = document.createElement("li");

        //cria um botão
        const btnRemover = document.createElement("button");
        btnRemover.textContent = "x";
        //adiciona a classe fechar ao botão
        btnRemover.classList.add("fechar");

        //Adiciona o evento de delete do item
        btnRemover.addEventListener("click", () => {
            itemLista.remove();
        });
        // adicionar o valor do input no item da lista
        itemLista.textContent = texto;

        // adicionar o botão dentro do item da lista
        itemLista.appendChild(btnRemover);

        itemLista.addEventListener("click", () => {
            itemLista.classList.toggle("concluida");
        })

        // adicionar o item na lista
        lista.appendChild(itemLista);

        input.value = "";
    });
}