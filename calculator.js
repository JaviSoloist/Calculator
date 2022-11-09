
function buttonPressed(button) {
    let result = document.getElementById("result");
    result.innerHTML += button.value;
    return result
    }
 
    
    /*function sum(button){
        return result.innerHTML = result.innerHTML + button.value
        
    }
    function equals(){
       result.innerHTML = eval(result.innerHTML)
    }*/
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
            result.innerHTML = parseInt(firstNum, 10) + parseInt(result.innerHTML, 10);
        }
        return
    }
    
    function erase(){
        return result.innerHTML = result.innerHTML.slice(0, -1)
    }

    /* esto no va cristian. function clear(){
       return result.innerHTML = "";
    }*/