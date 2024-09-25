/******************************************************************************
WELCOME TO YOUR FIRST JAVASCRIPT BASIC ASSIGNMENT!

All the assignment instructions are commented out so that you can write your 
code in between them. Remember to read the instructions CAREFULLY, write short 
comments for your code, and feel free to ask for help if you're stuck.

GOOD LUCK!
******************************************************************************/

/******************************************************************************
ASSIGNMENT 1

Your first task will be to link this javascript file to the index.html file
using one of the methods I showed in the first lecture.

<-- Locate the index.html file in the file browser and link it to this file, 
javascript.js
******************************************************************************/

/****************************************************************************** 
ASSIGNMENT 2

Last lecture I showed you how to make variables that can hold values of the 
various data types. Make some variables of the following datatypes: 
String, number, boolean, array
You can choose what the actual content is.
Try to use both the let and const keywords
******************************************************************************/

//your code here
const studentName = "Himanshu";
let studentAge = 6;
let studentIntrests = ["Dance", "running", "chess", "music", "swimming"];
let skoleStudent = true;
console.log(studentName);
console.log(studentIntrests);
console.log(studentIntrests[3]);
console.log(skoleStudent);

/****************************************************************************** 
ASSIGNMENT 3

Try out a few of the operators we looked at (+, -, /, *)
as well as a few of the shorthand operators (++, --, +=, -=)
******************************************************************************/

//your code here
let x = 4;
let y = x + 6;

console.log(y);
console.log(y / x);
x += y;
console.log(x);
x++;
console.log(x);
y -= 2;
console.log(y);

/****************************************************************************** 
ASSIGNMENT 4

Write an IF/ELSE conditional statement that checks that userName isn't 
empty(""), that the user age is 18+, and that userIsBlocked is false. 

(HINT: Use the && (logical AND) to check all 3 in one IF statement)

If all of these conditions are true, change the userIsLoggedIn variable to true 
and the goToPage variable to "/home" then console.log a welcome message. 

If any of the conditions for logging in are not met, console.log an error 
message.

Try changing the values of the variables to make sure your IF/ELSE conditional
can handle all cases correctly 
******************************************************************************/

const userName = " ";
let userAge = 18;
let userIsLoggedIn = false;
const userIsBlocked = false;
let goToPage = "";

//your code here

if (userName === " " && userAge >= 18 && userIsBlocked === false) {
  userIsLoggedIn = true;
  goToPage = "/Home";
  console.log("Welcome To Home page");
} else {
  console.log("User feild to loggedin");
}

console.log(userIsLoggedIn);
console.log(goToPage);
/******************************************************************************
ASSIGNMENT 5

Make a variable called userTitle and set the content equal to "Mr." if userMale 
is true, or to "Mrs." if userMale is false. Use the TERNARY conditional to do 
this:

const variable = statement ? "this if true" : "this if not true"

Try changing userMale to both true and false and console.log your new variable,
to see that your conditional is working.
******************************************************************************/

const userMale = true;

//your code here

const userTitle = userMale === false ? "Mrs." : "Mr.";
console.log(userTitle);
