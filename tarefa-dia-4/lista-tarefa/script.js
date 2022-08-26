console.log("ok")
const inputTarefa = document.getElementById("tarefa-nova")

let idTarefa = 0
function addTarefa() {
    const item = document.createElement('li')
  idTarefa++
  item.id = idTarefa
    item.innerHTML = `<li class="item">
    <span>${inputTarefa.value}</span>
    <button>x</button>
</li>`

    const lista = document.querySelector('#lista')
    
    if(inputTarefa.value == ''){
        
        alert( 'campo vazio!! Digite um valor válido' )
      //alert(typeof(inputTarefa))

    }else{
        lista.appendChild(item)
    }
    

    
    
}
function concluir(itemId) {
    const tarefaSelecionada = document.getElementById(itemId);
    tarefaSelecionada.className = "concluida";
}
const botao = document.querySelector('#btn_adicionar')

botao.addEventListener('click', addTarefa)


