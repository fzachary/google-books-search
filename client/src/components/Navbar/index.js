import React from "react";
import "./style.css";

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">MERN Virtual Library</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-right">
                            <li className="nav-item">
                                <a className="nav-link" href="/books">My Books</a>
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>
    );
}

export default Navbar;