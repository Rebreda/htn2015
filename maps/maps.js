// variables



// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

var list01 = {
	'name': 'iPhone 5S 64GB',
	'price': '$80',
	'desc': 'BNIB Proin magna mauris, fringilla at. Ut volutpat ut risus non vulputate. Donec luctus erat dolor, sit amet scelerisque purus blandit sit amet.',
	'img': 'img/iphone.png',
	'postal': 'N2G1E6',
	'city': 'Mississauga',
	'rating': 4.4,
	'postDate':1442646904,
	'url': '/1.html'
	};
	
var item = {
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
	
console.log(list01.name);

/*




function listing(list01) {
	return '<div id="htncontent">'+
      '<div id="htnsiteNotice">'+
      '</div>'+
      '<h1 id="htnfirstHeading" class="htnfirstHeading">'+list01.name+'</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>');
};
*/



function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
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
        styles: [{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
	
	//closes if any click on blank area
    map.addListener('click', function() {
	    infowindow.close();
    });

    // Let's also add a marker while we're at it
    
    
    
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        title: 'marker',
        data: item
//         icon: 'http://maps.google.com/mapfiles/
    });
    
    marker.addListener('click', function() {
	    infowindow.open(map, marker);
		});  
    
    
    var contentString = '<div class="item-cont">' + '<div class="item-a">' + '<img src="' + marker.data.img + '" class="item-img"/>' + '</div>' + '<div id="item-b">' + '<div id="item-title" class="item-title">' + marker.data.title + '</div>' + '<div id="item-price" class="item-price">' + marker.data.price + '</div>' + '<div id="item-descr" class="item-descr">' + marker.data.description + '</div><button id="item-cta" class="item-cta">Go to Listing</button></div></div>';
    
    var materialString = '<div class="card">' + '<div class="image">' + '<img src="' + marker.data.pictures.pic1 + '"/>' + '<span id="item-title" class="title">' + marker.data.title + '</span>' + '</div>'  + '<div id="content">' + /* '<div id="item-price" class="item-price">' + marker.data.price + '</div>' + */ '<p id="item-descr" class="content">' + marker.data.description + '</div>' + '<div class="action"> <a href="'+ 'http://www.cnn.com/' + '">Read More</a> <a href="' + 'http://www.cnn.com/' + '">Bookmark</a></div></div>';
	 
  	var infowindow = new google.maps.InfoWindow({
	    content: materialString,
	    maxWidth: 500
		});
			
	
		
/*
	Document.querySelector(#item-cta).addListener('click', goToItem(marker.data.url) {
		infowindow.close();
			
	})
*/
		
		
		
		
		
		
	

	    
    
    
    
}
