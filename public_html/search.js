function findQuery() {
	var input = document.getElementById('searchInput');
	var filter = input.value.toUpperCase(); // Not case senstive
	var listOfDisposables = document.getElementById('listOfDisposables');
	var items = listOfDisposables.getElementsByTabName('li');

	// Only show those that match the search query
	for (i = 0; i < items.length; i++) {
		var link = items[i].getElementsByTagName("a");
		var text = link.textContent || link.innerText;

		// Search for filter and show results 
		if (text.toUpperCase().indexOf(filter) > -1) {
			items[i].style.display = "";
		}
		else {
			items[i].style.display = "none";
		}
	}
}
