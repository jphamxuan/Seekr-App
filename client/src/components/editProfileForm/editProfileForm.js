import React, { Component, Fragment } from "react"
import { Row, Input, Button } from 'react-materialize'
import { USER } from "../../utils";
import { Link } from "react-router-dom";
import "./editProfileForm.css"

class editProfileForm extends Component {
    state = {
        firstname: "",
        lastname: "",
        age: "",
        bio: "",
        email: "",
        isLoggedIn: sessionStorage.isLoggedIn,
        userId: sessionStorage.userId,
        userAc:[]
    };
    componentDidMount(){
        this.loadUser(this.state.userId)
        console.log(this.state.userId)
      }
      loadUser =(id)=>{
        USER.getUser(id)
            .then(res=>{
                this.setState({userAc: res.data})
                console.log(res.data)
            })
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
         
            USER.updateUser( this.state.userId,{
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                bio: this.state.bio,
                age: this.state.age,
                location: this.state.location,

            })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        
        console.log(sessionStorage)

    };

    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col s2"></div>
                      
                    <div className="col s2"></div>
                </div>
                <Row>
                    <Input 
                        s={6} 
                        label={this.state.userAc.firstname}
                        value={this.state.firstname}
                        onChange={this.handleInputChange}
                        name="firstname"
                    />
                    <Input s={6} label="Last Name" 
                        value={this.state.lastname}
                        // label={this.state.userAc.lastname}
                        onChange={this.handleInputChange}
                        name="lastname"
                    />
                    <Input 
                        type="email" 
                        s={12}
                        label="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        name="email"
                        placeholder={this.state.userAc.email}
                    />
                      <Input 
                        type="email" 
                        label="Age" 
                        s={12}
                        value={this.state.age}
                        onChange={this.handleInputChange}
                        name="age"
                        placeholder={this.state.userAc.age}
                    />
                       {/* <Input 
                        type="email" 
                        label="Location" 
                        s={12}
                        value={this.state.location}
                        onChange={this.handleInputChange}
                        name="location"
                        placeholder={this.state.userAc.location}
                    /> */}
                    <Input 
                        type="textarea" 
                        label="Bio" 
                        s={12}
                        value={this.state.bio}
                        onChange={this.handleInputChange}
                        name="bio"
                        placeholder={this.state.userAc.bio}
                    />
                </Row>
                <br></br>
                <div id="submitBtn">
                    <Button 
                        waves='light'
                        // disabled={!(this.state.username && this.state.password)}
                        onClick={this.handleFormSubmit}
                    >
                        <Link to={"/"} >Save Changes</Link>
                    </Button>
                </div>
            </Fragment>

        )
    }
}

export default editProfileForm