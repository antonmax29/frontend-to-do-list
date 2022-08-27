
const inputTarefa = document.getElementById("tarefa-nova")
inputTarefa.focus() 
let idTarefa = 0
let selecao =0
const btn_clear = document.getElementById('limpar')

function addTarefa() {

    const item = document.createElement('li')
    idTarefa++
    
    item.id = idTarefa

    const lista = document.querySelector('#lista')

    item.innerHTML = `<li class="item">
    <span ondblclick="removeConcluir(${idTarefa})"  onclick="concluir(${idTarefa})">${inputTarefa.value}</span>
    <button onclick="excluir(${idTarefa})"><i class="fi fi-ss-trash"></i></i></button>
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
function removeConcluir(itemRemove){
  const itemTirar = document.getElementById(itemRemove)
  itemTirar.classList.remove("concluida")
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

btn_clear.addEventListener('click', limparLista)

function limparLista() {
  const lista = document.querySelector('#lista')
  lista.innerHTML= ''
}
