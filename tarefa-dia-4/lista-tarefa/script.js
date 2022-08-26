
const inputTarefa = document.getElementById("tarefa-nova")
inputTarefa.focus() 
let idTarefa = 0

function addTarefa() {

    const item = document.createElement('li')
    idTarefa++
    console.log(idTarefa)
    item.id = idTarefa

    const lista = document.querySelector('#lista')

    item.innerHTML = `<li class="item">
    <span onclick="concluir(${idTarefa})">${inputTarefa.value}</span>
    <button class="delete" onclick="excluir(${idTarefa})">x</button>
    </li>`

    if(inputTarefa.value == ''){
        
        alert( 'campo vazio!! Digite a descrição da tarefa' )
      //alert(typeof(inputTarefa))
      inputTarefa.focus() 

    }else
     {
        lista.appendChild(item)
        inputTarefa.value = ''
        inputTarefa.focus()
    }
    
}

function concluir(itemId) {
    const tarefaSelecionada = document.getElementById(itemId);
    tarefaSelecionada.className = "concluida";
}

function excluir(itemExcluir) {
  const apagarItem = document.getElementById(itemExcluir);
        apagarItem.innerHTML = ''
        inputTarefa.focus() 
}

const botao = document.querySelector('#btn_adicionar')

botao.addEventListener('click', addTarefa)


