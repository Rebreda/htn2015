google.maps.event.addDomListener(window, 'load', init);
	
var item1 = {
    "title": "BRAND NEW IPHONEEE OMG. BUY IT PLEASE",
    "description": "Sick new iphone 5. Like legit dope. Hit me up a text or email or something. I just want to talk 2 someome. ",
    "loc": {
        "type": "Point",
        "lat": "40.6700",
        "lon": "-73.940"
    },
    "pictures": {
        "pic1": "http://i.imgur.com/QqwIErA.jpg",
        "pic2": "http://i.imgur.com/PlbDu4e.jpg"
    },
    "filters": ["phone", "electronics"],
    "price": "$80"
};

var item2 = {
    "title": "BRAND NEW XBOX OMG",
    "description": "Sick new iphone 5. Like legit dope. Hit me up a text or email or something. I just want to talk 2 someome. ",
    "loc": {
        "type": "Point",
        "lat": "40.6700",
        "lon": "-73.940"
    },
    "pictures": {
        "pic1": "http://i.imgur.com/QqwIErA.jpg",
        "pic2": "http://i.imgur.com/PlbDu4e.jpg"
    },
    "filters": ["phone", "electronics"],
    "price": "$80"
};

function init() {
    // Basic options for a simple Google Map
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,

        //disable scrollwheel zooming        
        scrollwheel: false,
        
/*
        scrollwheel: false,
	    navigationControl: false,
	    mapTypeControl: false,
	    scaleControl: false,
	    draggable: false,
	    mapTypeId: google.maps.MapTypeId.ROADMAP
*/

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
	
	//closes if any click on blank area
    map.addListener('click', function() {
// 	    infowindow.close();
	    infoBubble.close();
    });

    // Markers
    
/*
    var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(data.loc.lat, data.loc.lat),
        map: map,
        title: 'marker',
        data: item2
//         icon: 'http://maps.google.com/mapfiles/
    });
    
*/
    
    
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6400, -73.9400),
        map: map,
        title: 'marker',
        data: item1
//         icon: 'http://maps.google.com/mapfiles/
    });
    
/*
    marker.addListener('click', function() {
	    infowindow.open(map, marker);
		});  
*/
    
    
    var contentString = '<div class="item-cont">' + '<div class="item-a">' + '<img src="' + marker.data.img + '" class="item-img"/>' + '</div>' + '<div id="item-b">' + '<div id="item-title" class="item-title">' + marker.data.title + '</div>' + '<div id="item-price" class="item-price">' + marker.data.price + '</div>' + '<div id="item-descr" class="item-descr">' + marker.data.description + '</div><button id="item-cta" class="item-cta">Go to Listing</button></div></div>';
    
    var materialString = '<div class="card">' + '<div class="image">' + '<img src="' + marker.data.pictures.pic1 + '"/>' + '<span id="item-title" class="title">' + marker.data.title + '</span>' + '</div>'  + '<div id="content">' + /* '<div id="item-price" class="item-price">' + marker.data.price + '</div>' + */ '<p id="item-descr" class="content">' + marker.data.description + '</div>' + '<div class="action"> <a href="'+ 'http://www.cnn.com/' + '">Read More</a> <a href="' + 'http://www.cnn.com/' + '">Bookmark</a></div></div>';
    
    
    var materialString = '<div class="card">' + '<div class="image">' + '<img src="' + marker.data.pictures.pic2 + '"/>' + '<span id="item-title" class="title">' + marker.data.title + '</span>' + '</div>'  + '<div id="content">' + /* '<div id="item-price" class="item-price">' + marker.data.price + '</div>' + */ '<p id="item-descr" class="content">' + marker.data.description + '</div>' + '<div class="action"> <a href="'+ 'http://www.cnn.com/' + '">Read More</a> <a href="' + 'http://www.cnn.com/' + '">Bookmark</a></div></div>';


		
	var infoBubble = new InfoBubble({
      map: map,
      content: materialString,
      position: (40.800, -73.5400),
      shadowStyle: 0,
      padding: 0,
      margin: -5,
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
      minHeight: 400,
      maxWidth: 300
    });

	marker.addListener('click', function() {
// 	    infowindow.open(map, marker);
	    infoBubble.open(map, marker);
		});
    
    infoBubble.open(map, marker); 

		
  
    
}