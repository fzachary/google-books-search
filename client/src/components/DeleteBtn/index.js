import React from "react";
import Button from "../Button";

function DeleteBtn(props) {
    return (
        <Button type="danger"
                onClick={props.onClick}>
                    Remove
        </Button>
    );
}

export default DeleteBtn;
