/*
 *@Purpose : Initializes the map
 *@Authors:
 *Thomas Monzein
 *Anthonny Giroud
 *Kevin Duglué
 *Rémy Kaloustian
 */

function initMap() {
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

    let markers = locations.map(function (location, i) {
        let image = {
            url: location.icon,
            scaledSize: new google.maps.Size(40, 40),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0)
        };

        return new google.maps.Marker({
            position: location.pos,
            icon: image
        });
    });

    let markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}