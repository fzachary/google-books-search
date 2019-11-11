import React from "react";

function List(props) {

    console.log(props.children);
    return (
        <ul className="list-group">
            {props.children}
        </ul>
    );
}

export default List;