export default function solveMath(expression) {


    // First, we will use a regular expression to remove any whitespace from the expression
    expression = expression.replace(/\s/g, '');
    console.log("expression: '" + expression + "'");
    // Next, we will use a stack to keep track of the operands and operators as we parse the expression
    const stack = [];
  
    // We will also use a regular expression to identify the operands and operators in the expression


    const operandRegex = /[\d.]+/;
    const operatorRegex = /[+\-*/^]/;
  
    // Now we will loop through the characters in the expression and process them one at a time
    for (let i = 0; i < expression.length; i++) {
      let character = expression[i];
  
      // If the character is an operand, we will push it onto the stack
      if (character.match(operandRegex)) {
        let operand = '';
        while (character.match(operandRegex)) {
          console.log("character: ");
          operand += character;
          character = expression[++i];
        }
        stack.push(parseFloat(operand));
      }
  
      // If the character is an operator, we will perform the appropriate operation
      // using the operands on the top of the stack
      if (character.match(operatorRegex)) {
        const operator = character;
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        let result;
        switch (operator) {
          case '+':
            result = operand1 + operand2;
            break;
          case '-':
            result = operand1 - operand2;
            break;
          case '*':
            result = operand1 * operand2;
            break;
          case '/':
            result = operand1 / operand2;
            break;
          case '^':
            result = Math.pow(operand1, operand2);
            break;
        }
        stack.push(result);
      }
    }
  
    // At the end of the loop, the stack should contain a single element, which is the result of the expression
    return stack[0];
  }
  