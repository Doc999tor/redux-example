import React, { Component } from 'react';

import Numbers from './components/Numbers'
import FormNumber from './components/FormNumber'

class App extends Component {
  render() {
    return (
      <>
        <FormNumber />
        <Numbers />
      </>
    );
  }
}

export default App;
