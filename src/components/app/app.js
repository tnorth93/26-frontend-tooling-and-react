import React from 'react';
import cowsay from 'cowsay-browser';

const faker = require('faker');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: cowsay.say({ text: 'say something funny' }),
    };
    this.handleCowsayGenerator = this.handleCowsayGenerator.bind(this);
  }

  handleCowsayGenerator() {
    this.setState(() => {
      return {
        content: cowsay.say({ text: faker.lorem.words(3) }),
      };
    });
  }

  render() {
    return (
      <div className='normal-class'>
        <header>
          <h1> Generate Cowsay Lorem</h1>
        </header>
        <pre> { this.state.content }</pre>
        <button onClick={this.handleCowsayGenerator}> click me</button>
      </div>
    );
  }
}

export default App;
