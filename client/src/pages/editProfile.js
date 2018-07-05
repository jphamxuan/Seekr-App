import React, { Component, Fragment } from "react"
import ProfileCard from "../components/profileCard"
import EditProfileForm from "../components/editProfileForm"
import Navbar from "../components/navbar"
import ProfilePic from "../components/profilePic"


class EditProfile extends Component {
    render(){
        return(
           <Fragment>
               <Navbar />
               <ProfileCard />
               <ProfilePic />
               <EditProfileForm />
           </Fragment> 
        )
    }
}

export default EditProfile