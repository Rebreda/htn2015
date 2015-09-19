// Template.maps.helpers({
//     mapOptions: function () {
//         if (GoogleMaps.loaded()) {
//             return {
//                 center: new google.maps.LatLng(_lat.get(), _lon.get()),
//                 zoom: 11,

//                 // The latitude and longitude to center the map (always required)
//                 center: new google.maps.LatLng(40.6700, -73.9400), // New York

//                 // How you would like to style the map. 
//                 // This is where you would paste any style found on Snazzy Maps.
//                 styles: [{
//                     "featureType": "landscape.man_made",
//                     "elementType": "geometry",
//                     "stylers": [{
//                         "color": "#f7f1df"
//                         }]
//                     }, {
//                     "featureType": "landscape.natural",
//                     "elementType": "geometry",
//                     "stylers": [{
//                         "color": "#d0e3b4"
//                         }]
//                     }, {
//                     "featureType": "landscape.natural.terrain",
//                     "elementType": "geometry",
//                     "stylers": [{
//                         "visibility": "off"
//                         }]
//                     }, {
//                     "featureType": "poi",
//                     "elementType": "labels",
//                     "stylers": [{
//                         "visibility": "off"
//                         }]
//                     }, {
//                     "featureType": "poi.business",
//                     "elementType": "all",
//                     "stylers": [{
//                         "visibility": "off"
//                         }]
//                     }, {
//                     "featureType": "poi.medical",
//                     "elementType": "geometry",
//                     "stylers": [{
//                         "color": "#fbd3da"
//                         }]
//                     }, {
//                     "featureType": "poi.park",
//                     "elementType": "geometry",
//                     "stylers": [{
//                         "color": "#bde6ab"
//                         }]
//                     }, {
//                     "featureType": "road",
//                     "elementType": "geometry.stroke",
//                     "stylers": [{
//                         "visibility": "off"
//                         }]
//                     }, {
//                     "featureType": "road",
//                     "elementType": "labels",
//                     "stylers": [{
//                         "visibility": "on"
//                         }]
//                     }, {
//                     "featureType": "road.highway",
//                     "elementType": "geometry.fill",
//                     "stylers": [{
//                         "color": "#ffe15f"
//                         }]
//                     }, {
//                     "featureType": "road.highway",
//                     "elementType": "geometry.stroke",
//                     "stylers": [{
//                         "color": "#efd151"
//                         }]
//                     }, {
//                     "featureType": "road.arterial",
//                     "elementType": "geometry.fill",
//                     "stylers": [{
//                         "color": "#ffffff"
//                         }]
//                     }, {
//                     "featureType": "road.local",
//                     "elementType": "geometry.fill",
//                     "stylers": [{
//                         "color": "black"
//                         }]
//                     }, {
//                     "featureType": "transit.station.airport",
//                     "elementType": "geometry.fill",
//                     "stylers": [{
//                         "color": "#cfb2db"
//                         }]
//                     }, {
//                     "featureType": "water",
//                     "elementType": "geometry",
//                     "stylers": [{
//                         "color": "#a2daf2"
//                         }]
//                     }],
//                 scrollwheel: false
//             };
//         }
//     }
// });

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}


function showError(error) {
    switch (error.code) {
    case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.");
        break;
    case error.POSITION_UNAVAILABLE:
        console.log("Location information is unavailable.");
        break;
    case error.TIMEOUT:
        console.log("The request to get user location timed out.");
        break;
    case error.UNKNOWN_ERROR:
        console.log("An unknown error occurred.");
        break;
    }
}

function showPosition(position) {
    _lat.set(position.coords.latitude);
    _lon.set(position.coords.longitude);
}

_lat = {
    current: 0,
    dep: new Deps.Dependency,
    get: function () {
        this.dep.depend();

        if (this.current === 0) {
            getLocation();
        }

        return this.current;
    },
    set: function (value) {
        this.current = value;
        this.dep.changed();
        Deps.flush();
        return this.current;
    }
};

_lon = {
    current: 0,
    dep: new Deps.Dependency,
    get: function () {
        this.dep.depend();

        if (this.current === 0) {
            getLocation();
        }

        return this.current;
    },
    set: function (value) {
        this.current = value;
        this.dep.changed();
        Deps.flush();
        return this.current;
    }
};

// Template.body.onCreated(function() {
//   // We can use the `ready` callback to interact with the map API once the map is ready.
//   GoogleMaps.ready('exampleMap', function(map) {
//     // Add a marker to the map once it's ready
//     var marker = new google.maps.Marker({
//       position: map.options.center,
//       map: map.instance
//     });
//   });
// });

// //Template.mapPostsList.rendered = function () {
// //    var mapOptions = {
// //        zoom: 12,
// //        mapTypeId: google.maps.MapTypeId.ROADMAP
// //    };
// //
// //    map = new google.maps.Map(document.getElementById("map-canvas"),
// //        mapOptions);
// //
// //    var p2 = Session.get('location');
// //
// //    map.setCenter(new google.maps.LatLng(p2.lat, p2.lng));
// //    var marker = new google.maps.Marker({
// //        position: new google.maps.LatLng(p2.lat, p2.lng),
// //        title: 'Meine Position',
// //        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
// //    });
// //    marker.setMap(map);
// //
// //    Session.set('map', true);
// //};


if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load();
  });

  Template.maps.helpers({
    exampleMapOptions: function() {
      // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
        return {
            center: new google.maps.LatLng(_lat.get(), _lon.get()),
            zoom: 11,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(40.6700, -73.9400), // New York

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
                }],
                scrollwheel: false
            };
        }
    }
  });

  Template.maps.onCreated(function() {
    // We can use the `ready` callback to interact with the map API once the map is ready.
    GoogleMaps.ready('exampleMap', function(map) {
      // Add a marker to the map once it's ready
      var marker = new google.maps.Marker({
        position: map.options.center,
        map: map.instance
      });
    });
  });
}