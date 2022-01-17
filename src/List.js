import React from "react";
import './List.css';

function List(props) {
    // map() transforms array containing users to list items
    let listItems = props.users.map((user) => <li key={user.id} onClick={() => props.removeUser(user.id)}>{user.name}</li>);

    return(
        <ul>
            {listItems}
        </ul>
    );
}

export default List;