import React from 'react'
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'

class App extends React.Component {
  state = {
    etapa: 1
  }

  render() {
    let contador = this.state.etapa

    const btnProximaEtapa = () =>{  
      contador ++;
      this.setState = ({etapa: contador})
    }

    const renderizaEtapa = () => {
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
          alert(`Questionario ja foi respondido`)
          break;
      }
    }
    return (
      <div className="App">
        <h1>Labenu Forms</h1>
        {renderizaEtapa()}
        <button onClick={this.btnProximaEtapa}>Proxima etapa</button>
      </div>
    );
  }
}

export default App;
