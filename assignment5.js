function questionOne(){
    var numbers = [1, 3, 4, 6, 8, 9];
    function filterEven(number){
        return number%2 == 0
    }
    var a = numbers.filter(filterEven)
    console.log(a)
}

function questionTwo(){
    var input = prompt("Enter word: ");

    if(input.toLowerCase().split("").reverse().join("")==input.toLowerCase()){
        alert(input+" is a palindrome");
    }
    else{
        alert(input+" is a not a palindrome");

    }
}

function questionThree(){
    var students = ['hassan', 'salman', 'kamran', 'rashid', 'faizan', "noor"];
    function required(name){
        if(name.includes("an")){
            return document.write(name + ", ");
        }
    }
    students.forEach(required);
}


function questionFour(){
    var sentence = "The quick brown fox jumps over the lazy dog. The";
    var sentenceArray = sentence.split(" ");
    var count = 0;
    function countThe(word){
        if(word.toLowerCase() == "the"){
            count+=1
        }
    }
    sentenceArray.forEach(countThe);
    document.write("The number of 'the' in the sentence : "+count)
}

function questionFive(){
    var rows = prompt("Enter the number of rows : ")
    var matrix=[]
    for(i=0;i<rows;i++){
        var row = [];
        for(j=0;j<rows;j++){
            if(i==j){
                row.push("1")
            }
            else{
                row.push("0")
            }
        }
        matrix.push(row);
    }
    console.log(matrix);
}


function questionSix(){
    var a = [1,2,3,4,5]
    var gapCounter = 1
    for(i=a.length;i>0;i--){
        var n = a.join("")
        a.pop();
        
        console.log(n+" ".repeat(gapCounter) + "*".repeat(i))
        gapCounter+=1;

    }
}


function questionEight(){
    var firstOperand = prompt("Enter first number: ")
    var secondOperand = prompt("Enter second number: ")
    var operator = prompt("Enter Operator: ")
    function process(firstOperand,secondOperand,operator){
        if(operator == "+"){
            console.log(parseInt(firstOperand) + parseInt(secondOperand))
        }else if(operator == "-"){
            console.log(parseInt(firstOperand) - parseInt(secondOperand))
        }else if(operator == "*"){
            console.log(parseInt(firstOperand) * parseInt(secondOperand))
        }else if(operator == "/"){
            console.log(parseInt(firstOperand) / parseInt(secondOperand))
        }
    }
    process(firstOperand,secondOperand,operator);
}

function questionNine(){
    var firstName = prompt("Enter first name:")
    var lastName = prompt("Enter last name:")
    var rollNo = prompt("Enter Roll number:")
    var className = prompt("Enter Class name:")
    var midScore = prompt("Enter mid score:")
    var finalScore = prompt("Enter final score:")
    var classRole = prompt("Enter Class role:")

    var studentData = {"firstName":firstName,"lastName":lastName,"rollNo":rollNo, "className":className,
                    "midScore":midScore, "finalScore":finalScore, "classRole":classRole}
                
    console.log(studentData)
    return studentData;
}

function questionTen(){
    var studentData = questionNine();
    var name = studentData["firstName"]+studentData["lastName"];
    console.log("Full name is : ",name);
}
