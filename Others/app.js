function mapping(){
    var numbers = [2,4,6,8];
    function mapped(number){
        return number*2
    }

    var output = numbers.map(mapped);
    document.write(output)
}

var a = prompt("Enter First number: ")
var b = prompt("Enter Second number: ")
function sum(a,b){
    var answer = ParseInt(a)+ParseInt(b)
    return(document.write(answer));  
}
function minus(a,b){
    return(document.write(a-b));  
}
function Add(a,b){
    var c = parseInt(a) + parseInt(b)

    // return c
    document.write(c)
}
function product(a,b){
    return(document.write(a*b));  
}
function divide(a,b){
    return(document.write(a/b));  
}
function upperCase(){
    var a = document.getElementById("paragraph").innerHTML;
    var upper = a.toUpperCase();
    document.getElementById("paragraph").innerHTML = upper;
}
function lowerCase(){
    var a = document.getElementById("paragraph").innerHTML;
    var lower = a.toLowerCase();
    document.getElementById("paragraph").innerHTML = lower;
}


