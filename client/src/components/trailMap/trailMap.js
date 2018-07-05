import React, { Component, Fragment } from 'react'
import "../trailMap/trailMap.css"
class currentTrail extends Component {
    $(document).ready(function() {

        $("#end").hide()


        initLocationProcedure();
    })
        
        function initLocationProcedure() {
    map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 17
    });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayAndWatch, locError, {
            enableHighAccuracy: true,
            timeout: 60000,
            maximumAge: 0

        });
    } else {
        alert("Your phone does not support the Geolocation API");
    }
}

function locError(error) {
    alert("The current position could not be found!");
}

function displayAndWatch(position) {
    setUserLocation(position);
    watchCurrentPosition();
}

function setUserLocation(pos) {
    userLocation = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
        title: "You are here",
        icon: './newflag.png'
    });
    map.panTo(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
}

function watchCurrentPosition() {
    var positionTimer = navigator.geolocation.watchPosition(function (position) {
        setMarkerPosition(userLocation, position);
        map.panTo(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
    });
}

function setMarkerPosition(marker, position) {
    marker.setPosition(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));

    var total

    var lat1 = position.coords.latitude
    var lon1 = position.coords.longitude
    var lat2 = position.coords.latitude
    var lon2 = position.coords.longitude

    $("#begin").on("click", function () {
        $("#end").show()
        $("#begin").hide()

    })

    $("#end").on("click", function () {

    })


    function distance(lat1, lon1, lat2, lon2) {
        var p = 0.017453292519943295;    // Math.PI / 180
        var c = Math.cos;
        var a = 0.5 - c((lat2 - lat1) * p) / 2 +
            c(lat1 * p) * c(lat2 * p) *
            (1 - c((lon2 - lon1) * p)) / 2;

        return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
    }

    distance(lat1, lon1, lat2, lon2)

}

https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=40.6655101,-73.89188969999998&destinations=40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626%7C40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626&key=AIzaSyAhyAn_HuNcl-1ifUQoLn9ixAHWo74QWp8

render(){
    return (
        <Fragment>
            <div id="map-canvas"></div>
            <script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyAhyAn_HuNcl-1ifUQoLn9ixAHWo74QWp8"></script>
            <script
                src="https://code.jquery.com/jquery-3.3.1.js"
                integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
                crossorigin="anonymous"></script>
            <button id="begin">Start Hike</button>
            <button id="end">End Hike</button>
        </Fragment>
    )
}
}