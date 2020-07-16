// ***************************** Chapter 38-42 **************************** 

// ****************************** Task 1 ******************************

// function power(a,b){
//     return a**b ;
// }
// var num1 = Number(prompt("Enter 1st number"));
// var num2 = Number(prompt("Enter 2nd number"));
// alert(num1+"^"+num2+"="+power(num1,num2));

// ****************************** Task 2 ******************************

// function isLeap(year){
//     if(year%4==0){
//         if(year%100){
//             if(year%400){
//                 alert(year + " is a leap year with 366 days");
//             }
//             else{
//                 alert(year + " is NOT a leap year and has 365 days");
//             }
//         }
//         else{
//             alert(year + " is a leap year with 366 days");
//         }
//     }
//     else{
//         alert(year + " is NOT a leap year and has 365 days");
//     }
// }

// var year = +prompt("Enter year to find whether year is leap year");
// isLeap(year);

// ****************************** Task 3 ******************************

// function calcTriangleArea(a,b,c){
//     var s = calcS(a,b,c);
//     var area = s*(s-a)*(s-b)*(s-c);
//     return area ;
// }

// function calcS(a,b,c){
//     var s = (a + b + c)/2
//     return s;
// }

// var sides = prompt("Enter three sides of triangle (comma separated) to compute area");

// var a = sides.split(",");
// var triangleArea = calcTriangleArea(parseInt(a[0]) , parseInt(a[1]) , parseInt(a[2]));
// alert("Area of triangle with sides "+a[0]+" , "+a[1]+" , "+a[2]+" is "+triangleArea);

// ****************************** Task 4 ******************************
// function calcAvg(a,b,c){
//     x = (a+b+c)/3;
//     return x;
// }
// function calcPercentage(avg){
//     var p = (avg/60)*100;
//     return p;
// }
// function main(){
//     var mark1 = +prompt("Enter marks (out of 60) in first subject  :");
//     var mark2 = +prompt("Enter marks (out of 60) in second subject :");
//     var mark3 = +prompt("Enter marks (out of 60) in third subject  :");

//     var average = calcAvg(mark1,mark2,mark3).toFixed(2);
//     var percentage = calcPercentage(average).toFixed(2);

//     alert("Average = " + average + "\nPercentage = " + percentage+"%");
// }

// main();

// ****************************** Task 5 ******************************

// function indexOf(text,subString){
//     var b =subString.length;
//     var found = false;
//     for(var a=0; a<text.length; a++) {
//         if(text.slice(a,a+b) === subString){
//             found = true;
//             break;
//         }
//     }
//     if(found){
//         return(a);
//     }
//     else{
//         return(-1);
//     }
// }

// var text = prompt("Enter text");
// var subString = prompt("Enter subString to find its first occurance in entered text");

// var index = indexOf(text,subString);
// alert("Index of \""+subString+"\" in \n\""+text+"\" is "+index);

// ****************************** Task 6 ******************************

// function delVowel(string){
//     for(var i=0;i<string.length;i++){
//         if(string[i]=="a" || string[i]=="e" || string[i]=="i" || string[i]=="o" || string[i]=="u" || string[i]=="A" || string[i]=="E" || string[i]=="I" || string[i]=="O" || string[i]=="U" ){
//             string=string.slice(0,i)+string.slice(i+1);
//             i--
//         }
//     }
//     return string
// }

// var text = prompt("Input string to delete vowel:")
// var withoutVowel = delVowel(text);

// alert("Vowel are deleted :).. \nOld string: \'" + text + "\'\nNew string: \'"+withoutVowel+"\'");

// ****************************** Task 7 ******************************

