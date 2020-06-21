// // Chapter (#01):-

// // Task #01:
// alert('"Welcome to our website"');

// // Task #02:
// alert("Error! Please enter a valid password.");

// // Task #03:
// alert("Welcom to JS Land... \n Happy Coding!");

// // Task #04:
// alert("Welcome to JS Land...");
// alert("Happy Coding! \n Prevent this page from creating additional dialogs.");

// // Task #05:
// console.log("Hello...I can run JS through my web browser's console");


// // Task #06:
{/* <html>

<head>
    <script>
        alert("Hello world!");
        alert("Welcome to JS Land...");
    </script>
</head>

<body>

</body>

</html> */}

// // Task #07:
// (a)
{/* <html>

<head>
    <script>
        alert("Hello world!");
        alert("Welcome to JS Land...");
    </script>
</head>

<body>

</body>

</html> */}

// (b)
{/* <html>

<head>

</head>
    <script>
        alert("Hello world!");
        alert("Welcome to JS Land...");
    </script>
<body>
   
</body>

</html> */}

// (c)
{/* <html>

<head>

</head>
   
<body>
    <script>
        alert("Hello world!");
        alert("Welcome to JS Land...");
    </script>
</body>

</html> */}

// (d)
{/* <html>

<head>

</head>

<body>
   
</body>
    <script>
        alert("Hello world!");
        alert("Welcome to JS Land...");
    </script>
</html> */}


// // Chapter (#02):-

// // Task #01:
// var userName;

// // Task #02:
// var myName="Zain Rehman";
// alert(myName);

// // Task #03:
// var message="Hello World";
// alert(message);

// // Task #04:
// var myName="Zain Rehman";
// var age=23 + " years old";
// var certificate="Certified Mobile Application Development";

// alert(myName);
// alert(age);
// alert(certificate);

// // Task #05:
// var pizza="PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(pizza);

// // Task #06:
// var email="kh.zainrehman80@gmail.com";
// alert("My email address is " + email);

// // Task #07:
// var book="A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book " + book);

// // Task #08:
// document.write ("Yah! I can write HTML content through JavaScript")


// // Chapter (#03):-

// // Task #01:
// var age=23;
// alert("I am "+age+" years old");

// // Task #02:
// var visitNum=14;
// alert("You have visited this site "+visitNum+" times");

// // Task #03:
// var birthYear=1997;
// document.write("My birth year is " + birthYear + "<br>" + "Data type of my declared variable is number");

// // Task #04:
// var visitorName="John Doe";
// var productTittle ="T-shirt";
// var quantity=5;

// document.write(visitorName + " ordered " + quantity +" "+ productTittle+"(s)" + " on Mab's Clothing store");


// // Chapter (#04):-

// // Task #01:
// var x;y;z;

// // Task #02:
// (Legal variable names)
// var firstName;FirstName;firstname;_firstName;$firstName;firstName1;first_Name;first$Name;first1Name;
// (Illegal variable names)
// var -firstName;1FirstName;var;@firstname;alert;

// // Task #03:
// document.write ('a) A heading stating "Rules for naming JS variables" <br> b) Variable names can only contain ______, ______,______ and ______. For example $my_1stVariable <br> c) Variables must begin with a ______, ______ or_____. For example $name, _name or name <br> d) Variable names are case _________ <br> e) Variable names should not be JS _________')


// // Chapter (#06 to #09):-

// // Task #01:
// const arthematicOperations = () => {
//     var num;
//     num = Number(document.getElementById('input01').value);
  
