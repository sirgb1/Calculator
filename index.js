const expression = document.querySelector("#expression")
const defaultMessage = "CLICK ON THE BUTTONS TO ENTER AN EXPRESSION"
expression.textContent = defaultMessage
let isDefaultMessage = true
const re1 = /\d!/g
const re2 = /\^/g
const re3 = /sqrt/g


function isDefault() {
    if (expression.textContent === defaultMessage) {
        isDefaultMessage = true
    } else {isDefaultMessage = false}

    return isDefaultMessage
}

// getting all the digit buttons
const oneBtn = document.querySelector(".grid-item.digit-btn.one")
const twoBtn = document.querySelector(".grid-item.digit-btn.two")
const threeBtn = document.querySelector(".grid-item.digit-btn.three")
const fourBtn = document.querySelector(".grid-item.digit-btn.four")
const fiveBtn = document.querySelector(".grid-item.digit-btn.five")
const sixBtn = document.querySelector(".grid-item.digit-btn.six")
const sevenBtn = document.querySelector(".grid-item.digit-btn.seven")
const eightBtn = document.querySelector(".grid-item.digit-btn.eight")
const nineBtn = document.querySelector(".grid-item.digit-btn.nine")
const zeroBtn = document.querySelector(".grid-item.digit-btn.zero")
const eraseBtn = document.querySelector(".grid-item.erase-btn")

// getting all the operation buttons
const sqrtBtn = document.querySelector(".grid-item.operation-btn.sqrt-btn")
const openingBracketBtn = document.querySelector(".grid-item.operation-btn.opening-bracket-btn")
const closingBracketBtn = document.querySelector(".grid-item.operation-btn.closing-bracket-btn")
const powerBtn = document.querySelector(".grid-item.operation-btn.power-btn")
const factorialBtn = document.querySelector(".grid-item.operation-btn.factorial-btn")
const divisionBtn = document.querySelector(".grid-item.operation-btn.division-btn")
const multiplicationBtn = document.querySelector(".grid-item.operation-btn.multiplication-btn")
const additionBtn = document.querySelector(".grid-item.operation-btn.addition-btn")
const subtractionBtn = document.querySelector(".grid-item.operation-btn.subtraction-btn")
const resultBtn = document.querySelector(".grid-item.operation-btn.result-btn")


// making the digit buttons work
oneBtn.addEventListener("click", function() {
    if (isDefault()) {
        expression.innerHTML = `<p id="actual-expression">1</p>`
        actualExpression = document.querySelector("#actual-expression")
    } else {actualExpression.textContent += '1'}
})

twoBtn.addEventListener("click", function() {
    if (isDefault()) {
        expression.innerHTML = `<p id="actual-expression">2</p>`
        actualExpression = document.querySelector("#actual-expression")
    } else {actualExpression.textContent += '2'}
})

threeBtn.addEventListener("click", function() {
    if (isDefault()) {
        expression.innerHTML = `<p id="actual-expression">3</p>`
        actualExpression = document.querySelector("#actual-expression")
    } else {actualExpression.textContent += '3'}
})

fourBtn.addEventListener("click", function() {
    if (isDefault()) {
        expression.innerHTML = `<p id="actual-expression">4</p>`
        actualExpression = document.querySelector("#actual-expression")
    } else {actualExpression.textContent += '4'}
})

fiveBtn.addEventListener("click", function() {
    if (isDefault()) {
        expression.innerHTML = `<p id="actual-expression">5</p>`
        actualExpression = document.querySelector("#actual-expression")
    } else {actualExpression.textContent += '5'}
})

sixBtn.addEventListener("click", function() {
    if (isDefault()) {
        expression.innerHTML = `<p id="actual-expression">6</p>`
        actualExpression = document.querySelector("#actual-expression")
    } else {actualExpression.textContent += '6'}
})

