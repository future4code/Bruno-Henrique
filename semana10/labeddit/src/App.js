import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Routes from './Routes/Routes'
import GlobalState from './global/GlobalState'

function App() {
  return (
    <GlobalState>
      <CssBaseline />
      <Routes />
    </GlobalState>
  );
}

export default App;
