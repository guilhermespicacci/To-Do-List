class ToDoList{
  geraTarefa(n){    
      const div = document.getElementById("div-task")
      const tasks = document.createElement("div");
       tasks.classList.add("task");
       div.appendChild(tasks);
       tasks.innerText = n;
       const deleteTask = document.createElement("button");
       
       deleteTask.classList.add("button-delete");
      deleteTask.textContent = "Excluir"
       tasks.appendChild(deleteTask);
       console.log("está funcionando!")
    }
    excluirTarefa(botaoParam){
      botaoParam.forEach((botao)=>{
        console.log(botao)
        botao.addEventListener("click",()=>{
          console.log('Sim eba')
      
       
        botao.parentElement.remove()
        
      })
      })
    }
    
   
}
const taskNome = document.getElementById("task-name")
const botaoTask = document.getElementById("button-task")
let botaoDeletar

listTodo = new ToDoList()

botaoTask.addEventListener("click", ()=> {
  listTodo.geraTarefa(taskNome.value)
  botaoDeletar = document.querySelectorAll('.button-delete')
    listTodo.excluirTarefa(botaoDeletar)
    taskNome.value = ''
  })

