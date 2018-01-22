/*
 *@Purpose : Initializes the map
 *@Authors:
 *Thomas Monzein
 *Anthonny Giroud
 *Kevin Duglué
 *Rémy Kaloustian
 */

function initMap() {
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;
    let geocoder = new google.maps.Geocoder();

    // Init map
    let map = new google.maps.Map(document.getElementById('map'), {
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

    let start, end;

    // Transform locations to markers & Set start/end for route
    let markers = locations.forEach(location => {
        let infowindow = new google.maps.InfoWindow({
            content: location.address
        });

        if (location.address) {
            geocodeAddress(geocoder, map, location);
        } else {
            // bouches d'incendie directement en lat/lng
            let image = {
                url: location.icon,
                scaledSize: new google.maps.Size(40, 40)
            };
            marker = new google.maps.Marker({
                map: map,
                position: location.pos,
                icon: image
            });            
        }

        // Add start & end of the route
        if (location.type == 0) {
            start = location.address;
        } else if (location.type == 1) {
            end = location.address;
        }
    });

    calculateAndDisplayRoute(directionsService, directionsDisplay, start, end);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay, start, end) {
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
            }
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}