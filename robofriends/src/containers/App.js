import React, { Fragment, Component } from 'react';
import ErrorBoundry from '../ErrorBoundry';
import CardTemplate from './CardArray';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import '../index.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
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
                        <ErrorBoundry>
                            <CardTemplate robots={filterRobots}/>
                        </ErrorBoundry>
                    </Scroll> 
                </div>
            </Fragment>
        );
    }
}

export default App;