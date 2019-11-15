import React from "react";
import "./style.css";

function Navbar(active) {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">MERN Virtual Library</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-right">
                            <li className="nav-item">
                                <a className={window.location.pathname === "/" ? "nav-link active" : "nav-link"} href="/">Search</a>
                            </li>
                            <li className="nav-item">
                                <a className={window.location.pathname === "/books" ? "nav-link active" : "nav-link"} href="/books">Saved</a>
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>
    );
}

export default Navbar;