import React from 'react';
import Header from '../header/header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.content = '';
  }

  render() {
    return (
      <div className='normal-class'>
        <Header/> {}
        <h2> HI</h2>
      </div>
    );
  }
}

export default App;
