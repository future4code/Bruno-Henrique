import React from 'react'
import './App.css'
import ComponentPokeDex from './components/ComponentPokeDex/ComponentPokeDex';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Tela inicial</h1>
        <select></select>
        <hr />
        <ComponentPokeDex />
      </div>
    );
  }
};

export default App;
