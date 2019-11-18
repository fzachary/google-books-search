import React from "react";
import "./style.css";

function List({ children }) {
    return (
        <ul className="list-group">
            {children}
        </ul>
    );
}

export default List;