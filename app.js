const hOne = document.querySelector("h1")
const form = document.querySelector("form")
const inputOne = document.querySelector("#inputOne")
const inputTwo = document.querySelector("#inputTwo")
const operator = document.querySelector("#operator")

let valueOne 
let valueTwo
let finalValue

form.addEventListener("submit", e =>{
    e.preventDefault()
    valueOne = inputOne.value
    valueTwo = inputTwo.value
    
    if(operator.value === "+"){
    finalValue = parseFloat(valueOne) + parseFloat(valueTwo)
    hOne.innerText = finalValue
}
else if (operator.value === "-"){
    finalValue = parseFloat(valueOne) - parseFloat(valueTwo)
    hOne.innerText = finalValue
}
else if (operator.value === "*"){
    finalValue = parseFloat(valueOne) * parseFloat(valueTwo)
    hOne.innerText = finalValue
}
else if (operator.value === "/"){
    finalValue = parseFloat(valueOne) / parseFloat(valueTwo)
    hOne.innerText = finalValue
}
else{
    hOne.innerText = "Error! Please try again."
}

    console.log(valueOne);
    console.log(operator.value);
    console.log(valueTwo);
    console.log(finalValue);
})






