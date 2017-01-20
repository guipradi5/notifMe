google.maps.event.addDomListener(window, 'load', getLocation);

function getLocation(){
	navigator.geolocation.getCurrentPosition(onSuccess, onError, { timeout: 15000 });
    
    
}

google.maps.event.addListenerOnce(map, 'idle', function(){
		getLocation2();
});

function onSuccess(position) {
document.getElementById("ERROR").innerHTML = "";
	console.log("refresh");	
    var lat=position.coords.latitude;
    var lang=position.coords.longitude;

    //Google Maps
    var myLatlng = new google.maps.LatLng(lat,lang);
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	mapOptions = {zoom: 15,center: myLatlng};
    var marker = new google.maps.Marker({position: myLatlng,map: map});

	setTimeout(getLocation2, 5000);

}

function getLocation2() {
	navigator.geolocation.getCurrentPosition(update, onError,{ timeout: 15000 });
	}
function update(position) {
document.getElementById("ERROR").innerHTML = "";
	console.log("refresh");	
    var lat=position.coords.latitude;
    var lang=position.coords.longitude;

    //Google Maps
    var myLatlng = new google.maps.LatLng(lat,lang);
	var newcenter = map.getCenter();
	mapOptions = {zoom: 15,center: myLatlng};
	if(newcenter != undefined)mapOptions = {zoom: map.getZoom(),center: newcenter};
	
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	
	var marker = new google.maps.Marker({position: myLatlng,map: map});		
	
	if(selection == 1){
	places(myLatlng, radius, type);
	}
	
	setTimeout(getLocation2, 7000);


}

function places(myLatlng,b,c){

infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: myLatlng,
          radius: b,
          type: [c]
        }, callback);
      }


 function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
          }
        }
      }

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var markers = new google.maps.Marker({
    map: map,
	//icon: icons[feature.type].icon,
	icon: 'place.png',
    position: place.geometry.location
  });	  
	  
var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
var icons = {
  parking: {
	icon: iconBase + 'parking_lot_maps.png'
  },
  library: {
	icon: iconBase + 'library_maps.png'
  },
  info: {
	icon: iconBase + 'info-i_maps.png'
  }
};
	  
	  


google.maps.event.addListener(markers, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}

	  
function onError(error) {
    console.log('code: ' + error.code + '\n' +'message: ' + error.message + '\n');
	document.getElementById("ERROR").innerHTML = "An error ocurred, restarting map";
	setTimeout(getLocation, 10000)
}



		
	function updateradius(a){
		radius	= parseInt($("#radius").val());
		if(a==1){
		$("#activate").val("Parar de buscar");
		$( "#activate" ).attr( "onclick" ,"updateradius(0)");
		selection = 1;
		}
		if(a==0){
		$("#activate").val("Buscar sitios");
		$( "#activate" ).attr( "onclick" ,"updateradius(1)");
		selection = 0;
		}
	}
	



