// ***************************** Chapter 21-25 **************************** 

// ****************************** Task 1 ******************************

// var fname = prompt("Enter your first name : ");
// var lname = prompt("Enter your last name : ");
// var fullName = fname + " " + lname;
// alert("Hello! "+fullName.toUpperCase());

// ****************************** Task 2 ******************************

// var favMobileModel = prompt("Enter your favorite mobile phone model : ");
// var len = favMobileModel.length;
// document.write("My favorite mobile phone model is : "+favMobileModel+"<br>");
// document.write("Length of string : "+len);

// ****************************** Task 3 ******************************

// var string = "Pakistani"
// var i = string.indexOf("n");
// document.write("String is : "+string+"<br>");
// document.write("Index of 'n' is : "+i);

// ****************************** Task 4 ******************************


// var string = "Hello World"
// var i = string.indexOf("l");
// document.write("String is : "+string+"<br>");
// document.write("Index of 'l' is : "+i);

// ****************************** Task 5 ******************************


// var string = "Pakistani"
// var char = string.charAt(3);
// document.write("String is : "+string+"<br>");
// document.write("Character at index 3 : "+char);

// ****************************** Task 6 ******************************

// var fname = prompt("Enter your first name : ");
// var lname = prompt("Enter your last name : ");
// var fullName = fname.concat(" ").concat(lname);
// alert("Hello! "+fullName.toUpperCase());

// ****************************** Task 7 ******************************

// var city = "Hyderabad";
// var newCity = city.replace("Hyder","Islam");
// document.write("City : "+city+"<br>");
// document.write("After replacements : "+newCity);

// ****************************** Task 8 ******************************

// var message = "Ali and Sami are best friends. They play cricket and football together."; 
// document.write("Message before replacements : "+message+"<br>");
// for(var i=0;i<message.length; i++){
//     if(message.slice(i,i+3)==="and"){
//         message=message.slice(0,i)+"&"+message.slice(i+3);
//     }
// }
// document.write("Message after replacements : "+message);

// or

// var message = "Ali and Sami are best friends. They play cricket and football together."; 
// document.write("Message before replacements : "+message+"<br>");
// var newMessage = message.replace(/and/,"&");
// document.write("Message after replacements : "+newMessage);

// ****************************** Task 9 ******************************

// var a = "472";
// document.write("Value : "+a+"<br>");
// document.write("Type : "+typeof(a)+"<br>");
// a = parseInt(a);
// document.write("Value : "+a+"<br>");
// document.write("Type : "+typeof(a)+"<br>");

// ****************************** Task 10 ******************************

// var input = prompt("Enter a string");
// document.write("User input : "+input+"<br>");
// var input = input.toUpperCase();
// document.write("Upper case : "+input+"<br>");

// ****************************** Task 11 ******************************

// var input = prompt("Enter a string");
// document.write("User input : "+input+"<br>");
// var input = input[0].toUpperCase() + input.slice(1).toLowerCase();
// document.write("Title case : "+input+"<br>");

// ****************************** Task 12 ******************************

// var a = 33.36;
// document.write("Number : "+a+"<br>");
// a=a.toString();
// for(var i=0;i<a.length;i++){
//     if(a[i]=="."){
//         a=a.slice(0,i)+a.slice(i+1)
//     }
// }
// document.write("String : "+a+"<br>");

// ****************************** Task 13 ******************************

// var usrname=prompt("Enter user name")
// for(var i=0;i<usrname.length;i++)
// {
//     if(usrname[i]==="!"||usrname[i]==="@"||usrname[i]===","||usrname[i]===".")
//     {
//         alert("Please enter a valid user name");
//     }
// }
// ****************************** Task 14 ******************************

// var A = ["cake", "apple pie", "cookie", "chips", "patties"] ;
// var order =prompt("Welcome to ABC bakery! What do yo want to order").toLowerCase();
// var i = A.indexOf(order);
// if(i!=-1){
//     document.write(order+" is avaliable at index "+i+" of bakery.")
// } 
// else{
//     document.write("Sorry! we dont have "+order.toUpperCase());
// }

// ****************************** Task 15 ******************************

// var password = prompt("Enter a password");
// var numFlag=false;
// var aplhaFlag=false;

// for(;;){

//     for(var i=0;i<password.length;i++){
//         if(password[i+1]>="1"&&password[i+1]<="9"){
//             numFlag=true
//         }
//         if(password[i]>="a"&&password[i]<="z"||password[i]>="A"&&password[i]<="Z"){
//             aplhaFlag=true
//         }
    
//     }

//     if(password.length<6){
//         alert("password is too short. enter a valid 6 digit password");
//         var password = prompt("Enter a password");
//     }
//     else if(password[0]>="1"&&password[0]<="9"){
//         alert("First letter should NOT be a number.");
//         var password = prompt("Enter a password");
//     }
//     else if(numFlag === false || aplhaFlag ==false){
//         alert("password should contain both numbers & alphabets.");
//         var password = prompt("Enter a password");    
//     }
//     else{
//         break;
//     }
        
