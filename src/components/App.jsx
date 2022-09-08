import { Component } from 'react';

class App extends Component {

  buttonsOperator = event => {
    const target = event.target.name;
    this.setState(prevState => {
      return {[target]: prevState[target] + 1};
    });
  };

  render() {
    return (
      <>
      </>
    );
  };
};

export default App;