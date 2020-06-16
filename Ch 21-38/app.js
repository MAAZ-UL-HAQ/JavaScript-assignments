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
