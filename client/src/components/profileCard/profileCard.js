import React, { Component, Fragment } from "react";
import logo from '../../images/fish.jpg';
import "./profileCard.css";
import {USER} from "../../utils";
import {Image} from 'cloudinary-react';


class profileCard extends Component {
    state = {
        trails: [],
        isLoggedIn: sessionStorage.isLoggedIn,
        userId: sessionStorage.userId,
        userAc:[]
      }; 
      componentDidMount(){
        this.loadUser(this.state.userId)
      }
    loadUser =(id)=>{
        USER.getUser(id)
            .then(res=>{
                this.setState({userAc: res.data})
                console.log(res.data)
            })
    }
  

    render() {
        const profileCardCSS = {
            background: {
                backgroundColor: "#117755",
                borderRadius: "5px"
            }
        }
        return (
        <Fragment>
            <div className="row">
                <div className="col s3"></div>
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1 center-align">
                            <Image cloudName='phamjosi' publicId={this.state.userAc.profilePic} width='200' crop='scale' />
                            <div className="card-content white-text center-align">
                                {/* data for username goes here */}
                                <span className="card-title">{this.state.userAc.username}</span>
                                {/* data for location goes here */}
                                <p> new </p>
                            </div>
                        </div>
                    </div>
                <div className="col s3"></div>
            </div>
        </Fragment>

        )
    }
}

export default profileCard

