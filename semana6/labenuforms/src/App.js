import React from 'react'
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'

class App extends React.Component {
  state = {
    etapa: 1
  }

  btnProximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 })
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
        break;

      case 2:
        return <Etapa2 />
        break;

      case 3:
        return <Etapa3 />
        break;

      default:
        return <div></div>
        break;

    }
  }

  render() {
    return (
      <div className="App">
        <h1>Labenu Forms</h1>
        {this.renderizaEtapa()}
        <button onClick={this.btnProximaEtapa}>Proxima etapa</button>
      </div>
    );
  }
}

export default App;
