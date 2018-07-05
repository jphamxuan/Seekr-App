import React, { Component, Fragment } from "react"
import { USER } from "../../utils";
import { Link } from "react-router-dom";
import { Row, Col, Input } from 'react-materialize'
import LoginButton from "../../components/LoginButton"
import LogoutButton from "../../components/LogoutButton"
// import MapContainer from "../../components/MapContainer";

class Login extends Component {
    
        
    state = { 
        isLoggedIn: sessionStorage.isLoggedIn,
        username: "",
        password: ""
    };
    handleLogoutClick = () =>{
        this.setState({ isLoggedIn: false });
        sessionStorage.isLoggedIn= ""
        sessionStorage.userId = ''


    }
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            const user = {
                username: this.state.username, 
                password: this.state.password
            }
            USER.login(user)
                .then((res) => {
                    this.setState({ isLoggedIn: true })
                    sessionStorage.isLoggedIn= true
                    sessionStorage.userId = res.data._id
                    })
                .catch(err => console.log(err));
        }
    };
    
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        let link

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
            link = <Link to={"/profile"}><strong>{this.state.username} Logged In</strong></Link>
        } else {
            button = <LoginButton 
                        disabled={!(this.state.username && this.state.password)}
                        onClick={this.handleFormSubmit}
                     />
        }
        return (
            <Fragment>
                <Row>
                    <Col s={4}>
                    <div className="row">
                        <div className="col s2"></div>
                        <div className="col s8">
                            <h3 id="title">Login</h3>
                        </div>
                        <div className="col s2"></div>
                    </div>
                    <Input
                        label="username" s={12}
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        name="username"
                        placeholder="User name"
                    />
                    <Input type="password" label="password" s={12}
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                        placeholder="Password"
                    />
                    <br></br>
                    <div id="submitBtn">
                        {button} {link}
                    </div>
                    </Col>
            </Row>
            </Fragment>
        )
    }
}



export default Login
