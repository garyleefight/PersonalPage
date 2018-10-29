import React, { Component } from 'react';
import Header from './component/header';
// import Button from '@material-ui/core/Button'
class App extends Component {
  render() {
    return (
      <Header data="helloworld"></Header>
      // <Button variant = "contained" color="primary">helloworld</Button>
    );
  }
}

export default App;
