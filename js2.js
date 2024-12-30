//  1task

var age = 27;
if (age > 18){
    document.writeln("you are an adult" + "<br>")
}

// 2

var score = 45;
if (score <= 50 ){
    document.write("you faild the test" + "<br>")
}
// 3

var name = "john";
if (name = "john" ){
    document.writeln(" hello hohn" + "<br>")
}

// 4
var day = "monday";
if (day !== "saturday" && day !== "sunday" ){
    document.writeln(" its a weekday" + "<br>")
}

//  حل تاني الها 


// var day = "monday";
// if (day !== "saturday" , "sunday" ){
//     document.writeln(" its a weekday")
// }

// 5

var num = 4 ;
if (num % 2===0 ){
    document.writeln(" the number is even" + "<br>")
}

// 6

var char = "a" ;
if (char === 'a'){  
    document.writeln(" its a letter" + "<br>")
}
// 7

var list = [ 1 , 2 ,3 ] ;
if (Array.isArray(list)){  
    document.writeln(" its an array " + "<br>")
}

// 8


var x = 5 ;
if ( x > 0){
    document.writeln(" x is a positive number" + "<br>")
}

// 9


var y = -5 ;
if ( y < 0){
    document.writeln(" x is a negative number" + "<br>")
}

// 10

var z = 9 ;
if ( z % 3 === 0 ){
    document.writeln(" z is a muitiple of 3 " + "<br>") 
}

// 11

let GPA = "very good" ;
switch (GPA) {
    case "excellent":
        document.write("excellent")
        break;
        case "very good" :
            document.write("very good" + "<br>")
            break;
 
            case  "good" :
                document.write( "good")
                break;
     case "falied":
        document.write("falied")
        break;
        default:
            document.write ("keep going")
}

// 12

// let month = january ;
//  if( month= january || december || february ){
//     document.write( month +"is a winter")
//  }

// let month = "january" ;
// if ( ["january" , " december" , " feb"]).includes(month){
//     document.write( ' $ {month} is a winter');
// }

// 13


var password = "mypassword123";
if ( password >= '8'){
    document.writeln(" Your password is strong" + "<br>")
}
//  14

let enteremail = "admin@admin.com";
let enterpassword = "12345Admin";

const correctemail = "admin@admin.com";
const correctpassword = "12345Admin";

if ( enteremail !== correctemail){
        document.write("incorrectemail");
    }

    else if ( enterpassword !== correctpassword  ) {
        document.write("incorrectpassword");
    }
   else {
    document.write("welcome" + "<br>");

   }

//    15
//    document.write(isValidNumber(11));
console.log(Number.isInteger("4"))
console.log(Number.isInteger(4))
console.log(Number.isInteger("4fdf"))
console.log(Number.isInteger("1.5"))
