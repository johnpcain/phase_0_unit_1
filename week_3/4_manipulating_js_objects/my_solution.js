
// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
}



// __________________________________________
// Write your code below.

// psuedocode

// write a variable for adam and set it equal to a property name with the string value of "adam"
// write a variable for terah using object literal notation and add the following properties:
//   - property spouse with value of the variable adam
//   - property of weight with a value of 125 numeric
//   - property of children using object literal notation and add three objects with no properties -- carson, carter, and colton
//       - in each object within terah, add a property name with the corresponding object name as a string
//   - use an assignment statement to set adam.spouse equal to the variable terah
//   - use an assignment statement to set adam.children equal to terah.children 



var adam = {
  name: "Adam",
}

var terah = {
  spouse: adam,
  weight: 125,
  children: {
    carson:{
      name: "Carson"
    },
    carter:{
      name: "Carter"
    },
    colton:{
      name: "Colton"
    }
  },
}

adam.spouse = terah

adam.children = terah.children










// __________________________________________
// Reflection: Use the reflection guidelines
// 
// What parts of your strategy worked? What problems did you face? Admittedly, I pseudo-coded after I solved the problem. In hindsight, 
// I would've saved a lot of time be reversing that. I struggled with recalling the correct usage of the assignment operator. I was trying to modify the adam
//object after I had assigned it using object literal notation and was receiving error messages. 
// What questions did you have while coding? What resources did you find to help you answer them? 
//    questions:
//        - why isn't this working?? Oh, assignment operators. Gotcha. I used the back to basics file provided to us 
// What concepts are you having trouble with, or did you just figure something out? If so, what? Again, I only really sruggled with assignment operators 
// Did you learn any new skills or tricks? I can better visualize the tree-like structure of imbedded objects and properties.
// How confident are you with each of the Learning Competencies? I feel pretty good about this one. 
// Which parts of the challenge did you enjoy? Running the test and seeing the code work. I'd imagine I would've enjoyed implementing the pseudocode into source code had I done that initially like I should've..
// Which parts of the challenge did you find tedious? Troubleshooting bugs with the code. 
// 
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)



console.log("\nHere is your final terah object:")
console.log(terah)