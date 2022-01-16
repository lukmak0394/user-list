import React, {Component} from 'react';
import './Users.css';

import List from './List';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            error: ''
        }
    }

    addUsers = (event) => {
        event.preventDefault();

        let newUser = {
            id: Date.now(),  // Jak inaczej można ustawić ID?
            name: this.inputElement.value
        }

        if (this.inputElement.value.trim() === '') {
            this.setState(() => {
                return({
                    error: "Field can't be blank"
                })
            })
        } else {
            this.setState(() => {
                return({
                    user: this.state.user.concat(newUser),
                    error: ''
                })
            }) 
        }
        
        this.inputElement.value = '';
    }

    render() {
        return(
            <div className='users'>
                <h1 className='list-title'>User's List</h1>
                <p className='error-msg'>{this.state.error}</p>
                <form className='users-form' onSubmit={this.addUsers}>
                    <input type="text" ref={(el) => {this.inputElement = el;}} placeholder="Enter name" />  
                    <button type="submit">Add User</button>
                </form>
                <List users={this.state.user}/>
            </div>
        )
    }
}

export default Users;