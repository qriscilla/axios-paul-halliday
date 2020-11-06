import Axios from 'axios';
import React, { Component } from 'react';
import axios from 'axios';

export default class PersonList extends Component {
    state = {
        persons: [],
    };

    componentDidMount = () => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users`)          // Performs an HTTP GET request on a particular URL
            .then(res => {                                              // Axios is promise-based, so we want to use .then to take the result (or response)
                console.log(res);
                this.setState({ persons: res.data });                   // Set the res.data to our persons state
            });
    }

    render() {
        return (
            <ul>
                {this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}
            </ul>
        );
    }
}