// var occurance = [];
// function countVowelPair(text) {
//     var pairStr = ""
//     var count = 0;
//     var pairCount = 0;
//     for (var i = 0; i < text.length; i++) {
//         switch (text[i]) {
//             case 'a':
//                 pairCount++; 
//                 pairStr+='a';
//                 if (pairCount == 2) { 
//                     pairCount = 0; count++;
//                     occurance.push(pairStr);
//                     pairStr = ""; 
//                 }
//                 break;
//             case 'e':
//                 pairCount++; 
//                 pairStr+='e';
//                 if (pairCount == 2) { 
//                     pairCount = 0; count++;
//                     occurance.push(pairStr);
//                     pairStr = ""; 
//                 }
//                 break;
//             case 'i':
//                 pairCount++; 
//                 pairStr+='i';
//                 if (pairCount == 2) { 
//                     pairCount = 0; count++;
//                     occurance.push(pairStr);
//                     pairStr = ""; 
//                 }
//                 break;
//             case 'o':
//                 pairCount++; 
//                 pairStr+='o';
//                 if (pairCount == 2) { 
//                     pairCount = 0; count++;
//                     occurance.push(pairStr);
//                     pairStr = ""; 
//                 }
//                 break;
//             case 'u':
//                 pairCount++; 
//                 pairStr+='u';
//                 if (pairCount == 2) { 
//                     pairCount = 0; count++;
//                     occurance.push(pairStr);
//                     pairStr = ""; 
//                 }
//                 break;
//             case 'A':
//                 pairCount++; 
//                 pairStr+='A';
//                 if (pairCount == 2) { 
//                     pairCount = 0; count++;
//                     occurance.push(pairStr);
//                     pairStr = ""; 
//                 }
//                 break;
//             case 'E':
//                 pairCount++; 
//                 pairStr+='E';
//                 if (pairCount == 2) { 
//                     pairCount = 0; count++;
//                     occurance.push(pairStr);
//                     pairStr = ""; 
//                 }
//                 break;
//             case 'I':
//                 pairCount++; 
//                 pairStr+='I';
//                 if (pairCount == 2) { 
//                     pairCount = 0; count++;
//                     occurance.push(pairStr);
//                     pairStr = ""; 
//                 }
//                 break;
//             case 'O':
//                 pairCount++; 
//                 pairStr+='O';
//                 if (pairCount == 2) { 
//                     pairCount = 0; count++;
//                     occurance.push(pairStr);
//                     pairStr = ""; 
//                 }
//                 break;
//             case 'U':
//                 pairCount++; 
//                 pairStr+='U';
//                 if (pairCount == 2) { 
//                     pairCount = 0; count++;
//                     occurance.push(pairStr);
//                     pairStr = ""; 
//                 }
//                 break;
//             default:
//                 pairCount = 0;
//                 pairStr = "";
//                 break
//         }
//     }
//     return count;
// }

// var str = prompt("Enter string to count pairs of successive vowels:");
// var totalVowelPair = countVowelPair(str);

// alert("String : \'" + str + "\'\nPair count = " + totalVowelPair + "\noccurance : " + occurance);

// ****************************** Task 8 ******************************

// function kmToMeter(km){
//     return (km*1000);
// }
// function kmToCentimeter(km){
//     return (km*1000*100)
// }
// function kmToFeet(km){
//     var feet = kmToCentimeter(km)/31;
//     return feet;
// }
// function kmToInches(km){
//     var inches = kmToFeet(km)*12
//     return inches;
// }

// var km = prompt("Enter distance between two cities (in km)","100");
// var m = kmToMeter(km);
// var cm = kmToCentimeter(km);
// var f = kmToFeet(km);
// var i = kmToInches(km);

// alert("distance Km          : "+km+"\ndistance in meters : "+m+"\ndistance in cm      : "+cm+"\ndistance in feets   : "+f+"\ndistance in inches : "+i);

// ****************************** Task 9 ******************************

// var totalHours = Math.round(+prompt("Enter total number of work hours (of whole week) of employee"));
// var otPay = overtimePay(totalHours)
// alert("Overtime Pay = Rs."+otPay);

// function overtimePay(totalHrs){
//     var overtimePay;
//     if(totalHours > 40){
//         overtimePay = (totalHrs-40)*12;
//     }
//     else{
//         overtimePay=0
//     }
//     return overtimePay;
// }

// ****************************** Task 10 ******************************

// function denominationNotes(amountWithdraw){
//     var hunderd = Math.floor(amountWithdraw/100);
//     var fifty = Math.floor((amountWithdraw%100)/50);
//     var ten = Math.floor((amountWithdraw%100)%50/10);
//     var coins = (amountWithdraw%100)%50%10;
//     document.write("You will have "+hunderd+" hunderd note(s) "+fifty+" fifty note(s) "+ten+" ten note(s) and "+coins+" coin(s).")
// }

// var withdraw = +prompt("Enter amount to withdraw ?");
// denominationNotes(withdraw);

// ***************************** Chapter 43-48  **************************** 

// ****************************** Task 1 ******************************

// function doAlert(message){
//     alert(message);
// }

// function call in html onClick attribute

// ****************************** Task 2 ******************************

// function displayMsg(message){
//     alert(message);
// }

// function call in html onClick attribute

// ****************************** Task 3 ******************************



// ****************************** Task 4 ******************************

// ****************************** Task 5 ******************************

// ****************************** Task 6 ******************************

// ****************************** Task 7 ******************************

// ****************************** Task 8 ******************************

// ****************************** Task 9 ******************************

// ****************************** Task 10 ******************************
