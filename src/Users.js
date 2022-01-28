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

        if (this.inputElement.value.trim() === '') {
            this.setState(() => {
                return({
                    error: "Field can't be blank"
                })
            })
        } else {
            let newUser = {
                id: Date.now(),  // What else can be used as unique ID? How to generate it?
                name: this.inputElement.value
            }
            this.setState((state) => {
                return({
                    user: state.user.concat(newUser),
                    error: ''
                })
            }) 
        }
        
        this.inputElement.value = '';
    }

   

    removeUser = (id) => {
        this.setState((state) => {
            return({
                // If filter method will return true, currently iterated obiect passed the filter (its' id !== id of clicked). If it return false (id of current iterated === id of clicked), it will not pass the filter and in the filtered array there will be only elements that passed.
                user: state.user.filter(user => user.id !== id) ,

            })
        })
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
                <List removeUser={this.removeUser} users={this.state.user}/>
            </div>
        )
    }
}

export default Users;