import React from "react";
import "./style.css";

function Thumbnail(props) {
  console.log(props.src);
    return (
      <div
        className="thumbnail"
        role="img"
        style={{
          backgroundImage: `url(${props.src})`
        }}
      />
    );
  }
  
  export default Thumbnail;