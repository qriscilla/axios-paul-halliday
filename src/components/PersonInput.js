import Axios from 'axios';
import React, { Component } from 'react';
import axios from 'axios';

export default class PersonInput extends Component {
    state = {
        name: '',
    };

    handleChange = event => {
        // this.setState({ name: event.target.value });
        this.setState({ id: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        // const user = {
        //     name: this.state.name
        // }

        axios
            // .post(`https://jsonplaceholder.typicode.com/users`, {user})                  // Similar to the .get method
            .delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)          // Deleting a data on our API
            .then(res => {                                                                  // Also similar to .get, we need to handle the result (response)
                console.log(res);
                console.log(res.data);
            });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    {/* Person Name:
                    <input type='text' name='name' onChange={this.handleChange} /> */}
                    Person ID:
                    <input type='number' name='id' onChange={this.handleChange} />
                </label>

                {/* <button type='submit'>Add</button> */}
                <button type='submit'>Delete</button>
            </form>
        );
    }
}