// }
// ****************************** Task 16 ******************************

// var university = "University of Karachi";
// var arr = university.split("");
    
// for(var i=0;i<arr.length;i++){
//     document.write(arr[i]+"<br>");
// }

// ****************************** Task 17 ******************************

// var input = prompt("Enter any string");
// var lastCharacter = input.charAt(input.length-1);
// document.write("User input: "+input+"<br>");
// document.write("Last character: "+lastCharacter+"<br>");

// ****************************** Task 18 ******************************

// var string = "The quick brown fox jumps over the lazy dog";
// var count=0;
// for(var i=0;i<string.length;i++){
//     if(string.toUpperCase().slice(i,i+3)==="THE"){
//         count++;
//     }
// }
// document.write("Text: "+string+"<br>");
// document.write("There are "+count+" occurance(s) of string 'the'.<br>");


// ***************************** Chapter 26-30  **************************** 

// ****************************** Task 1 ******************************

// var input = +prompt("Enter a positive floating point number");
// document.write("Number : " + input + "<br>");
// document.write("Round off value : " + Math.round(input) + "<br>");
// document.write("Floor value : " + Math.floor(input) + "<br>");
// document.write("Ceiling value : " + Math.ceil(input) + "<br>");

// ****************************** Task 2 ******************************

// var input = +prompt("Enter a negative floating point number");
// document.write("Number : " + input + "<br>");
// document.write("Round off value : " + Math.round(input) + "<br>");
// document.write("Floor value : " + Math.floor(input) + "<br>");
// document.write("Ceiling value : " + Math.ceil(input) + "<br>");

// ****************************** Task 3 ******************************

// var input = +prompt("Enter a number.");
// var absoluteValue = Math.abs(input);
// document.write("The absolute value of " + input + " is "+ absoluteValue +".<br>");

// ****************************** Task 4 ******************************

// var random = Math.ceil(Math.random()*6);
// document.write("randome dice value : "+random+"<br>");

// ****************************** Task 5 ******************************

// var random = Math.ceil(Math.random()*2);

// if(random===1){
//     document.write(random+"<br>Random coin value : Tails");
// }
// else{
//     document.write(random+"<br>Random coin value : Heads");
// }

// ****************************** Task 6 ******************************

// var random = Math.ceil(Math.random()*100);
// document.write("randome value between 1-100 is : "+random+"<br>");

// ****************************** Task 7 ******************************

// var weight = prompt("Enter your weight in kilograms");
// var a="";
// for(var i=0; i<weight.length; i++){
//     if(weight[i]>=0 && weight[i]<=9 && weight[i]!=" " || weight[i]==="."){
//         a=a+weight[i];
//     }
// }
// document.write("The weight of user is "+a+" Kilograms.<br>");

// ****************************** Task 8 ******************************

// var secretNumber = Math.ceil(Math.random()*10);
// var input = +prompt("Enter number between 1 to 10 : ");

// if(input===secretNumber){
//     alert("Congratulation you guess correct number");
// }
// else{
//     alert("Sorry try again");
// }




// ***************************** Chapter 31-34  **************************** 

// ****************************** Task 1 ******************************
// ****************************** Task 2 ******************************
// ****************************** Task 3 ******************************
// ****************************** Task 4 ******************************
// ****************************** Task 5 ******************************
// ****************************** Task 6 ******************************
// ****************************** Task 7 ******************************
// ****************************** Task 8 ******************************
// ****************************** Task 9 ******************************
// ****************************** Task 10 ******************************
// ****************************** Task 11 ******************************
// ****************************** Task 12 ******************************
// ****************************** Task 13 ******************************
// ****************************** Task 14 ******************************
// ****************************** Task 15 ******************************
// ****************************** Task 16 ******************************
// ****************************** Task 17 ******************************
// ****************************** Task 18 ******************************




// ***************************** Chapter  **************************** 

// ****************************** Task 1 ******************************
// ****************************** Task 2 ******************************
// ****************************** Task 3 ******************************
// ****************************** Task 4 ******************************
// ****************************** Task 5 ******************************
// ****************************** Task 6 ******************************
// ****************************** Task 7 ******************************
// ****************************** Task 8 ******************************
// ****************************** Task 9 ******************************
// ****************************** Task 10 ******************************
// ****************************** Task 11 ******************************
// ****************************** Task 12 ******************************
// ****************************** Task 13 ******************************
// ****************************** Task 14 ******************************
// ****************************** Task 15 ******************************
// ****************************** Task 16 ******************************
// ****************************** Task 17 ******************************
// ****************************** Task 18 ******************************
