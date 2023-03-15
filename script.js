let buttons = document.querySelectorAll('#btn')
let operators = document.querySelectorAll('#op')
let main = document.querySelector('.main')
let mini = document.querySelector('.mini')
let equals = document.getElementById('equal')
let clear = document.getElementById('clear')
let answer = 0;

const add = (a,b) => a+b
const subtract = (a,b) => a-b
const multiply = (a,b) => a*b
const divide = (a,b) => {
    if(b == 0) {
        alert('A number cannot be divided by zero')
    }
    else{
        return a/b
    }
}

function equal(num1, sign, num2) {
    if(sign == '+'){
      answer = parseFloat(add(num1,num2))
      console.log(answer)

    }
    else if(sign == '-'){
        answer = parseFloat(subtract(num1,num2))
    }
    else if(sign == '*'){
        answer = parseFloat(multiply(num1, num2))
    }
    else if(sign == '/'){
        answer = parseFloat(divide(num1,num2))
    }
}


let currentValue = ''
let previousValue = ''
let operator;
let arr = []


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        main.textContent += e.target.value;
        currentValue = parseFloat(main.textContent)
        arr.push(currentValue)
        
        clear.addEventListener('click', () => {
            main.textContent = ''
            mini.textContent = ''
            previousValue = '0'
            currentValue = '0'
        })

        
    })

    
})


equals.addEventListener('click',() => {
    equal(parseFloat(previousValue),operator,parseFloat(currentValue))
    main.textContent = ''
    main.textContent += answer
    mini.textContent =  previousValue + ' ' + operator + ' ' + currentValue
    
})


operators.forEach((op) => {
    op.addEventListener('click', (o) => {
        if(answer == 0){
            previousValue = arr.pop()
            mini.textContent = previousValue
            mini.textContent += ' ' + o.target.value
            main.textContent = ''
            operator = o.target.value
            equal(parseFloat(previousValue),operator,parseFloat(currentValue))

        }
        else{
            equal(parseFloat(previousValue),operator,parseFloat(currentValue))
            previousValue = answer
            mini.textContent = previousValue
            mini.textContent += ' ' + o.target.value
            main.textContent = ''
            operator = o.target.value
        }
    })

})


