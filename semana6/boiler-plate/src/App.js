import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: '',
    filtro: '',
    editar: false
  }

  //-----------------------------------------------------------------------
  //Acessando e atualizando o localStorage para armazer dados
  componentDidUpdate() {
    const listaTarefas = [...this.state.tarefas]
    localStorage.setItem("tarefas", JSON.stringify(listaTarefas))
  };

  //-----------------------------------------------------------------------
  //Acessando o localStorage para buscar dados
  componentDidMount() {
    const listaTarefasString = localStorage.getItem("tarefas")
    const listaTarefasObjeto = JSON.parse(listaTarefasString)
    // console.log(listaTarefasObjeto)

    if (listaTarefasObjeto) {
      this.setState({ tarefas: listaTarefasObjeto })
    }
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  //-----------------------------------------------------------------------
  //Funcionalidade de criação de tarefas
  criaTarefa = () => {
    const adicionaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const listaTarefas = [...this.state.tarefas, adicionaTarefa];

    this.setState({ tarefas: listaTarefas, inputValue: '' })
  }

  //-----------------------------------------------------------------------
  //Funcionalidade de exclusão de uma tarefa em específico
  excluirMensagem = (id) => {
    // if (confirm("Deseja excluir essa tarefa?")){

    // }
    const novaLista = this.state.tarefas.filter((tarefa) => {
      return id !== tarefa.id
    })
    this.setState({ tarefas: novaLista })
  }

  //-----------------------------------------------------------------------
  //Funcionalidade de exclusão de todas as tarefas criadas
  excluirTodas = () => {
    const novaLista = []
    this.setState({tarefas: novaLista})
  }

  //-----------------------------------------------------------------------
  //Funcionalidade de marcar e desmarcar tarefas completadas 
  selectTarefa = (id) => {
    const novaListaDeTarefas = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const tarefaFeita = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return tarefaFeita
      } else {
        return tarefa
      }
    })
    this.setState({ tarefas: novaListaDeTarefas })
  }

  //-----------------------------------------------------------------------
  //Funcionalidade de edição de tarefas (ainda não criada e implementada)
  editarTarefa = (id) => {
    console.log("Meu id eh: ", id)
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
          <button onClick={this.excluirTodas}>Excluir todas</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
                onDoubleClick={() => this.excluirMensagem(tarefa.id)}
              >
                {tarefa.texto}
                <button onClick={() => this.editarTarefa(tarefa.id)}>Editar</button>
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
