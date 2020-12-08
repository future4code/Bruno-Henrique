
const selectionWeekDay = document.getElementById("dias-semana")

//console.log(newTask)
//console.log(selectionWeekDay)

function createTask() {
    const newTask = document.getElementById("tarefa")
    const newTaskValue = newTask.value
    const daySelected = selectionWeekDay.value
    // console.log(newTaskValue);
    // console.log(daySelected);

    if (newTaskValue) {
        const day = document.getElementById(daySelected)
        day.innerHTML += `<li class="li-item"> ${newTaskValue} </li>`
        //console.log(day);
    } else {
        alert("Informe uma tarefa");
    }
    newTask.value = '';
}

//Riscar tarefas

const taskContainer = document.getElementById('task-container');
taskContainer.addEventListener('click', riskItem)

function riskItem(e){
    //console.log(e.target)
    if(e.target.classList.contains('li-item')){
        e.target.classList.toggle('risked-item')
    }
}
