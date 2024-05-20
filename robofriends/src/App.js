import React, { Fragment, Component } from 'react';
import CardTemplate from './CardArray';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

// STATE describes the app, changes it - declared in constructor()

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users') // method for making request to servers
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value }) // searchfield gets updated according to the input
    }

    render() {
        const { robots, searchfield } = this.state;
        const filterRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        
        return !robots.length ?
        <h1>Loading...</h1> : 
        (
            <Fragment>
                <div className='header tc'> 
                    <h1>⚡ Robofriends ⚡</h1>
                    <h4> Search robots </h4>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll> 
                        <CardTemplate robots={filterRobots}/>
                    </Scroll> 
                </div>
            </Fragment>
        );
    }
}

// onChange => detects change

export default App;

// LOADING bar:
// if (this.state.agents.lenght === 0) {
//   return <p>Loading...</p>
// } else {
//      return ~default object;
// }