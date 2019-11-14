import React from "react";
import "./style.css";

function List({ children }) {

    console.log(children);
    return (
        <ul className="list-group">
            {children}
        </ul>
    );
}

export default List;