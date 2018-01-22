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

    let start,end;

    let markers = locations.map(function (location, i) {
        let image = {
            url: location.icon,
            scaledSize: new google.maps.Size(40, 40)
        };

        let infowindow = new google.maps.InfoWindow({
            content: location.address
        });

        let marker = new google.maps.Marker({
            position: location.pos,
            icon: image
        });

        if(location.type == 1) {
            start = location.address;
        } else if(location.type == 2) {
            end = location.address;
        }

        marker.addListener('click', function () {
            if (location.type == 2) {
                showSideDisplay();
            } else {
                infowindow.open(map, marker);
            }

        });

        return marker;
    });

    let markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
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