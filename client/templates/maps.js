Template.maps.helpers({
    mapOptions: function () {
        if (GoogleMaps.loaded()) {
            return {
                center: new google.maps.LatLng(_lat.get(), _lon.get()),
                zoom: 8
            };
        }
    }
});

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

//Template.mapPostsList.rendered = function () {
//    var mapOptions = {
//        zoom: 12,
//        mapTypeId: google.maps.MapTypeId.ROADMAP
//    };
//
//    map = new google.maps.Map(document.getElementById("map-canvas"),
//        mapOptions);
//
//    var p2 = Session.get('location');
//
//    map.setCenter(new google.maps.LatLng(p2.lat, p2.lng));
//    var marker = new google.maps.Marker({
//        position: new google.maps.LatLng(p2.lat, p2.lng),
//        title: 'Meine Position',
//        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
//    });
//    marker.setMap(map);
//
//    Session.set('map', true);
//};