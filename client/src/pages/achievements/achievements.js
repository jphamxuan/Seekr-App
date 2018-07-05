import { Dropdown, Button, NavItem} from "react-materialize"

import React, {Component} from "react"
import bear from '../../images/achievements/Bear.png'
import backpack from '../../images/achievements/Backpack.png'
import bearpaw from '../../images/achievements/BearPaw.png'
import bike from '../../images/achievements/Bike.png'
import binoculars from '../../images/achievements/Binoculars.png'
import compass from '../../images/achievements/compass.png'
// import fire from '../../images/achievements/Fire.png'
// import firstaid from '../../images/achievements/FirstAid.png'
// import flashlight from '../../images/achievements/Flashlight.png'
// import helmetbackpack from '../../images/achievements/Helmet_Backpack.png'
// import helmet from '../../images/achievements/Helmet.png'
// import hikingboot from '../../images/achievements/HikingBoot.png'
// import hotdogstick from '../../images/achievements/Hotdog_Stick.png'
// import kayak from '../../images/achievements/Kayak.png'
// import map from '../../images/achievements/Map.png'
// import plateandfork from '../../images/achievements/PlateandFork.png'
// import rope from '../../images/achievements/Rope.png'
// import swissarmyknife from '../../images/achievements/SwissArmyKnife.png'
// import thermocoffee from '../../images/achievements/ThermoCoffee.png'
// import watch from '../../images/achievements/Watch.png'
import "./achievements.css"
class Achievements extends Component{
    //psuedo code//
    //import api from utils folder
    //then the api needs to have a function to call the server to query the data base for badges info related to the currently signed in user (think req.params.id)
    //componentdid(inheriting what the react app has)
    //call the api to get badges data call .then this.set.state update state to badges data
    // after state has been updated from our data base call through api, we will pass in the earned badges via this.state.earnedBadges using a forloop
    //available badges will be handled in a very similiar way 

    //team mates to do's
    //create the model in mongo
    //create controller methods for routers
    //create methods in the front end utils/api to call for badges
    // might want a seperate routers folder to call on controller functions (optional)
    //the mern books activity is a great reference for setting this all up
    
    constructor(props){
        super(props)
        this.state = {
            user: "",
            earnedBadges: [ 
                { 
                    name: "Killing it",
                    img: bear,
                    color: "orange",
                    points: 20 
                },
                {  
                    name: "Easy hike", 
                    img: backpack,
                    color: "orange",
                    points: 20 
                }, 
                {
                     name: "A",
                     img: bearpaw,
                     color: "orange",
                     points: 20 
                 },
                 {
                      name: "B",
                      img: bike,
                      color: "orange",
                      points: 20 
                 },  
                 { 
                     name: "C",
                     img:binoculars,
                     color: "orange",
                     points: 20 
                } ],
            availableBadges: [  {
                name: "A",
                img: bearpaw,
                color: "orange",
                points: 20 
            },
            {
                 name: "B",
                 img: compass,
                 color: "orange",
                 points: 20 
            } ],
            toggle: true
        }
        
    }
    
    

   toggle(){
      this.setState({toggle: !this.state.toggle})
   }




    render (){
        return <div> 
            <div style={{padding:"20px", height: "300px"}}>
            <div style ={{margin: "0 auto", textAlign:"center", borderRadius:"100%", height:"300px", width:"300px", backgroundColor:"blue"}}>
                {/* <img src={{}}/> */}
            </div>   
            </div>
            <div style={{marginBottom: "50px", marginTop: "50px", textAlign: "center", }}>
                <Dropdown trigger={
                    <Button>Achievements</Button>
                }>
                <NavItem onClick={() => this.toggle()}>Earned Badges</NavItem>
                <NavItem onClick={() => this.toggle()}>Available Badges</NavItem>
                </Dropdown>
            </div>
            <div >
               
                { this.state.toggle ? <div style={{display: "grid", gridGap: "10px",  gridTemplateColumns: "repeat(3, 1fr)"}}>
                    {this.state.earnedBadges.map((badge, index) => {
                        return (
                            <div style={{
                                alignSelf: "center",
                                justifySelf: "center"}}>
                                <div style={{width: "300px", boxShadow: "5px 5px 25px 0px rgba(46,61,73,0.2)", borderRadius: "0.375rem", textAlign: "center", padding: "15px"}}>
                                <div style={{width: "95px", height: "95px", backgroundColor: badge.color, margin:"0 auto", borderRadius:"100%"}}>
                                    {/* <img  className="size" src={badge.img}/> */}
                                </div>
                                <p>{badge.name}</p>
                                <p>{badge.points}</p>
                                </div>
                            </div>
                       )
                    })}
                </div> : <div style={{display: "grid", gridGap: "10px",  gridTemplateColumns: "repeat(3, 1fr)"}}> {this.state.availableBadges.map((badge, index) => {
                        return (<div style={{
                                alignSelf: "center",
                                justifySelf: "center"}}>
                                <div style={{width: "300px", boxShadow: "5px 5px 25px 0px rgba(46,61,73,0.2)", borderRadius: "0.375rem", textAlign: "center", padding: "15px"}}>
                                <div style={{width: "95px", height: "95px", backgroundColor: badge.color, margin:"0 auto", borderRadius:"100%"}}>
                                    {/* <img  className="size" src={badge.img}/> */}
                                </div>
                                <p>{badge.name}</p>
                                <p>{badge.points}</p>
                                </div>
                            </div>)
                    })}</div> }
            </div>
            {/*
            <img className="size" src={backpack}/>
            <img className="size" src={bear}/>
            <img className= "size" src={bearpaw}/>
            <img className="size" src={bike}/>
            <img className="size" src={binoculars}/>
            <img className= "size" src={compass}/>
            <img className="size" src={fire}/>
            <img className= "size"src={firstaid}/>
            <img className= "size"src={flashlight}/>
            <img className="size"src={helmetbackpack}/>
            <img className="size"src={helmet}/>
            <img className="size"src={hikingboot}/>
            <img className="size"src={hotdogstick}/>
            <img className="size"src={kayak}/>
            <img className="size"src={map}/> 
            <img className="size"src={plateandfork}/>
            <img className="size"src={rope}/>
            <img className="size"src={swissarmyknife}/>
            <img className="size"src={thermocoffee}/>
            <img className="size"src={watch}/>*/}
            </div>

    }
      
    
}


export default Achievements