import React from 'react'

class App extends React.Component {
  state = {
    etapa1: true,
    etapa2: false,
    etapa3: false,
    etapaFinal: false
  }

  render() {

    const renderizaEtapa = () => {
      if (this.state.etapa1) {
        return (
          <div>
            <label>Nome: </label>
            <input />
            <label>Idade: </label>
            <input />
            <label>Email: </label>
            <input />
            <label for="escolaridade">Escolaridade: </label>
            <select id="escolaridade">
              <option>Ensino medio incompleto</option>
              <option>Ensino medio completo</option>
              <option>Ensino superior incompleto</option>
              <option>Ensino superior completo</option>              
            </select>
          </div>
        )
      }
    }
    return (
      <div className="App">
        <h1>Labenu Forms</h1>
        {renderizaEtapa()}
      </div>
    );
  }
}

export default App;
