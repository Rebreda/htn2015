var eData = [{
    "title": "Asus Zenbook UX501",
    "description": "An easy buy, especially since the price is the lowest ever seen.",
    "loc": {
        "lat": 43.474751,
        "lon": -80.538230
    },
    "pictures": {
        "pic1": "http://www.asus.com/websites/global/News/CxWHio67gM0oESl7/ASUS-Zenbook-Pro-UX501_2.jpg",
        "pic2": "http://i.imgur.com/PlbDu4e.jpg"
    },
    "filters": ["phone", "electronics"],
    "price": "$1000",
    "phone": "(905) 555 5555",
    "name": "Andrew Hou",
    "email": "myEmail@losoc.co"
}]
Template.location.rendered = function () {
    // When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);

    var dd = eData;
    console.log(eData);

    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 16,
            disableDefaultUI: true,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(43.474751, -80.538230), // New York

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{
                "featureType": "landscape.man_made",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f7f1df"
                }]
            }, {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#d0e3b4"
                }]
            }, {
                "featureType": "landscape.natural.terrain",
                "elementType": "geometry",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "poi.business",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "poi.medical",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#fbd3da"
                }]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#bde6ab"
                }]
            }, {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "on"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffe15f"
                }]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                    "color": "#efd151"
                }]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#ffffff"
                }]
            }, {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "black"
                }]
            }, {
                "featureType": "transit.station.airport",
                "elementType": "geometry.fill",
                "stylers": [{
                    "color": "#cfb2db"
                }]
            }, {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#a2daf2"
                }]
            }]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');
        console.log(document.getElementById('map'));
        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        //closes if any click on blank area

        // Let's also add a marker while we're at it
        for (var i = 0; i < eData.length; i++) {
            console.log(eData.length);
            var materialString = '<div class="card">' + '<div class="image">' + '<span id="item-title" class="title">' + eData[i].title + '</span>' + '</div>' + '<div class="action"> <a href="' + 'http://www.cnn.com/' + '">Go To Item</a> <a href="' + '/profile' + '">Seller Data</a></div></div>';
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(eData[i].loc.lat, eData[i].loc.lon),
                map: map,
                title: eData[i].title,
                data: materialString,
                icon: "http://i.imgur.com/22vv42W.png"
            });
            marker.info = new InfoBubble({
                map: map,
                content: materialString,
                position: new google.maps.LatLng(eData[i].loc.lat, eData[i].loc.lon),
                shadowStyle: 0,
                padding: 0,
                margin: 0,
                backgroundColor: 'rgba(57,57,57, 0.0)',
                borderRadius: 5,
                arrowSize: 10,
                borderWidth: 0,
                borderColor: '#2c2c2c',
                disableAutoPan: true,
                hideCloseButton: true,
                arrowPosition: 50,
                backgroundClassName: 'transparent',
                arrowStyle: 0,
                arrowSize: 15,
                minHeight: 250,
                maxHeight: 400,
                maxWidth: 300,
            });

            marker.addListener('click', function () {
                marker.info.open(map, marker);
            });

        }
        map.addListener('click', function () {
            //      infowindow.close();
            marker.info.close();
        });

    }
}

Template.location.prods = function () {
    return eData;
}