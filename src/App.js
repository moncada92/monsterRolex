import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor() {
    super()

    this.state = {
      name: {first: 'Michelt', last: 'Pazu'},
      company: 'ZTM'
    }
  }

  handlerChangeName = () => {
    this.setState(
      
      () => {
        return {
          name: {first: 'Camilo', last: 'Moncada'} 
        }
      },
      
      () => { console.log(this.state)}
    )
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi { this.state.name.first } { this.state.name.last } { this.state.company }
          </p>
          <button onClick={this.handlerChangeName}>Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;