//     document.write("Result: ");
//     document.write("<br>");
//     document.write("Value of a is: ", num);
//     document.write("<br>");
//     document.write(",,,,,,,,,,,,,,,,,,,,,,,,,,,,");
//     document.write("<br>");
//     document.write("The value of ++a is: ", ++num);
//     document.write("<br>");
//     document.write("Now the value of a is: ", num);
//     document.write("<br>");
//     document.write("<br>");
//     document.write("<br>");
//     document.write("The value of a++ is: ", num++);
//     document.write("<br>");
//     document.write("Now the value of a is: ", num);
//     document.write("<br>");
//     document.write("<br>");
//     document.write("<br>");
//     document.write("The value of --a is: ", --num);
//     document.write("<br>");
//     document.write("Now the value of a is: ", num);
//     document.write("<br>");
//     document.write("<br>");
//     document.write("<br>");
//     document.write("The value of a-- is: ", num--);
//     document.write("<br>");
//     document.write("Now the value of a is: ", num);
  
//   }

// // Task #02:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// console.log(result);
// document.write("1.  --a = 1 because a was 2 and after subtracting the current value and assigning to itself." + "<br>");
// document.write("2.  --a - --b = 1 - 0 = 1 because a was 2 and b was 1 after subtracting the current value of a and b." + "<br>");
// document.write("3.  --a - --b + ++b = 1 + 1 = 2 because a was 2 and b was 1 after subtracting the current value of a and b and --b is adding 1 to the current value of b which is 0." + "<br>");
// document.write("4.  --a - --b + ++b + b-- = 1 + 1 + 1 = 3 because a was 2 and b was 1 after subtracting the current value of a and b and --b is adding 1 to the current value of b which is 0 and" + "<br>" + "adding b-- that means add the current value of b and then subtract 1 and assign it to b.");

// // Task #03:
// var name = prompt("Please enter your name");
// alert("Hi " + name + " Welcome to our website!");

// // Task #04:
// var num = parseInt(prompt("Please enter a number to show its table"));
// console.log(num);
// if (NaN) {
//   for (var i = 1; i < 11; i++) {
//     document.write(5 + "  x  " + i + " = " + 5 * i + "<br>");
//   }
// } else {
//   for (var i = 1; i < 11; i++) {
//     document.write(num + "  x  " + i + " = " + num * i + "<br>");
//   }
// }


// // Chapter (#09 to #11):-

// // Task #01:
// var city = prompt("city name");
// if (city === "Karachi") {
//     alert("Welcome to city of lights");
// }
// else {
//     alert("Error");
// }

// // Task #02:
// var gender = prompt("gender");
// if (gender === "male") {
//     alert("Good Morning Sir");
// }
// else if (gender === "female") {
//     alert("Good Morning Ma'am");
// }
// else { alert("Error"); }

// // Task #03:
// var colorOfRoadTrafficSignal = prompt("Traffic Signal Lights");
// if (colorOfRoadTrafficSignal === "Red") {
//     alert("Must Stop");
// }
// else if (colorOfRoadTrafficSignal === "Yellow") {
//     alert("Ready to move");
// }
// else if (colorOfRoadTrafficSignal === "Green") {
//     alert("Move now");
// }
// else { alert("Error"); }

// // Task #04:
// var remainingFuelInCar = prompt("Fuel in Litres");
// if (remainingFuelInCar < 0.25) {
//     alert("Please refill the fuel in your car");
// }
// else if (remainingFuelInCar >= 0.25) { alert("No need to refill now"); }
// else {
//     alert("Error");
// }

// // Task #05:
// alert("a. given condition for variable a is true \nb. Not displayed \nc. Condition 2 & 4 is true \nd. The cost equals \ne. True \nf. car is smaller than cat");
// // Task #05 checking...
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

// // Task #06:
// var math = prompt("Enter your Maths marks");
// var chemistry = prompt("Enter your Chemistry marks");
// var physics = prompt("Enter your Physics marks");
// var total_marks = prompt("Total marks");
// var obtained_mark = parseInt(math) + parseInt(chemistry) + parseInt(physics);
// var per = obtained_mark * 100 / 300;
// document.write("Total marks:" + total_marks + "<br>");
// document.write("Marks obtained:" + obtained_mark + "<br>");
// document.write("Percentage:" + per + "%" + "<br>");
// if (per >= 50 && per < 60) {
//     document.write("Grade:Fail" + "<br>");
//     document.write("Remarks:Sorry" + "<br>");


