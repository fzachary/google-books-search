import React from "react";
import "./style.css";

function Button({ type = "default", className, children, onClick }) {
    return (
        <button onClick={onClick}
                className={[ "btn", `btn-${type}`, className].join(" ")}>
                    {children}
        </button>
    );
}

export default Button;