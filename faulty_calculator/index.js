let random = Math.random()

console.log(random)
let a = prompt("Enter first number: ")
let b = prompt("Enter expression: ")
let c = prompt("Enter second number: ")

let wrong_expression = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if(random > 0.1){
    alert(`The result is: ${eval(`${a} ${b} ${c}`)}`)
}
else{
    b = wrong_expression[b]
    alert(`The result is: ${eval(`${a} ${b} ${c}`)}`)
}