// } else if (per >= 60 && per < 70) {
//     document.write("Grade:B" + "<br>");
//     document.write("Remarks:You need to improve" + "<br>");

// } else if (per >= 70 && per < 80) {
//     document.write("Grade:A" + "<br>");
//     document.write("Remarks:Good" + "<br>");

// } else if (per >= 80 && per <= 100) {
//     document.write("Grade:A-1" + "<br>");
//     document.write("Remark:Excellent" + "<br>");

// } else if (per > 100) {
//     document.write("Grade:Not possible" + "<br>");
//     document.write("Remarks:None" + "<br>");
// } else {
//     document.write("Grade:Fail" + "<br>");
//     document.write("Remarks:Sorry" + "<br>");
// }

// // Task #07:
// var myNumber = 7
// var secretNumber = prompt("Guess the number");
// if (secretNumber == myNumber) {
//     alert("Bingo! Correct answer");
// }
// else if (secretNumber == --myNumber) {
//     alert("Close enough to the correct answer");
// }
// else { alert("Fail"); }

// // Task #08:
// var div = prompt("Check the given value is divisible by 3 or not");
// if ((div % 3) == 0) {
//     alert("It is divisible by 3");
// }
// else {
//     alert("It is not divisible by 3");
// }

// // Task #09:
// var div = prompt("Given value is an Even or Odd?");
// if ((div % 2) == 0) {
//     alert("It is an Even number");
// } else if ((div % 1) == 0) {
//     alert("It is an Odd number");
// }
// else {
//     alert("Error");
// }

// // Task #10:
// var temp = prompt("What temprature is?");
// if (temp > 40) {
//     alert("It is too hot outside");
// }
// else if (temp > 30 && temp < 40) {
//     alert("The Weather today is Normal");
// }
// else if (temp > 20 && temp < 30) {
//     alert("Today's Weather is cool");
// }
// else if (temp > 10 && temp < 20) {
//     alert("OMG! Today's weather is so Cool");
// }
// else if (temp <= 10) { alert("OMG! Today's weather is so Cool"); }
// else { alert("Error"); }

// // Task #11:
// var first = prompt("Enter a first number");
// var second = prompt("Enter a second number");
// var opert = prompt("Calculate this value");
// var add = "+";
// var sub = "-";
// var mul = "*";
// var div = "/";
// var mod = "%";


// if (opert === add) {
//     alert(parseInt(first) + parseInt(second));
// } else if (opert === sub) {
//     alert(first - second);
// } else if (opert === mul) {
//     alert(first * second);
// } else if (opert === div) {
//     alert(first / second);
// } else if (opert === mod) {
//     alert(first % second);
// }
// else {
//     alert("Error");
// }


// // Chapter (#12 to #13):-

// // Task #01:
// var ch = prompt("Enter any character?");
// if (ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90) { alert("Input is an uppercase letter"); }
// else if (ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122) { alert("Input is a lowercase letter"); }
// else if (ch.charCodeAt(0) >= 48 && ch.charCodeAt(0) <= 57) { alert("Input is a number"); }
// else {
//     alert("Error");
// }

// // Task #02:
// var firstNum = prompt("Enter First number?");
// var secondNum = prompt("Enter Second number?");

// if (parseFloat(firstNum) > parseFloat(secondNum)) {
//     alert("Larger Number is: " + firstNum);
// }
// else if (parseFloat(firstNum) < parseFloat(secondNum)) {
//     alert("Larger Number is: " + secondNum);
// }
// else if (parseFloat(firstNum) === parseFloat(secondNum)) {

//     alert("Larger Number is: " + firstNum);
// }
// else {

//     alert("Error");
// }

// // Task #03:
// var num = prompt("Enter a number?");

// if (num > 0) {
//     alert("Number is Positive");
// }

