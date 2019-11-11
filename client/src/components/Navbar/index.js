import React from "react";

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
            <a className="navbar-brand" href="/">Google Books Search</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-right">
                    <li className="nav-item">
                        <a className="nav-link" href="/saved">Saved</a>
                    </li>
                    </ul>
                </div>
            </nav>
    );
}

export default Navbar;