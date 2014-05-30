// My role in the group is: initial solution

// Here is my part of the challenge:

// Test 1:
// Create array of numbers
// Add up every number in the array
// Output the sum

// Test 2:
// Create array of numbers
// Add up every number in the array
// Divide the sum by the total number of items in the array
// Output this value

// Test 3:
// Create array of numbers
// Create an if else statement
// If the array has an odd number of item (in other words if
// the remainder of the number of items in the array divided by two
// is NOT zero) then find the middle number by:
// 1. taking the length of the array and subtract 1 from it
// 2. Divide that number by 2
// 3. Round that number DOWN
// 4. Input that number as the index for the array to output its value
// Else, then get the average of the sum of the two middle numbers by:
// 1. taking the length of the array and divide it by two
// 2. take that number and store it into a variable called number 1
// 3. take that number and subtract 1 from it and store it in a variable called number 2
// 4. Add the value of the two variables together
// 5. Divide that sum by two
// 6. Output this value

//Test 1
var numbers = [3,4,6];
var total = 0;
for (var i = 0; i<numbers.length;i++){
	total += numbers[i];
}
console.log(total)

//Test2

var numbers = [1,2,3];
var total = 0;
for (var i = 0; i<numbers.length;i++){
	total += numbers[i];
}
var length = numbers.length;
console.log(total/length)

//Test 3

var numbers = [3,4,6,7,8,9];

if(numbers.length % 2 != 0){
	var middle = math.floor(numbers.length/2);
	console.log(numbers[middle])
}

else{
	var number1 = numbers.length/2;
	var number2 = number1 - 1;
	var middle = ((number1 + number2)/2);
	console.log(numbers[middle])
}




