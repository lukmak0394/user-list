import React from "react";
import './List.css';

function List(props) {

    let userData  = props.users;
    // map() transforms array containing users to list items
    let listItems = userData.map((user) => <li key={user.id}>{user.name}</li>);

    return(
        <ul>
            {listItems}
        </ul>
    );
}

export default List;