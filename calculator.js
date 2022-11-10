
function buttonPressed(button) {
    let result = document.getElementById("result");
    result.innerHTML += button.value;
    return result
    }
 
    let firstNum = ""
    let operator = ""

    function getNumAndOperator(button){
        firstNum = result.innerHTML;
        operator = button.value;
        result.innerHTML = ""
    return  
    }

function equals(){
    if(operator === "+"){
        result.innerHTML = parseFloat(firstNum, 10) + parseFloat(result.innerHTML, 10);
    }
    if(operator === "-"){
        result.innerHTML = parseFloat(firstNum, 10) - parseFloat(result.innerHTML, 10);
    }
    if(operator === "*"){
        result.innerHTML = parseFloat(firstNum, 10) * parseFloat(result.innerHTML, 10);
    }
    if(operator === "/"){
        result.innerHTML = parseFloat(firstNum, 10) / parseFloat(result.innerHTML, 10);
    }
    return
    }
    
    function erase(){
        return result.innerHTML = result.innerHTML.slice(0, -1)
    }
    function reset(){
        result.innerHTML = ""
    }