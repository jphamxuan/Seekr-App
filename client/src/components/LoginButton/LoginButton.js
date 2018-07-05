import React from "react";
import { Button } from 'react-materialize'

import "./LoginButton.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const LoginButton = props => (
    <Button 
        className='yellow'
        waves="light"
        onClick={props.onClick}>
        <strong>Login</strong>
    </Button>
);

export default LoginButton;
