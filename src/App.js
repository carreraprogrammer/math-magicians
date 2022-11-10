import React from 'react';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar />
        <Calculator />
      </>
    );
  }
}

export default App;
