function moveMouse(){
	var mouse = document.mouseField.move.value;

	if(mouse == "up"){
		document.getElementById("mouse").style.margin = "50px";
		mouse = "";
		document.getElementById("cat").style.margin = "50px";
	}
	else if(mouse == "left"){
		document.getElementById("mouse").style.margin = "100px";
		mouse = "";
		document.getElementById("cat").style.margin = "100px";
		cat = "";

	}
	else if(mouse == "right"){
		document.getElementById("mouse").style.margin = "150px"
		mouse = "";
		document.getElementById("cat").style.margin = "150px"
		cat = "";
	}
	else if(mouse == "down"){
		document.getElementById("mouse").style.margin = "200px"
		mouse = "";
		document.getElementById("cat").style.margin = "200px";
		cat = "";
		alert("OH NO! Mouse has been eaten up.");

	}
}

