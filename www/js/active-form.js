function modifForm1(){
	var element = document.getElementsByClassName("form-info-1");
	for (i = 0; i < 2; i++) {
    	element[i].removeAttribute("disabled");
	}
}