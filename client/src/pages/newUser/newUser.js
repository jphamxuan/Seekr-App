import React, { Component, Fragment } from "react"
import { USER } from "../../utils";
import { Link } from "react-router-dom";
import { Row, Input, Button } from 'react-materialize'
import "../../components/registerForm/registerForm.css"

class NewUser extends Component {
    state = {
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        email: ""
    };
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            USER.saveUser({
                username: this.state.username,
                password: this.state.password,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email
            })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }

    };
    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col s2"></div>
                        <div className="col s8">
                            <h3 id="title">Register</h3>
                        </div>
                    <div className="col s2"></div>
                </div>
                <Row>
                    <Input 
                        s={6} 
                        label="First Name"
                        value={this.state.firstname}
                        onChange={this.handleInputChange}
                        name="firstname"
                    />
                    <Input s={6} label="Last Name" 
                        value={this.state.lastname}
                        onChange={this.handleInputChange}
                        name="lastname"
                    />
                    <Input 
                        label="username" s={12} 
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        name="username"
                    />
                    <Input type="password" label="password" s={12} 
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        />
                    <Input 
                        type="email" 
                        label="Email" 
                        s={12}
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        name="email"
                    />
                </Row>
                <br></br>
                <div id="submitBtn">
                    <Button 
                        waves='light'
                        disabled={!(this.state.username && this.state.password)}
                        onClick={this.handleFormSubmit}
                    >
                        <Link to={"/"} >Sign up</Link>
                    </Button>
                </div>
            </Fragment>
        )
    }
}
            


export default NewUser