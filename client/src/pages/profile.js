import React, { Component, Fragment } from "react"
import { Helmet } from "react-helmet"
import Navbar from "../components/navbar"
import ProfileCard from "../components/profileCard"
import UserStats from "../components/userStats"
import FavHikes from "../components/favHikes"

import trails from ".././trails.json";

class Profile extends Component {

    state = {
        trails
      };
    
    render(){
        return(
           <Fragment>
               <Helmet>
                <style>{'body { background-color: #77AA99; }'}</style>
               </Helmet>
               <Navbar />
               <ProfileCard />
               <UserStats />

               {this.state.trails.map(trail => (
          <FavHikes
            name={trail.name}
          />
        ))}
              
               
           </Fragment> 
        )
    }
}

export default Profile