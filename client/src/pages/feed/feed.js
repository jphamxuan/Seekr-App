import React, { Component, Fragment } from "react"
import { Helmet } from "react-helmet"
import FeedCard from "../../components/feedCard"
import Navbar from "../../components/navbar"

class Feed extends Component {
    render(){
        const feedCSS = {
            background: {
                backgroundColor: "#997733"
            }
        }
        return(
           <Fragment>
               <Helmet>
                   <style>{'body { background-color: #77AA99; }'}</style>
               </Helmet>
               <Navbar />
               <FeedCard />

            
               
           </Fragment> 
        )
    }
}

export default Feed