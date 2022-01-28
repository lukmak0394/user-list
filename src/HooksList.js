import React from "react";
import './List.css';

function HooksList(props) {

    let listItems = props.users.map((user) => <li key={user.id} onClick={() => props.removeUser(user.id)}>{user.name}</li>)
    return (
        <ul>
            {listItems}
        </ul>
    )
}

export default HooksList;