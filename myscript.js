
function add_numbers(num1, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);    
    if(isNaN(num1) || isNaN(num2))
    {
        alert("Please follow instructions!");
        return false;
    }
    else{
        return num1 + num2;
    }
    
}
function subtract_numbers(num1, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);    
    if(isNaN(num1) || isNaN(num2))
    {
        alert("Please follow instructions!");
    }
    else{
        return num1 - num2;
    }
}
function multiply_numbers(num1, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);    
    if(isNaN(num1) || isNaN(num2))
    {
        alert("Please follow instructions!");
    }
    else{
        return num1 * num2;
    }
}
function divide_numbers(num1, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);    
    if(isNaN(num1) || isNaN(num2))
    {
        alert("Please follow instructions!");
    }
    else{
        if(num2>0){
            return num1 / num2;
        }
        else {
            alert("you cannot divide by zero!");
        }
    }
}

//var number1 = prompt("Give me a number"); 

 
function calculate() {

    
    /*var number1 = document.querySelector('#input').value;
    var operator=document.querySelector('#operator').value;
    var number2 = document.querySelector('#num2').value;*/

    switch(operator) {
        case '+':
            my_result = add_numbers(number_array[0], number_array[1]);
            //my_result = add_numbers(number1, number2);
            break;
        case '-':
            //my_result = subtract_numbers(number1, number2);
            my_result = subtract_numbers(number_array[0], number_array[1]);
            break;
        case '*':
            //my_result = multiply_numbers(number1, number2);
            my_result = multiply_numbers(number_array[0], number_array[1]);
            break;
        case '/':
            //my_result = divide_numbers(number1, number2);
            my_result = divide_numbers(number_array[0], number_array[1]);
            break;
        default:
            alert("Invalid operator!");
            break;

}
    if(my_result!==false){
    document.querySelector('#result').value=my_result;
        reset_calculator();
} 
    else{
    document.querySelector('#result').value="Error!";
    }
    
    
}


var number_array=['',''];
var number_index=0;
var operator='';
var error='';
var my_result=null;




function add_number(digit){
    if(my_result!==null){
        my_result=null;
        document.querySelector('#result').value='';
    }
    document.querySelector('#input').value+=digit;
    number_array[number_index]+=digit;
}

function add_operator(input_operator){
    if (my_result!==null){
        number_array[0]=my_result;
        my_result=null;
        number_array[1]='';
    }
    
    document.querySelector('#input').value+=input_operator;
    operator = input_operator;
    number_index=1;
}

function reset_calculator(){
    document.querySelector('#input').value='';
    number_array=['','']
    number_index=0;
}






