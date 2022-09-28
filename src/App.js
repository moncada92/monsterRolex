import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/CardList.component';
import SearchBox from './components/search-box/SearchBox.component';

class App extends Component {

  constructor() {
    super()

    this.state = {
      monsters: [],
      inputSearch: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      this.setState(
        () => {
          return {
            monsters: data
          }
        },
        () => console.log(this.state.monsters)
      )
    })
  }

  OnSearchMonsters = (e) => {
    const {value} = e.target
    const inputSearch = value.toLocaleLowerCase();

    this.setState({
      inputSearch: inputSearch
    })
}

  render() {

    const {monsters, inputSearch} = this.state
    const {OnSearchMonsters} = this

    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(inputSearch)
    })

    return (
      <div className="App">

        <h1 className='app-title'>Monsters Rolodex</h1>
        
        <SearchBox
          className='search-box'
          placeholder='Search monsters' 
          handlerSearchMonsters={OnSearchMonsters}
        />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}
export default App;