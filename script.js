const inputData = document.getElementById("inputData"),
      toggleIcon = document.querySelector('.icons'),
      body = document.body;


//stores whole expression in this.
let expression = "";

//function for typing numbers and display 
function appendNumber(number) {
  expression += number;
  inputData.value = expression;
}

//function for display operators
function appendOperator(operator) {
  expression += operator;
  inputData.value = expression
}

//this function will clear all the expression
function clearAll() {
  inputData.value = '';
  expression = '';
}

// delete the expression from last
function deleteInput() {
  expression = expression.slice(0,-1);
  inputData.value = expression;
}

//function for calculate the expression and catch any error
function calculate(){
  try{
    let result = eval(expression);
    inputData.value = result;
    expression = result.toString();
  }
  catch(error){
    inputData.value = 'Error';
    expression = '';
  }
}

//function for decimal point
function appendDot() {
  // Check if the last expression is a number and contains a decimal point
  let lastNumber = expression.split(/[\+\-\*\/]/).pop();  //split by operators and retrieve last number.
  
  // if the last number does not contain a decimal point
  if (!lastNumber.includes('.')) {  
    expression += '.';
    inputData.value = expression;
  }
}

//for toggle(light to dark mode)
toggleIcon.addEventListener('click', () =>{
  if(body.classList.contains('light-mode')){
  body.classList.toggle('dark-mode');
  }
})