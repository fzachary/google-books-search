import React from "react";

function List({ children }) {

    console.log(children);
    return (
        <ul className="list-group">
            {children}
        </ul>
    );
}

export default List;