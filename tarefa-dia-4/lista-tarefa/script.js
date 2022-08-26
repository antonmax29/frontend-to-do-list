console.log("ok")
const inputTarefa = document.getElementById("tarefa-nova")


function addTarefa() {
    const item = document.createElement('li')
  
    item.innerHTML = `<li>
    <span>${inputTarefa.value}</span>
    <button>x</button>
</li>`

    const lista = document.querySelector('#lista')
    
    if(inputTarefa.value == ''){
        
        alert( 'campo vazio!!')
        alert(typeof(inputTarefa))

    }else if(inputTarefa.value == inputTarefa.value){
    alert('ja existe tarefa')}
    else{
        lista.appendChild(item)
    }
    

    
    
}
const botao = document.querySelector('#btn_adicionar')

botao.addEventListener('click', addTarefa)


