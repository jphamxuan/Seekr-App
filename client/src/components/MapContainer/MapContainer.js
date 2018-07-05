import React, { Component} from "react"
import "./MapContainer.css";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Row, Col, Input, Button, Card, CardTitle } from 'react-materialize'
import { API, USER } from "../../utils";
// import SaveButton from "../SaveButton"
// import DeleteButton from "../DeleteButton"



export class MapContainer extends Component {
    state ={
        results: [],
        userAc: [],
        isLoggedIn: sessionStorage.isLoggedIn,
        userId: sessionStorage.userId,
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        lat: 33.87844665140749, 
        lng: -117.80288169790663,
        position: null,
        addressNum: "",
        city:"",
        state: ""
    }
    componentDidMount() {
        this.showCurrentPos()
        this.loadUser(this.state.userId)
        this.searchTrails(this.state.lat, this.state.lng)
    }
    loadUser = (id) => {
        USER.getUser(id)
            .then(res => this.setState({ userAc: res.data })
            )
            .catch(err => console.log(err));
    };
    showCurrentPos = () => { 
        let lat
        let lng
        navigator.geolocation.getCurrentPosition((position) => {

                lat= position.coords.latitude
                lng= position.coords.longitude
            
            return this.setState({ lat: lat, lng: lng })
           
        })
        
    }
    searchTrails = (lat,lng) => {
        API.searchTrails(lat,lng)
            .then(res => this.setState({ results: res.data.trails })
            )
            .catch(err => console.log(err));
    }
    onInfoWindowClose =()=> {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        })
    }
    mapClicked =(mapProps, map, event)=> {
        this.setState({
            lat: event.latLng.lat(), lng: event.latLng.lng()
        })
        this.searchTrails(this.state.lat, this.state.lng)
       
    }
    onMarkerClick = (props, marker, e)=> {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }
    saveTrail = (trail) =>{
        API.saveTrail(trail)
            .then(res => {console.log(res.data)})
            .catch(err => console.log(err));
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    codeAddress = event => {
        event.preventDefault();
        if (this.state.addressNum) {
           let address = `${this.state.addressNum},+${this.state.city},+${this.state.state}`
            const formattedAddress = address.split(" ").join("+")
            API.searchAddress(formattedAddress)
                .then(res => {this.setState({ lat: res.data.results[0].geometry.location.lat,
                                            lng: res.data.results[0].geometry.location.lng})
                            console.log(res.data)
                })
                .catch(err => console.log(err));
        }
    }
   
    render() {
        const style = {
            width: '64vw',
            height: '100vh'
        }

        return (
            <Row>
                <Col s={12}>
                <Input 
                    placeholder="Address Number" 
                    s={5}
                    type="text"
                    value={this.state.addressNum}
                    name = "addressNum"
                    onChange={this.handleInputChange}
                     />
                <Input
                    placeholder="City"
                    s={2}
                    type="text"
                    value={this.state.city}
                    name="city"
                    onChange={this.handleInputChange}
                />
                <Input
                    placeholder="State"
                    s={2}
                    type="text"
                    value={this.state.state}
                    name="state"
                    onChange={this.handleInputChange}
                />
                <Button className='red' waves='light' 
                        onClick={this.codeAddress}
                        disabled={!this.state.addressNum}>Search</Button>
                </Col>
                <Col s={8}>
                    {this.state.results.length? (
                    <Map style={style}
                        google={this.props.google} 
                        zoom={8}
                        onClick={this.mapClicked}
                        centerAroundCurrentLocation={true}
                        center ={ {lat:this.state.lat, lng: this.state.lng}}
                        >
                        
                        {this.state.results.map(trail => {
                            
                            return (
                            <Marker 
                                    key={trail.id}
                                    onClick={this.onMarkerClick}
                                    name={trail.name}
                                    image={trail.imgMedium}
                                    summary={trail.summary}
                                    location={trail.location}
                                    length={trail.length}
                                    stars={trail.stars}
                                    conditionStatus={trail.conditionStatus}
                                    saved={this.saveTrail({
                                        name: trail.name,
                                        link: trail.url,
                                        image: trail.imgMedium,
                                        summary: trail.summary,
                                        location: trail.location,
                                        length: trail.length,
                                        stars: trail.stars,
                                        conditionStatus: trail.conditionStatus
                                        })}
                                    position={{ lat: trail.latitude, lng: trail.longitude }}>
                                    
                            </Marker>
                            )})}
                        <Marker
                            onClick={this.onMarkerClick}
                            name={'Your current location'}
                            position={{lat:this.state.lat, lng: this.state.lng}} />
                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}>
                            <Card header={<CardTitle reveal image={this.state.selectedPlace.image} waves='light'/>}
                                title={this.state.selectedPlace.name}
                                reveal={<p>{this.state.selectedPlace.summary}</p>}>
                                
                                <p><a>This is a link</a></p>
                                <p>This trail is saved</p>
                            </Card>
                        </InfoWindow>
                    
                    </Map>
            ) : (
                    <h3>There is no trails near by your location</h3>
            )}
                </Col>
            </Row>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'
})(MapContainer)