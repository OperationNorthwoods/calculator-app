const theme1 = document.querySelector('#theme-1')
const theme2 = document.querySelector('#theme-2')
const theme3 = document.querySelector('#theme-3')
const body = document.querySelector('body')

theme1.addEventListener('click', function (e) {
    body.className = "theme-1"
    console.log('theme 1')
});
theme2.addEventListener('click', function (e) {
    body.className = "theme-2"
    console.log('theme 2')
});
theme3.addEventListener('click', function (e) {
    body.className = "theme-3"
    console.log('theme 3')
});

// ============================================================ //
// premade arrays

const numgrid = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0']; // in order from top left button
const operand = ['+', '-', '/', '*'];

// ============================================================ //

const numbers = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const delres = document.querySelectorAll('.delres');
const del = document.querySelector('#del');
const res = document.querySelector('#res');
const decimal = document.querySelector('#decimal');
const equals = document.querySelector('#equals');
const screenNum = document.querySelector('#screenNum');
const workingMemory = [];
let workingEquation = { num1: '', num2: '', ans: '' }
const equation = [];
// const solution = [];
const operandStatus = { lastActive: false, lastActiveOperandNum: -1, firstTime: true };
let num1 = '';
let num2 = '';

// ============================================================ //

function operandStatusUpdater(a) {
    if (a === 69) {
        operandStatus.lastActive = true;
    }
    else {
        operandStatus.lastActive = false;
    }
};

function plus(a, b){
return a+b; }
function minus(a, b){
return a-b; }
function times(a, b){
return a*b; }
function by(a, b){
return a/b; }
// see which works, above, below, or both 
const ops = {plus: function(a,b){return a+b}, minus: function(a,b){return a-b}, times: function(a,b){return a*b}, by: function(a,b){return a/b},
}

// function solutionCalculation(...input) {
//     let l = input.length
//     if (l = 0) {
//         console.log('nothing to math on!')
//     } else {
//         // for i of input
//         // screenNum.innerText = (input[0])
//     }
// };

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function (e) {
        if (operandStatus.lastActive === false) {
            console.log(`number ${i} & false`);
            operandStatusUpdater();
            if (workingMemory.length > 0) {
                workingMemory.unshift(workingMemory[0] + numbers[i].innerText)
            } else {
                workingMemory.unshift(numbers[i].innerText)
            }
            screenNum.innerText = workingMemory[0];
        } else {
            workingMemory.length = 0;
            console.log(`number ${i} & true`);
            operandStatusUpdater();
            workingMemory.unshift(numbers[i].innerText)
            screenNum.innerText = workingMemory[0];
        }
    });
};
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function (e) {
        if (operandStatus.firstTime === true) {
            console.log(`operator ${i} & firstTime = true`);
            operandStatusUpdater(69);
            operandStatus.lastActiveOperandNum = i;
            operandStatus.firstTime = false;
            if (workingMemory.length > 0) {
                equation.push(parseInt(workingMemory[0]))
                equation.push(operand[i])
                workingEquation.num1 = workingMemory[0]
            } else { console.log(`nothing to ${operand[i]} by`) };

        } else {
            console.log(`operator ${i} & firstTime = false`);
            operandStatusUpdater(69);
            operandStatus.lastActiveOperandNum = i;
            operandStatus.firstTime = false

            if (workingMemory.length > 0) {
                equation.push(parseInt(workingMemory[0]))
                equation.push(operand[i])
                workingEquation.num2 = workingMemory[0];
                (workingEquation.num1)(operand[i])(workingEquation.num2) = (workingEquation.ans); //errors out
                workingEquation.num1 = workingEquation.ans;
                workingEquation.num2 = '';
            } else { console.log(`nothing to ${operand[i]} by`) };

        }
    })
};
del.addEventListener('click', function (e) {
    console.log('del')
});
res.addEventListener('click', function (e) {
    console.log('res')
});
// decimal.addEventListener('click', function (e) {
//     console.log('decimal')
// });
equals.addEventListener('click', function (e) {
    console.log('equals')
    equation.push(parseInt(workingMemory[0]))
    workingMemory.length = 0;
    // solutionCalculation(equation);
});