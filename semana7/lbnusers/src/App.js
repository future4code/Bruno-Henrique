import React from 'react'
import ComponentLogin from './components/ComponentLogin/ComponentLogin';
import ComponentUsers from './components/ComponentUsers/ComponentUsers';

// import axios from 'axios';
// import styled from 'styled-components'


class App extends React.Component {
  state = {
    showLogin: true,
    btnName: "Usuarios"
  }

  changePage = () => {
    if(this.state.showLogin){
      this.setState({showLogin: !this.state.showLogin, btnName: "Cadastro"})
    }else{
      this.setState({showLogin: !this.state.showLogin, btnName: "Usuario"})
    }
    
  }

  render() {
    return (
      <div>
        <h1>LbnUsers</h1>
        <button onClick={this.changePage}>Ir para {this.state.btnName}</button>
        {this.state.showLogin ? <ComponentLogin /> : <ComponentUsers />}        
      </div>

    );
  }
}

export default App;
