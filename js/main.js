/*
*@Purpose : Initializes the map
*@Authors:
*Thomas Monzein
*Anthonny Giroud
*Kevin Duglué
*Rémy Kaloustian
*/

function initMap() {
    var customStyled = [{
        featureType: "all",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: {
            lat: 43.692474,
            lng: 7.244909
        }
    });

    var markers = locations.map(function (location, i) {
        var image = {
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

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}