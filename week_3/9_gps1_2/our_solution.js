// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.John Cain	
//  2. Dakota


// 0. "YOU SIGNED... WHO?!"

var nova = {
	name: 'nova',
	age: 4,
	quote: 'meow.'
}


// 1. "Here they Come!"

function Client(name, age, quote){
    this.name = name;
    this.age = age;
    this.quote = quote
}




var adamSandler = new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?")
var kristenBell = new Client("Kristen Bell", 33, "Do you wanna build a snowman?")
var jimCarrey = new Client("Jim Carrey", 52, "...So you're telling me there's a chance. Yeah!")

// 2. "TIME IS MONEY!"

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

var clients = [jimCarrey, adamSandler, kristenBell]

function summary(client){
	console.log("Hey i'm " + client.name + "and i'm " + client.age + " years old")
}

for(i = 0; i < clients.length; i++){
	summary(clients[i]);
}





// 3. "SHOW 'EM OFF!"





// 4. "But wait, there's more!"



// 5.  ** BONUS **


//  6.  Your Reflection:
