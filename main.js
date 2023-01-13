
const raffleButton =  document.querySelector(".random-form")
const maxNumber = document.getElementById("max-value")
const randomH1 = document.querySelector(".random-num")



const num1 = 2
function randomNumber(number1, number2){
    number1 = Math.ceil(number1);
    number2 = Math.floor(number2);
    const random = Math.floor(Math.random() * (number2 - number1 + 1) + number1);
    randomH1.innerText =  `${random}`
}

 raffleButton.addEventListener("submit", function(event){
 event.preventDefault()
  randomNumber(num1, maxNumber.value)
 })




// Criar uma função com 2 argumentos numero1 e numero2 para gerar um número aleatório.


//Utilizar a função para que o número apareça no html.


