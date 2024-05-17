import React, { Fragment, Component } from 'react';
import CardTemplate from './CardArray';
import SearchBox from './SearchBox';
import './App.css';

// STATE describes the app, changes it - declared in constructor()

class App extends Component {
    constructor() {
        super()
        this.state = {
            agents: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users') // method for making request to servers
            .then(response => response.json())
            .then(users => this.setState({ agents: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value }) // searchfield gets updated according to the input
    }

    render() {
        const filterAgents = this.state.agents.filter(agent => {
        return agent.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return (
        <Fragment>
            <div className='header tc'> 
                <h1>⚡ Riot Robofriends ⚡</h1>
                <h4>Valorant Agents as Robots</h4>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardTemplate agents={filterAgents}/>
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