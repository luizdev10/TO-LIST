const btnAdd = document.getElementById('btn');
const btnDt = document.querySelector('.deleted');
const btnCp = document.querySelector('.completed');
const input = document.getElementById('content-list');
const listCompleted = document.getElementById('area-item');

let ListaDeTarefas = [];

const coletarItem = () => {
    if (input.value === ""){
        alert("Por favor digite o que voê tem para fazer")
        return
    }
    ListaDeTarefas.push({
        tarefa: input.value,
        concluida : false
    });
    input.value = "";
    mostrarItem()
}

const mostrarItem = () => {
    let novoItem = '';

    ListaDeTarefas.forEach((item, index) => {

        novoItem = novoItem + `<li class="item ${item.concluida && "done"}">
        <div class="area-check completed" onclick="concluirItem(${index})">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
        class="bi bi-check2-circle" viewBox="0 0 16 16" >
        <path
        d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
        <path
        d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
        </svg>
        </div>
        <div class="areaText">
        <p class="text-item">${item.tarefa}</p> 
        </div>
        <div class="area-check deleted" onclick="removeItem(${index}) ">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
        class="bi bi-trash" viewBox="0 0 16 16"  >
        <path
        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
        <path
        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
        </svg>
        </div>
        </li>
        `
    });

    listCompleted.innerHTML = novoItem;

    localStorage.setItem("listaItem", JSON.stringify(ListaDeTarefas))
}
btnAdd.addEventListener('click', coletarItem);

const removeItem = (index) => {
    ListaDeTarefas.splice(index, 1)
    mostrarItem()
}

const concluirItem  = (index) =>{
    ListaDeTarefas[index].concluida = !ListaDeTarefas[index].concluida
    mostrarItem()
}

const recarregarItens = ()=>{
    const tarefasLocal = localStorage.getItem("listaItem");
    if(tarefasLocal){
        ListaDeTarefas = JSON.parse(tarefasLocal)
    }

    mostrarItem();
}
recarregarItens()