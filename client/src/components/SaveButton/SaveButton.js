import React from "react";
import { Button } from 'react-materialize'

import "./SaveButton.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SaveButton = props => (
    <Button
        className='green'
        waves="light"
        onClick={props.onClick}>
        <strong>Save</strong>
    </Button>
);

export default SaveButton;
