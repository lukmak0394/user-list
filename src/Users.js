import React, {Component} from 'react';
import './Users.css';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
    }

    addUsers = (event) => {
        event.preventDefault();

        let newUser = {
            id: Date.now(),
            name: this.inputElement.value
        }

        if (this.inputElement.value.trim() === '') {
            console.log('not this time')
        } else {
            this.setState(() => {
                return({
                    user: this.state.user.concat(newUser)
                })
            }) 
        }
        
        this.inputElement.value = '';
    }

    render() {
        return(
            <div className='users'>
                <h1 className='list-title'>User's List</h1>
                <form className='users-form' onSubmit={this.addUsers}>
                    <input type="text" ref={(el) => {this.inputElement = el;}} placeholder="Enter name" />  
                    <button type="submit">Add User</button>
                </form>
            </div>
        )
    }
}

export default Users;