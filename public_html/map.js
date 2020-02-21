window.addEventListener('load', getData);

function getContainers(type) {
	// Get map in JSON form
	var mapObj = getData();
	// Parse JSON and only store containers of given type
	var mapFeatures = mapObj.features;

	var mapType = mapFeatures
		

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
