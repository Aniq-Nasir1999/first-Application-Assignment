function getNumber(num){
    
    var result = document.getElementById("result");
    result.value += num;
}
function clearResult(){

    var empty = document.getElementById("result");
    empty.value = " ";
}
function getResult(){
    var ans = document.getElementById("result");
    result.value = eval(result.value);
}