sevenBtn.addEventListener("click", function() {
    if (isDefault()) {
        expression.innerHTML = `<p id="actual-expression">7</p>`
        actualExpression = document.querySelector("#actual-expression")
    } else {actualExpression.textContent += '7'}
})

eightBtn.addEventListener("click", function() {
    if (isDefault()) {
        expression.innerHTML = `<p id="actual-expression">8</p>`
        actualExpression = document.querySelector("#actual-expression")
    } else {actualExpression.textContent += '8'}
})

nineBtn.addEventListener("click", function() {
    if (isDefault()) {
        expression.innerHTML = `<p id="actual-expression">9</p>`
        actualExpression = document.querySelector("#actual-expression")
    } else {actualExpression.textContent += '9'}
})

zeroBtn.addEventListener("click", function() {
    if (isDefault()) {
        expression.innerHTML = `<p id="actual-expression">0</p>`
        actualExpression = document.querySelector("#actual-expression")
    } else {actualExpression.textContent += '0'}
})

eraseBtn.addEventListener("click", function() {
    if (isDefault()) {
        expression.textContent = expression.textContent
    } else {
        expression.textContent = defaultMessage
    }
})


// MAKING THE OPERATION BUTTONS WORK
sqrtBtn.addEventListener("click", function() {
    if (isDefault()) {
        expression.innerHTML = `<p id="actual-expression">sqrt</p>`
        actualExpression = document.querySelector("#actual-expression")
    } else {actualExpression.textContent += "sqrt"}
})

openingBracketBtn.addEventListener("click", function() {
    if (isDefault()) {
        expression.innerHTML = `<p id="actual-expression">(</p>`
        actualExpression = document.querySelector("#actual-expression")
    } else {actualExpression.textContent += "("}
})

closingBracketBtn.addEventListener("click", function() {
    if (isDefault()) {
        expression.innerHTML = `<p id="actual-expression">)</p>`
        actualExpression = document.querySelector("#actual-expression")
    } else {actualExpression.textContent += ")"}
})

powerBtn.addEventListener("click", function() {
    if (isDefault()) {
        expression.innerHTML = `<p id="actual-expression">^</p>`
        actualExpression = document.querySelector("#actual-expression")
    } else {actualExpression.textContent += "^"}
})

factorialBtn.addEventListener("click", function() {
    if (isDefault()) {
        expression.innerHTML = `<p id="actual-expression">!</p>`
        actualExpression = document.querySelector("#actual-expression")
    } else {actualExpression.textContent += "!"}
})

divisionBtn.addEventListener("click", function() {
    if (isDefault()) {
        expression.innerHTML = `<p id="actual-expression">/</p>`
        actualExpression = document.querySelector("#actual-expression")
    } else {actualExpression.textContent += "/"}
})

multiplicationBtn.addEventListener("click", function() {
    if (isDefault()) {
        expression.innerHTML = `<p id="actual-expression">*</p>`
        actualExpression = document.querySelector("#actual-expression")
    } else {actualExpression.textContent += "*"}
})

additionBtn.addEventListener("click", function() {
    if (isDefault()) {
        expression.innerHTML = `<p id="actual-expression">+</p>`
        actualExpression = document.querySelector("#actual-expression")
    } else {actualExpression.textContent += "+"}
})

subtractionBtn.addEventListener("click", function() {
    if (isDefault()) {
        expression.innerHTML = `<p id="actual-expression">-</p>`
        actualExpression = document.querySelector("#actual-expression")
    } else {actualExpression.textContent += "-"}
})

resultBtn.addEventListener("click", function() {
    if (isDefault()) {
        expression.textContent = expression.textContent
    } 
    
    else {
        actualExpressionContent = actualExpression.textContent
        actualExpressionContent = actualExpressionContent.replaceAll(re2, "**")
        actualExpressionContent = actualExpressionContent.replaceAll(re3, "Math.sqrt")
        console.log(actualExpressionContent)
        actualExpressionContent = eval(actualExpressionContent)
        actualExpression.textContent = actualExpressionContent
    }
})