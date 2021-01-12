import React from 'react'
import ComponentLogin from './components/ComponentLogin/ComponentLogin';
import ComponentUsers from './components/ComponentUsers/ComponentUsers';

// import axios from 'axios';
// import styled from 'styled-components'


class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Tela inicial</h1>
        <ComponentLogin />
        <ComponentUsers />
      </div>

    );
  }
}

export default App;
