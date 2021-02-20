import React, {Component} from 'react';
import CardList from '../components/cardList';
import SearchBox from '../components/searchbox';
import './App.css';
import Scroll from '../components/scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots:[],
            searchfield:''
        };
    }

    onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value })
    }

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response =>{
      return response.json();
    }).then(users=> {
      this.setState({robots:users})
    })
}

    render() {

      const filteredRobots = this.state.robots.filter(robots => {
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      })
    if (this.state.robots === 0) {
      return <h1>Loading </h1>
    } else {
        return (
            <div className='tc'>
                  <h1 className='f1'>Robofriends</h1>
                  <SearchBox searchChange={this.onSearchChange} />
              <Scroll>
                    <ErrorBoundary>
                      <CardList robots={filteredRobots}/>
                   </ErrorBoundary>
              </Scroll>
            </div>
        );
    }
  }
}

export default App;
