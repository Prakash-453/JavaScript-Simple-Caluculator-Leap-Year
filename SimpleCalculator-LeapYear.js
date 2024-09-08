1) Simple Calculator Using Conditional Statements

First_operand = parseInt(prompt("Enter the First Operand : "));
Second_operand = parseInt(prompt("Enter the Second Operand : "));
Operator = prompt("Enter the operator : ");
if (Operator == "+") {
    console.log(First_operand + Second_operand);
} else if (Operator == "-") {
    console.log(First_operand - Second_operand);
} else if (Operator == "*") {
    console.log(First_operand * Second_operand);
} else if (Operator == "/") {
    console.log(First_operand / Second_operand);
} else if (Operator == "%") {
    console.log(First_operand % Second_operand);
} else {
    console.log("Invaild Operator");
}

OUTPUT : 
Enter the First Operand : 8
Enter the Second Operand : 5
Enter the operator : *
40


2) Simple Calculator Using Switch Statements

a = +prompt("Enter the First Number : ")
b = +prompt("Enter the Second Number : ")
operator = prompt("Enter the operator : ")
switch (operator) {
    case '+': console.log(a + b)
        break;
    case '-': console.log(a - b)
        break;
    case '*': console.log(a * b)
        break;
    case '/': console.log(a / b)
        break;
    case '%': console.log(a % b)
        break;
    default: console.log("Invaild Operator")
}

OUTPUT : 
Enter the First Number : 8
Enter the Second Number : 3
Enter the operator : -
5

3) Write a Program to check whether year is Leap year or not 

let Year = parseInt(prompt("Enter the Year : "))
if ((Year % 400 == 0) || (Year % 4 == 0 && Year % 100 !== 0)) {
    console.log(`${Year} is a Leap Year`)
}
else {
    console.log(`${Year} is not a Leap Year`)
}

OUTPUT : 
Enter the Year : 2024
2024 is a Leap Year