// else if (num == 0) {
//     alert("Number is zero");
// }

// else if (num < 0) {
//     alert("Number is negative");
// }
// else {

//     alert("Error");
// }

// // Task #04:
// var character = prompt("Enter a character?");

// if (character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u' || character == 'A' || character == 'E' || character == 'I' || character == 'O' || character == 'U') {
//     alert("true");
// }

// else if (character.charCodeAt(0) >= 48 && character.charCodeAt(0) <= 57) {
//     alert("Error");
// }
// else {

//     alert("false");
// }

// // Task #05:
// var pass = "Zain Rehman";
// var userPass = prompt("Enter password");
// if (userPass === "") { alert("Please enter your password"); }
// else if (userPass === pass) { alert("Correct! The password you entered matches the original password"); }
// else { alert("Incorrect password"); }

// // Task #06:
// var greeting;
// var hour = 20;
// if (hour < 18) {
//     alert(
//         greeting = "Good day");
// } else {
//     alert(greeting = "Good evening");
// }

// // Task #07:
// var time = prompt("What time is it?");
// if (time >= 0000 && time < 1200) { alert("Good morning"); }
// else if (time >= 1200 && time < 1700) { alert("Good afternoon"); }
// else if (time >= 1700 && time < 2100) { alert("Good evening"); }
// else if (time >= 2100 && time <= 2359) { alert("Good night"); }
// else {
//     alert("Not possible");
// }


// // Chapter (#14 to #16):-

// // Task #01:
// var studentNames = [];

// // Task #02:
// var studentNames = {};

// // Task #03:
// var strArray = ["zain","hamza","ahsan"];

// // Task #04:
// var numArray = [1,2,3];

// // Task #05:
// var boolArray = [false,true,false];

// // Task #06:
// var mixArray = ["zain",1,true];

// // Task #07:
// var a = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.phil", "PhD"];
// document.write("Qualifications:<br> <br>");
// for (var b = 0; b < a.length; b++) {
//     document.write(b + 1 + ")" + a[b] + "<br>");
// }

// // Task #08:
// var names = ["Michael", "John", "Tony"];
// var scores = ["320.", "230.", "480."];
// for (var a = 0; a < names.length; a++) {
//     var per = (scores[a] / 500) * 100
//     document.write("Score of " + names[a] + " is " + scores[a] + " Percentage: " + per + "%" + "<br>")
// }

// // Task #09:
// var arr = ["Red", "Blue", "Yellow", "Green"]
// var color1
// document.write(arr + "<br>")

// var color = prompt("Enter the color you want to add at the beginning:")
// arr.unshift(color)

// document.write(arr + "<br>")

// color = prompt("Enter the color you want to add at the end :")
// arr.push(color)

// document.write(arr + "<br>")

// color = prompt("Enter color 1:")
// arr.unshift(color)
// color1 = prompt("Enter color 2:")
// arr.unshift(color1)

// document.write(arr + "<br>")

// arr.shift()
// document.write(arr + "<br")

// arr.pop()
// document.write(arr + "<br><br>")

// var ind = prompt("Input index:")
// color = prompt("Enter the color you want to add at index " + ind + " :")
// arr[ind] = color

// document.write(arr + "<br>")

// ind = prompt("Input index :")
// var num = prompt("Enter the number of colors you want to delete: ")

// arr.splice(ind, num)

// document.write(arr + "<br>")

// // Task #10:
// var scoreOfStudents = [320,230,480,120];
// document.write (scoreOfStudents.sort())

// // Task #11:
// var a = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// var b = [a.slice(0, 3)];

// document.write("Cities list:" + "<br>" + a + "<br>");
// document.write("<br>" + "Selected cities list:" + "<br>" + b);

// // Task #12:
// var arr = ["this","is","my","cat"];
// var str = arr.join(" ");
// document.write (arr); 
// document.write ("<br>");
// document.write (str);

