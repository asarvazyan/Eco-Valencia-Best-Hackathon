//window.addEventListener('load', setUpMap);




//var types = ['Residuos Urbanos', 'Envases Ligeros', 'Organico', 'Papel \/ Carton', 'VIDRIO'];
var types = ['Envases Ligeros', 'Organico', 'Papel \/ Carton', 'VIDRIO'];

function setUpMap() {

	var map = L.map('map').setView([39.74739, -105], 13);
	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);
	L.geoJSON(getContainers(types[0])).addTo(map);
}

function getContainers(type) {
	// Get map in JSON form
	var mapObj = getData();
	// Parse JSON and only store containers of given type
	var mapFeatures = mapObj.features;
	var mapType = mapFeatures.filter(function (entry) {
		return entry.properties.tipo_resid === type; 
	}); 
//	console.log(mapType);
	return mapType;
	/*	console.log(mapFeatures[0].properties.tipo_resid);
	for (var i = 0; i < mapFeatures.length; i++) {
		if (mapFeatures[i].properties.tipo_resid == type) {
		
			//console.log(mapFeatures[i].properties);
			// Add to resulting GeoJSON object

			mapType.append(mapFeatures[i]);
		}
	}	
		
	*/
}


function getData() {
	var mapObj = null;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			mapObj = JSON.parse(this.responseText);
			//document.getElementById("mapa").innerHTML = mapObj.features;
			//console.log(mapObj.features);
		}
	};
	xmlhttp.open('GET', 'http://mapas.valencia.es/lanzadera/opendata/res_contenedor/JSON', false);
	xmlhttp.send();
	return mapObj;
}
