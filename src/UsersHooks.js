import React, { useRef, useState } from "react";
import './Users.css';

import HooksList from "./HooksList";

function UserHooks() {
    const [user, setName] = useState([]);  // = this.state = { user: [] }
    const [msg, setMsg] = useState('')
    const inputRef = useRef();

    const addUser = (event) => {
        event.preventDefault();

        let newUser = {
            id: Date.now(),
            name: inputRef.current.value
        }

        if (inputRef.current.value.trim() === '') {
            // setState of msg
            setMsg("Field can't be blank")
        } else {
            // Set state of user
            setName(user => user.concat(newUser))
            setMsg('')
        }

        inputRef.current.value = '';
    }

   

    const removeUser = (id) => {
        setName(user.filter(user => user.id !== id))
    }
    
    
    return(
        <div className='users'>
            <h1 className='list-title'>User's List</h1>
            <p className='error-msg'>{msg}</p>
            <form className='users-form' onSubmit={addUser}>
                <input type="text"  placeholder="Enter name" ref={inputRef}/>  
                <button type="submit">Add User</button>
            </form>
            <HooksList users={user} removeUser={removeUser}/>
        </div>
    );
};

export default UserHooks;
