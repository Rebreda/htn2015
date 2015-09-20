var eData = [{
    "title": "iPhone 5c - Various Colours",
    "description": "Perfect for any novice tech guru. This is the must have, and its cheap.",
    "loc": {
        "lat": 43.434751,
        "lon": -80.538230
    },
    "pictures": {
        "pic1": "https://s16-us2.ixquick.com/cgi-bin/serveimage?url=http%3A%2F%2Fwww.optimaitalia.com%2Fblog%2Fwp-content%2Fuploads%2F2012%2F12%2FiPhone-56.jpg&sp=bf22839b71d2a8edb58c33b483bed535",
        "pic2": "http://i.imgur.com/PlbDu4e.jpg"
    },
    "filters": ["phone", "electronics"],
    "price": "$285",
    "phone": "(234) 567 8921",
    "name": "Andrew Hou",
    "email": "myEmail@losoc.co"
}, {
    "title": "3TB HDD - Refurbished.",
    "description": "Stores thousands of images and songs. Selling like hot cakes so grab one fast. ",
    "loc": {
        "type": "Point",
        "lat": 43.464616,
        "lon": -80.538910
    },
    "pictures": {
        "pic1": "http://i.ebayimg.com/00/s/ODAwWDU5NA==/z/oDoAAOSwEetV~hWG/$_27.JPG",
        "pic2": "http://i.imgur.com/PlbDu4e.jpg"
    },
    "filters": ["phone", "electronics"],
    "price": "$90",
    "phone": "(234) 567 8921",
    "name": "Andrew Hou",
    "email": "myEmail@losoc.co"
}, {
    "title": "Anroid Nexus 5.",
    "description": "Sick new iphone 5. Like legit dope. Hit me up a text or email or something. I just want to talk 2 someome. ",
    "loc": {
        "lat": 43.454555,
        "lon": -80.538130
    },
    "pictures": {
        "pic1": "https://placeholdit.imgix.net/~text?txtsize=33&txt=temp&w=100&h=100",
        "pic2": "http://i.imgur.com/PlbDu4e.jpg"
    },
    "filters": ["phone", "electronics"],
    "price": "$80",
    "phone": "(234) 567 8921",
    "name": "Andrew Hou",
    "email": "myEmail@losoc.co"
}, {
    "title": "Intel Powered Dell",
    "description": "An easy buy, especially since the price is the lowest ever seen.",
    "loc": {
        "lat": 43.474751,
        "lon": -80.538230
    },
    "pictures": {
        "pic1": "http://i.ebayimg.com/00/s/MzAwWDMwMA==/z/fpkAAOSwEetV~hO7/$_27.JPG",
        "pic2": "http://i.imgur.com/PlbDu4e.jpg"
    },
    "filters": ["phone", "electronics"],
    "price": "$80",
    "phone": "(234) 567 8921",
    "name": "Andrew Hou",
    "email": "myEmail@losoc.co"
}, {
    "title": "New Toaster. BNIB",
    "description": " New toaster, just like title said.. ",
    "loc": {
        "lat": 43.475751,
        "lon": -80.548230
    },
    "pictures": {
        "pic1": "https://placeholdit.imgix.net/~text?txtsize=33&txt=temp&w=100&h=100",
        "pic2": "http://i.imgur.com/PlbDu4e.jpg"
    },
    "filters": ["phone", "electronics"],
    "price": "$80",
    "phone": "(234) 567 8921",
    "name": "Andrew Hou",
    "email": "myEmail@losoc.co"
}, {
    "title": "Brand New In Box - iPhone 5s.",
    "description": "A slick looking, great feeling power house of a phone. Contact  for more details.",
    "loc": {
        "lat": 43.424751,
        "lon": -80.518230
    },
    "pictures": {
        "pic1": "https://placeholdit.imgix.net/~text?txtsize=33&txt=temp&w=100&h=100",
        "pic2": "http://i.imgur.com/PlbDu4e.jpg"
    },
    "filters": ["phone", "electronics"],
    "price": "$80",
    "phone": "(234) 567 8921",
    "name": "Andrew Hou",
    "email": "myEmail@losoc.co"
}]

Template.maps.prods = function () {
    return eData;
}

Template.maps.rendered = function () {
    // When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);
    //    init();
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
            center: new google.maps.LatLng(43.474973, -80.546381), // New York

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
            var materialString = '<div class="card">' + '<div class="image">' + '<div id="item-title" class="title">' + eData[i].title + '</div>' + '</div>' + '<div class="action"> <a href="' + 'http://www.cnn.com/' + '">Go To Item</a> | <a href="' + '/profile' + '">Seller Data</a></div></div>';
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
                backgroundColor: '#fff',
                minHeight: 50,
                maxHeight: 50,
                hideCloseButton: true,
                maxWidth: 300
            });

            marker.addListener('click', function () {
                marker.info.open(map, marker);
            });

        }
        map.addListener('click', function () {
            // 	    infowindow.close();
            marker.info.close();
        });

    }
}

//location.reload();