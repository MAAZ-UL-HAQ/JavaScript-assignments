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
function calcAvg(a,b,c){
    x = (a+b+c)/3;
    return x;
}
function calcPercentage(avg){
    var p = (avg/60)*100;
    return p;
}
function main(){
    var mark1 = +prompt("Enter marks (out of 60) in first subject  :");
    var mark2 = +prompt("Enter marks (out of 60) in second subject :");
    var mark3 = +prompt("Enter marks (out of 60) in third subject  :");

    var average = calcAvg(mark1,mark2,mark3).toFixed(2);
    var percentage = calcPercentage(average).toFixed(2);

    alert("Average = " + average + "\nPercentage = " + percentage+"%");
}

main();

// ****************************** Task 5 ******************************

// ****************************** Task 6 ******************************

// ****************************** Task 7 ******************************

// ****************************** Task 8 ******************************

// ****************************** Task 9 ******************************

// ****************************** Task 10 ******************************



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
