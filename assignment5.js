function questionOne(){
    var numbers = [1, 3, 4, 6, 8, 9];
    function filterEven(number){
        return number%2 == 0
    }
    var a = numbers.filter(filterEven)
    console.log(a)
}

