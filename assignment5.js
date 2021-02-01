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