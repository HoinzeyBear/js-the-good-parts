//Array Literal
var empty = []
var numbers = [
    "zero", "one", "two", "three", "four", "five"
]

/*

empty[1]        //undefined
numbers[1]      //"one"

empty.length    //0
numbers.length  //10

*/

//Object literal
var numbers_object = {
    "0": "zero",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five"
}

/*
Both produce similar results but numbers_object inherits from Object.prototype
whereas numbers inherits from Array.prototype
*/

var lengthArray = []
lengthArray.length      //0

lengthArray[100] = true
lengthArray.length      //101

/*
    The length can be set explicitly. Making the array smaller will 
    delete any elements in the array beyond that point
*/

numbers.length = 3      // numbers is now "zero", "one", "two"

numbers[numbers.length] = "four"     // numbers is now "zero", "one", "two", "four"

//Better or more convenient to use the push method
numbers.push("five") // numbers is now "zero", "one", "two", "four", "five"
