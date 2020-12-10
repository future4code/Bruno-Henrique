
const selectionWeekDay = document.getElementById("dias-semana");
//console.log(selectionWeekDay)

function createTask() {
    const newTask = document.getElementById("tarefa")
    const newTaskValue = newTask.value;
    const daySelected = selectionWeekDay.value;
    // console.log(newTaskValue);
    // console.log(daySelected);

    if (newTaskValue) {
        const day = document.getElementById(daySelected);
        // console.log(day);
        day.innerHTML += `<li class="li-item"> ${newTaskValue} </li>`;
        
    } else {
        alert("Informe uma tarefa");
    }
    newTask.value = '';
}

//Limpando o planner
const weekDaysClean = document.querySelectorAll(".li-item");
console.log(weekDaysClean)
function clearTasks(){
    if(confirm("Deseja apagar todas a tarefas:")){
        for(let i = 0; i < weekDaysClean.length; i++){
           weekDaysClean[i].innerHTML = ''; 
        }
    }
}

//Riscar tarefas
const taskContainer = document.getElementById('weekdays-container');
taskContainer.addEventListener('click', completeTask);

function completeTask(e) {
    //console.log(e.target)
    if (e.target.classList.contains('li-item')) {
        e.target.classList.toggle('risked-item');
    }
}
