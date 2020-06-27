// // Chapter (#21 to #25):-

// // Task #01:


// // Task #02:


// // Task #03:


// // Task #04:


// // Task #05:


// // Task #06:


// // Task #07:
// var city = "Hyderabad";

// document.write ("City: " + city + "<br>" + "After replacement: " + city.replace("Hyder" , "Islam"));

// // Task #08:


// // Task #09:
// var a = 472;

// document.write("Value: " + a.toString() + "<br>" + "Type: string" + "<br>" + "Value: " + parseInt(a) + "<br>" + "Type: number");

// // Task #10:


// // Task #11:


// // Task #12:


// // Task #13:


// // Task #14:


// // Task #15:
// var pass = prompt("Enter password");

// do{
//   pass = pass.toLowerCase()
//   var isValid = false;

//   for(var i = 1; i < pass.length; i++){
//     if(!isNaN(pass.charAt(i))){
//       isValid = true
//       break;
//     }
//   }

//   if (isNaN(pass.charAt(0)) && pass.length >=8 && isValid){  
      
//   alert("Valid password");

//   }

  
//   else if (pass === "") {

//       pass = prompt ("Please enter your password");
//       isValid = false;
//   }
  
//   else {
//       pass = prompt("Enter a valid password");
//       isValid = false;
//   }
// }while(!isValid);

// // Task #16:


// // Task #17:


// // Task #18:
// var text = "The quick brown fox jumps over the lazy dog";

// var a = "The quick brown fox jumps over the lazy dog".toLowerCase();

// var b = a.split("the".toLowerCase()).length - 1;

// document.write("Text: " + text + "<br>" + "There are " + b + " occurrence(s) of word 'the'");


// // Chapter (#26 to #30):-

// // Task #01:
// var num = prompt("Enter a positive integer");
// if (num >= 0){

//     document.write("number: " + num + "<br>" + "round off value: " + Math.round(num) + "<br>" + "floor value: " + Math.floor(num) + "<br>" + "ceil value: " + Math.ceil(num));

// } 
// else {

//     alert("Please enter a positive integer");
// }

// // Task #02:


// // Task #03:


// // Task #04:
// var random = Math.random();
// var diceA = (random*4);
// var diceB = (random*6);
// document.write("random dice value: " + Math.ceil(diceA) + "<br>" + "random dice value: " + Math.ceil(diceB));
// console.log(random);

// // Task #05:


// // Task #06:


// // Task #07:


// // Task #08:


// // Chapter (#31 to #34):-

// // Task #01:


// // Task #02:


// // Task #03:


// // Task #04:


// // Task #05:
// var myDate = new Date("06/27/2020");
// alert(myDate);
// if(myDate.getDate() < 16 && myDate.getDate() >= 1 ){

//     alert("First fifteen days of the month");
// }
// else if (myDate.getDate() <= 31 ) {

//     alert("Last days of the month");

// }
// else {

//     alert("Not possible");
// }

// // Task #06:
// var currentDate = new Date();
// document.write("Current Date: " + currentDate + "<br>");
// document.write("Elapsed milliseconds since January 1 , 1970: " + currentDate.getTime() + "<br>");
// document.write("Elapsed minutes since January 1 , 1970: " + currentDate.getTime() / (1000*60));

// // Task #07:


// // Task #08:


// // Task #09:


// // Task #10:


// // Task #11:
// var currentDate = new Date();
// var hour = currentDate.getHours();
// document.write("Current Date: " + currentDate + "<br>");
// currentDate.setHours(hour-1);
// document.write("1 hour ago, it was " + currentDate);

// // Task #12:


// // Task #13:
// var age = prompt("Enter your age");
// var date = new Date();
// var getYear = date.getFullYear();
// document.write("Your age is " + age + "<br>" + "Your birth year is " + (getYear - age));

// // Task #14:


// // Chapter (#35 to #38):-

// // Task #01:


// // Task #02:


// // Task #03:


// // Task #04:


// // Task #05:


// // // Task #06:
// function factorial(x) 
// { 

//   if (x == 0)
//  {
//     return 1;
//  }
//   return x * factorial(x-1);
         
// }
// var a = factorial(9);
// document.write(a);

// // Task #07:


// // Task #08:


// // Task #09:
// var length = prompt("Enter a whole number for the length of your rectangle.");
// var width = prompt ("Enter a whole number for the width of your rectangle.");

// function area (length, width) {
    
    
// return length*width;


// }

// console.log("The area of your rectangle is " + area(length, width));

// // Task #10:
// function palindrome(str) {
//     var re = /[\W_]/g;
//     var lowRegStr = str.toLowerCase().replace(re, '');
//     var reverseStr = lowRegStr.split('').reverse().join(''); 
//     return reverseStr === lowRegStr;
//   }
//  var a = palindrome("madam");
//  console.log(a);

// // Task #11:


// // Task #12:


// // Task #13:


// // Task #14:
// function calcCircumference (){
//     var rad = prompt("Enter Radius to Find Circumference of a Circle");
//     return "The circumference is " + 2*Math.PI*rad + "<br>";
// }
// document.write(calcCircumference());

// function calcArea (){
//     var rad = prompt("Enter Radius to Find Area of a Circle");
//     return "The area is " + Math.PI*Math.pow(rad, 2);
// }
// document.write(calcArea());
