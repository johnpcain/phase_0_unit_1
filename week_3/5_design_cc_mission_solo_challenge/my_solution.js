// This is a solo challenge

// Your mission description:



// new mission: create a game whereby the user is prompted to enter in a number of orgres and a number of soliders to determine how many orges he can kill. 

// pseudocode:
// create an html form template that has two input text fields. One labeled "number of soldiers" and the other labeled "number of orgres"
// create a button that says "attack" and its onclick is tied to a function within the js form
// create two result fields. One for #ogres killed and one for #soldiers killed
// create a function called attackOrge that takes no arguments
// create two variables, one takes stores the number of orges and one that stores the number of soldiers. Convert text value to numbers
// create if and elseif statements that determine how many soldiers and orgres will be killed
// store the result in the appropriate result fields in the html document


function attackOgres(){
	var ogres = Number(document.formField.numberOgres.value);
	var soldiers = Number(document.formField.numberSoldiers.value);
	var ogresKilled;
	var soldiersKilled;

	if( ogres == "" || soldiers == ""){
		alert("Some of you may die... but this is a risk I am willing to take. Send more men and ogres. ");
		return false
	}


	if(ogres>soldiers){
		ogresKilled = ogres * 7/9;
		soldiersKilled = soldiers
	}
	else{
		ogresKilled = ogres;
		soldiersKilled = soldiers * 7/9;
	}

	document.formField.ogresKilled.value = ogresKilled;
	document.formField.soldiersKilled.value= soldiersKilled;

}



