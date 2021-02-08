function identityMatrix(){
    var matrix=[]
    for(i=0;i<3;i++){
        var row = [];
        for(j=0;j<3;j++){
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