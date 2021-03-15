const listaDeTarefas = [
    "Comprar pão",
    "Lavar a moto",
    "Preparar o jantar"
]

listaDeTarefas.push(process.argv[2])
console.log("Tarefa adicionada com sucesso")
console.log(`Tarefas: ${listaDeTarefas}`)