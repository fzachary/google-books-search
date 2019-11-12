import React from "react";
import "./style.css";

function Thumbnail(props) {
  console.log(props.src);
    return (
      <div className="thumbnail">
        <img src={props.src} alt="Book" />
      </div>
    );
  }
  
  export default Thumbnail;