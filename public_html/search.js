function findQuery() {
	var input = document.getElementById('searchInput');
	var filter = input.value.toUpperCase(); // Not case senstive
	var listOfDisposables = document.getElementById('listOfDisposables');
	var items = listOfDisposables.getElementsByTagName('li');
        
        for (var i = 0; i < items.length; i++) {
            var links = items[i].getElementsByTagName('a');
            if (links[0].innerText.toUpperCase().indexOf(filter) > -1) {
                items[i].style.display = "";
            } else {
                items[i].style.display = "none";
            }
        }
}
