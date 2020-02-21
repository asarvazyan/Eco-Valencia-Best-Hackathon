//window.addEventListener('load', getData);


//var types = ['Residuos Urbanos', 'Envases Ligeros', 'Organico', 'Papel \/ Carton', 'VIDRIO'];
var types = ['Envases Ligeros', 'Organico', 'Papel \/ Carton', 'VIDRIO'];

function getContainers(type) {
	// Get map in JSON form
	var mapObj = getData();
	// Parse JSON and only store containers of given type
	var mapFeatures = mapObj.features;
	var mapType = mapFeatures.filter(function (entry) {
		return entry.properties.tipo_resid === type; 
	}); 
	console.log(mapType);
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
