// ***************************** Chapter 1 **************************** 

// ****************************** Task 1 ******************************

// alert("Hello! World");

// ****************************** Task 2 ******************************

// password = prompt("Enter Password");
// if(password === "wm-5035")
// {
//     alert("Thank you! Now you are authorized");
// }
// else
// {
//     alert("Error! Please Enter a valid password");
// }

// ****************************** Task 3 ******************************

// alert("Welcome to JS Land... \n Happy Coding!");

// ****************************** Task 4 ******************************

// alert("Welcome to JS Land... ");
// alert("Happy Coding!");

// ****************************** Task 5 ******************************

// alert("Hello! I can run JS throught my web browser's console ");



// ***************************** Chapter 2  **************************** 

// ****************************** Task 1 ******************************

// var username;

// ****************************** Task 2 ******************************

// var myName = "MAAZ UL HAQ";

// ****************************** Task 3 ******************************

// var message = "Hello World";
// alert(message);

// ****************************** Task 4 ******************************

// var name = "MAAZ UL HAQ";
// var age = "20 years old";
// var achievement = "Certified web development";

// alert(name);
// alert(age);
// alert(achievement);

// ****************************** Task 5 ******************************

// alert("PIZZA \nPIZZ \nPIZ \nPI \nP");

// ****************************** Task 6 ******************************

// var email = "maazulhaq00@gmail.com";
// alert("My email address is " + email);

// ****************************** Task 7 ******************************

// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book " + book);

// ****************************** Task 8 ******************************

// document.write("Yah! I can write HTML content through JavaScript");

// ****************************** Task 9 ******************************

// var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(design); 



// ***************************** Chapter 3  **************************** 

// ****************************** Task 1 ******************************

// var age = 20;
// alert("I am " + age + " years old.");

// ****************************** Task 2 ******************************

// var count = 0;
// if(window.onload)
// {
//     count++ ;
// }
// alert( "You have visited this site " + count + " times");

// ****************************** Task 3 ******************************

// var birthYear = 1999;
// document.write("My birth year is " + birthYear );
// document.write(". <br>");
// document.write("Data type of declared variable is Number.");

// ****************************** Task 4 ******************************

// var visitorName = "Maaz";
// var productTitle = "T-shirt";
// var quantity = 5;

// alert(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ clothing store.");





// ***************************** Chapter 4 **************************** 

// ****************************** Task 1 ******************************

// var name, age, qualification;

// ****************************** Task 2 ******************************

// legal variable names
// var x;
// var _a1;
// var _12;
// var $_price; 
// var uvw_3;

// illegal variable names
// var a&b;
// var full name;
// var full.name;
// var roll#;
// var 1st_element;
// var new;

// ****************************** Task 3 ******************************

// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("<p> Variable names can only contain aphabets, numbers, dollar($) and underscore(_) For example $my_1stVariable </p>");
// document.write("<p> Variables must begin with an alphabet, $ or _. For example $name, _name or name </p> ");
// document.write("<p> Variable names are case sensitive </p>");
// document.write("<p> Variable names should not be JS Keyword </p>");



// ***************************** Chapter 5 **************************** 

// ****************************** Task 1 ******************************

// var num1 = 17;
// var num2 = 6;

// var sum = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br>");

// ****************************** Task 2 ******************************

// var sub = num1 - num2;
// document.write("Difference of " + num1 + " and " + num2 + " is " + sub + "<br>");

// var mul = num1 * num2;
// document.write("Product of " + num1 + " and " + num2 + " is " + mul + "<br>");

// var div = num1 / num2;
// document.write("Division of " + num1 + " and " + num2 + " is " + div + "<br>");

// var mod = num1 % num2;
// document.write("Remainder of division of " + num1 + " and " + num2 + " is " + mod + "<br>");


// ****************************** Task 3 ******************************

// var x;
// document.write("Value after variable declaration is: " + x + "<br>");
// x = 5;
// document.write("Initial value: " + x + "<br>");
// x++;
// document.write("Value after increment is: " + x + "<br>");
// x = x + 7;
// document.write("Value after addition is: " + x + "<br>");
// x--;
// document.write("Value after decrement is: " + x + "<br>");
// var rem = x % 3;
// document.write("The remainder is : " + rem + "<br>");

// ****************************** Task 4 ******************************

// var ticketCost = 600;
// var numberOfTickets = 5;
// var totalCost = ticketCost * numberOfTickets;

// document.write("Total cost to buy " + numberOfTickets + 
// " tickets to a movie is " + totalCost + " PKR.");

// ****************************** Task 5 ******************************

// var num = 8;
// for(var i = 1; i <= 10; i++)
// {
//     document.write(num + " x " + i + " = " + num*i + "<br>");
// }

// ****************************** Task 6 ******************************

// var celsius_1 = 39;
// var fahrenheit_1 = ((celsius_1 * 1.8) +32).toFixed(2);
// document.write(celsius_1 + "°C is " + fahrenheit_1 + "°F. <br>");

// var fahrenheit_2 = 100;
// var celsius_2 = ((fahrenheit_2 - 32) * 5/9).toFixed(2);
// document.write(fahrenheit_2 + "°F is " + celsius_2 + "°C. <br>");

// ****************************** Task 7 ******************************

var priceOfItem_1 = 400;
var priceOfItem_2 = 3;
var quantityOfItem_1 = 150;
var quantityOfItem_2 = 7;
var shippingCharges = 180;

var totalCost = priceOfItem_1*quantityOfItem_1 + priceOfItem_2*quantityOfItem_2 + shippingCharges;

document.write("<h1>Shopping cart</h1>")
document.write("Price of 1st item is: Rs. "+priceOfItem_1+"<br>");
document.write("Orderd quantity of 1st item is: "+quantityOfItem_1+"<br>");
document.write("Price of 2nd item is: Rs. "+priceOfItem_2+"<br>");
document.write("Orderd quantity of 2nd item is: "+quantityOfItem_2+"<br>");
document.write("Shipping charges: Rs. "+shippingCharges+"<br>"+"<br>");

document.write("Total cost of your order is: Rs. "+totalCost+"<br>");

// ****************************** Task 8 ******************************

// ****************************** Task 9 ******************************

// ****************************** Task 10 ******************************

// ****************************** Task 11 ******************************

// ****************************** Task 12 ******************************

// ****************************** Task 13 ******************************

// ****************************** Task 14 ******************************




// ***************************** Chapter  **************************** 

// ****************************** Task 1 ******************************

// ****************************** Task 2 ******************************

// ****************************** Task 3 ******************************

// ****************************** Task 4 ******************************

// ****************************** Task 5 ******************************

// ****************************** Task 6 ******************************

// ****************************** Task 7 ******************************

// ****************************** Task 8 ******************************

