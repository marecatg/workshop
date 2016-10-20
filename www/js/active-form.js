function modifForm1(){
	var element = document.getElementsByClassName("form-info-1");
	for (i = 0; i < 2; i++) {
    	element[i].removeAttribute("disabled");
	}
	var btnModif = document.getElementById("btn-modif-1");
	var btnValide = document.getElementById("btn-valide-1");
	btnModif.style.display = "none";
	btnValide.style.display = "block";
}

function validForm1(){
	var element = document.getElementsByClassName("form-info-1");
	for (i = 0; i < 2; i++) {
    	element[i].addAttribute("disabled");
	}
	var btnModif = document.getElementById("btn-modif-1");
	var btnValide = document.getElementById("btn-valide-1");
	btnModif.style.display = "block";
	btnValide.style.display = "none";
}

function modifForm2(){
	var element = document.getElementsByClassName("form-info-2");
	for (i = 0; i < 7; i++) {
    	element[i].removeAttribute("disabled");
	}
	var btnModif = document.getElementById("btn-modif-2");
	var btnValide = document.getElementById("btn-valide-2");
	btnModif.style.display = "none";
	btnValide.style.display = "block";
}

function validForm2(){
	var element = document.getElementsByClassName("form-info-2");
	for (i = 0; i < 2; i++) {
    	element[i].addAttribute("disabled");
	}
	var btnModif = document.getElementById("btn-modif-2");
	var btnValide = document.getElementById("btn-valide-2");
	btnModif.style.display = "block";
	btnValide.style.display = "none";
}

function modifForm3(){
	var element = document.getElementsByClassName("form-info-3");
	for (i = 0; i < 3; i++) {
    	element[i].removeAttribute("disabled");
	}
	var btnModif = document.getElementById("btn-modif-3");
	var btnValide = document.getElementById("btn-valide-3");
	btnModif.style.display = "none";
	btnValide.style.display = "block";
}

function validForm3(){
	var element = document.getElementsByClassName("form-info-3");
	for (i = 0; i < 3; i++) {
    	element[i].addAttribute("disabled");
	}
	var btnModif = document.getElementById("btn-modif-3");
	var btnValide = document.getElementById("btn-valide-3");
	btnModif.style.display = "block";
	btnValide.style.display = "none";
}

function modifForm4(){
	var element = document.getElementsByClassName("form-info-4");
	for (i = 0; i < 7; i++) {
    	element[i].removeAttribute("disabled");
	}
	var btnModif = document.getElementById("btn-modif-4");
	var btnValide = document.getElementById("btn-valide-4");
	var btnAjout = document.getElementById("btn-ajout-4");
	btnModif.style.display = "none";
	btnValide.style.display = "block";
	btnAjout.style.display = "none";
}

function validForm4(){
	var element = document.getElementsByClassName("form-info-4");
	for (i = 0; i < 7; i++) {
    	element[i].addAttribute("disabled");
	}
	var btnModif = document.getElementById("btn-modif-4");
	var btnValide = document.getElementById("btn-valide-4");
	btnModif.style.display = "block";
	btnValide.style.display = "none";
}

function newExp(){
	var element1 = document.getElementById("exp1");
	element1.style.display = "none";
	var element2 = document.getElementById("exp2");
	element2.style.display = "block";
	var element3 = document.getElementById("btn-valide-exp");
	element3.style.display = "block";
	var element4 = document.getElementById("btn-modif-4");
	element4.style.display = "none";
}
function newExp2(){
	var element1 = document.getElementById("exp2");
	element1.style.display = "none";
	var element2 = document.getElementById("exp1");
	element2.style.display = "block";
	var element4 = document.getElementById("btn-modif-4");
	element4.style.display = "block";
}
function addNewExp(){

}


function modifForm5(){
	var element = document.getElementsByClassName("form-info-5");
	for (i = 0; i < 8; i++) {
    	element[i].removeAttribute("disabled");
	}
	var btnModif = document.getElementById("btn-modif-5");
	var btnValide = document.getElementById("btn-valide-5");
	var btnAjout = document.getElementById("btn-ajout-5");
	btnModif.style.display = "none";
	btnValide.style.display = "block";
	btnAjout.style.display = "none";
}

function validForm5(){
	var element = document.getElementsByClassName("form-info-5");
	for (i = 0; i < 8; i++) {
    	element[i].addAttribute("disabled");
	}
	var btnModif = document.getElementById("btn-modif-5");
	var btnValide = document.getElementById("btn-valide-5");
	btnModif.style.display = "block";
	btnValide.style.display = "none";
}

function newFor(){
	var element1 = document.getElementById("for1");
	element1.style.display = "none";
	var element2 = document.getElementById("for2");
	element2.style.display = "block";
	var element3 = document.getElementById("btn-valide-for");
	element3.style.display = "block";
	var element4 = document.getElementById("btn-modif-5");
	element4.style.display = "none";
}
function newFor2(){
	var element1 = document.getElementById("for2");
	element1.style.display = "none";
	var element2 = document.getElementById("for1");
	element2.style.display = "block";
	var element4 = document.getElementById("btn-modif-5");
	element4.style.display = "block";
}