// // Task #13:
// var devices = [];
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");
// document.write ("Devices: <br>");
// document.write (devices);
// document.write ("<br>")
// document.write ("<br>")
// document.write ("Out: <br>")
// document.write (devices.shift());
// document.write ("<br>")
// document.write ("Out: <br>")
// document.write (devices.shift());
// document.write ("<br>")
// document.write ("Out: <br>")
// document.write (devices.shift());
// document.write ("<br>")
// document.write ("Out: <br>")
// document.write (devices.shift());

// // Task #14:
// var devices = [];
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");
// document.write ("Devices: <br>");
// document.write (devices);
// document.write ("<br>")
// document.write ("<br>")
// document.write ("Out: <br>")
// document.write (devices.pop());
// document.write ("<br>")
// document.write ("Out: <br>")
// document.write (devices.pop());
// document.write ("<br>")
// document.write ("Out: <br>")
// document.write (devices.pop());
// document.write ("<br>")
// document.write ("Out: <br>")
// document.write (devices.pop());


// // Chapter (#17 to #20):-

// // Task #01:
// var arr = [
//     []
// ];

// // Task #02:
// var arr = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
// for (i = 0; i < 3; i++) {
//     for (j = 0; j < 4; j++) {
//         document.write(arr[i][j]);
//     }
//     document.write("<br>")
// }

// // Task #03:
// for (var i = 1; i<=10; ++i) {
//     document.write (i)
//     document.write ("<br>")
// }

// // Task #04:
// var num = parseInt(prompt("Enter a number to show its multiplication table"));
// var len = parseInt(prompt("Enter length multiplication table"));
// document.write ("Multiplication table of " + num + "<br>" + "Length " + len + "<br>" + "<br>")
// for (var i = 1; i<=len; i++){
//     document.write(num + " x " + i + " = " + num*i + "<br>")
// }

// // Task #05:
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i < 5; i++) {
//     document.write(fruits[i]);
//     document.write("<br>");
// }
// document.write("<br>");
// document.write("<br>");
// for (var i = 0; i < 5; i++) {
//     document.write("Element at index " + i + " is " + fruits[i]);
//     document.write("<br>");
// }

// // Task #06:
// document.write("Counting : ")

// for (var i = 1; i <= 15; i++) {
//     if (i == 15) {
//         document.write(i + "<br>")
//     }
//     else {
//         document.write(i, ", ")
//     }
// }

// document.write("Reverse counting : ")

// for (var i = 10; i >= 1; i--) {
//     if (i == 1) {
//         document.write(i + "<br>")
//     }
//     else {
//         document.write(i, ", ")
//     }
// }

// document.write("Even : ")

// for (var i = 0; i <= 20; i += 2) {
//     if (i == 20) {
//         document.write(i + "<br>")
//     }
//     else {
//         document.write(i, ", ")
//     }
// }

// document.write("Odd : ")

// for (var i = 1; i <= 19; i += 2) {
//     if (i == 19) {
//         document.write(i + "<br>")
//     }
//     else {
//         document.write(i, ", ")
//     }
// }

// document.write("Series : ")

// for (var i = 2; i <= 20; i += 2) {
//     if (i == 20) {
//         document.write(i + "k<br>")
//     }
//     else {
//         document.write(i, "k, ")
//     }
// }

// // Task #07:
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var str = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// for (var i = 0; i < 5; i++) {
//     if (str === arr[i]) {
//         alert(str + " is available at index " + i + " in our bakery.");
//         break
//     }
// }
// if (str != arr[i]) {
//     alert("We are sorry. " + str + " is not available in our bakery.");
// }

// // Task #08:
// var arr = [24, 53, 78, 91, 12];

// var max = 0

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]
//     }
// }
// document.write(max)

// // Task #09:
// var arr = [24, 53, 78, 91, 12];

// var min = 100

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i]
//     }
// }
// document.write(min)

// // Task #10:
// for (var i = 5; i <= 100; i += 5) {
//     document.write(i)
//     document.write(",")
// }

