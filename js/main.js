/*
 *@Purpose : Initializes the map
 *@Authors:
 *Thomas Monzein
 *Anthonny Giroud
 *Kevin Duglué
 *Rémy Kaloustian
 */

let directionsService;
let directionsDisplay;
let geocoder;
let start, end;
let fire;
let map;
function initMap() {
    directionsService = new google.maps.DirectionsService;
    directionsDisplay = new google.maps.DirectionsRenderer;
    geocoder = new google.maps.Geocoder();

    // Init map
    
    
    initialisation(locations[1]);
    //initAutocomplete();
}

function initialisation(fire) {
    console.log(fire);
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: {
            lat: 43.692474,
            lng: 7.244909
        },
        styles: [{
            featureType: "poi",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }, {
            featureType: "transit",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }]
    });
    directionsDisplay.setMap(map);
    directionsDisplay.setOptions( { suppressMarkers: true } );
    //fire = fireAddr;
    locations[1] = fire;
    
    // Transform locations to markers & Set start/end for route
    let markers = locations.forEach(location => {
        //console.log(fire);
        if (location.address) {
            geocodeAddress(geocoder, map, location);
        } else {
            // bouches d'incendie directement en lat/lng
            addMarkerInfo(map, location, fire);
                    
        }

        // Add start & end of the route
        if (location.type == 0) {
            start = location.address;
        } else if (location.type == 1) {
            end = location.address;
        }
    });

    calculateAndDisplayRoute();
}

function calculateAndDisplayRoute() {
    directionsService.route({
        origin: start,
        destination: end,
        travelMode: 'DRIVING'
    }, function (response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

function geocodeAddress(geocoder, resultsMap, location) {
    console.log(location.address);
    geocoder.geocode({
        'address': location.address
    }, function (results, status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            let image = {
                url: location.icon,
                scaledSize: new google.maps.Size(40, 40)
            };
            let marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location,
                icon: image
            });

            // Add click event to fire marker
            if (location.type == 1) {
                marker.addListener('click', showSideDisplay);
            } else {
                console.log("coucou");
                
            }
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

function addMarkerInfo(map, location, firePos) {
    var geocodeR = new google.maps.Geocoder();
    var contentInfoWindow = "";
    var service = new google.maps.DistanceMatrixService();
    //console.log(firePos.pos);
    //console.log(firePos.pos);
    service.getDistanceMatrix(
    {
        origins: [firePos.pos],
        destinations: [location.pos],
        travelMode: 'DRIVING',
    }, function(resultDistance, status) {
        //console.log(resultDistance);
        geocoder.geocode({'location': location.pos}, function(results, status) {
            //console.log(results);
            if(location.type == 3) {
                contentInfoWindow += "<h1><b>HORS SERVICE</b></h1>";
            }
            contentInfoWindow += "<p><b>Debit : </b>"+location.debit+"</p>";
            contentInfoWindow += "<p><b>Distance : </b>"+resultDistance.rows[0].elements[0].distance.text+"</p>";
            if(results)
                contentInfoWindow += "<p><b>Adresse : </b>"+results[0].formatted_address+"</p>";
            var info = new google.maps.InfoWindow({
                content: contentInfoWindow
            });
        
            let image = {
                url: location.icon,
                scaledSize: new google.maps.Size(40, 40)
            };
        
            var marker = new google.maps.Marker({
                map: map,
                position: location.pos,
                icon: image
            }); 
        
            marker.addListener('click', function() {
                info.open(map, marker);
            });
        }); 
    });  
}