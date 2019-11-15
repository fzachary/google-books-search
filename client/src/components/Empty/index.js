import React from "react";
import "./style.css";

function Empty() {
    return(
        <div className="card text-center">
            <div className="card-body bg-dark">
                <h3 className="header" id="saved">No Books To Display. Enter Your Search Above.</h3>
            </div>
        </div>
    );
}

export default Empty;
