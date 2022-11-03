//theme changing
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
const operandStatus = { lastActive: false, lastActiveIndex: -1, firstTime: true };
const numberStatus = { lastActive: false, lastActiveIndex: -1, firstTime: true };
// let num1 = '';
// let num2 = '';

// ============================================================ //
// premade functions
function operandStatusUpdater(a) {
    if (a === 69) {
        operandStatus.lastActive = true;
    }
    else {
        operandStatus.lastActive = false;
    }
};
function numberStatusUpdater(a) {
    if (a === 69) {
        numberStatus.lastActive = true;
    }
    else {
        numberStatus.lastActive = false;
    }
};

function plus(a, b) {
    return a + b;
}
function minus(a, b) {
    return a - b;
}
function by(a, b) {
    return a / b;
}
function times(a, b) {
    return a * b;
}

function solve() {
    if (operandStatus.lastActiveIndex === 0) {
        return plus(workingEquation.num1, workingEquation.num2)
    } else if (operandStatus.lastActiveIndex === 1) {
        return minus(workingEquation.num1, workingEquation.num2)
    } else if (operandStatus.lastActiveIndex === 2) {
        return by(workingEquation.num1, workingEquation.num2)
    } else if (operandStatus.lastActiveIndex === 3) {
        return times(workingEquation.num1, workingEquation.num2)
    }
}

// ============================================================ //
//numbers event listener 
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function (e) {
        if (operandStatus.lastActive === false) {
            console.log(`number ${i}`);
            console.log(`lastActive = false`);

            operandStatusUpdater();
            numberStatusUpdater(69);
            numberStatus.lastActiveIndex = i;
            if (workingMemory.length > 0) {
                workingMemory.unshift(workingMemory[0] + numbers[i].innerText)
            } else {
                workingMemory.unshift(numbers[i].innerText)
            }
            screenNum.innerText = workingMemory[0];
        } else {
            workingMemory.length = 0;
            console.log(`number ${i}`);
            console.log(`lastActive = true`);

            operandStatusUpdater();
            numberStatusUpdater(69);
            numberStatus.lastActiveIndex = i;
            workingMemory.unshift(numbers[i].innerText)
            screenNum.innerText = workingMemory[0];
        }
    });
};
//operator event listener
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function (e) {
        if (operandStatus.firstTime === true) {
            console.log(`operator ${i}`);
            console.log(`operator firstTime = true`);

            operandStatusUpdater(69);
            numberStatusUpdater();
            operandStatus.lastActiveIndex = i;
            operandStatus.firstTime = false;

            if (workingMemory.length > 0) {
                equation.push(parseInt(workingMemory[0]))
                equation.push(operand[i])
                workingEquation.num1 = parseInt(workingMemory[0])
            } else { console.log(`nothing to ${operand[i]} by & firstTime = true`) };

        } else {
            if (numberStatus.lastActive === true) {
                console.log(`operator ${i}`);
                console.log(`number last active = true`);

                operandStatusUpdater(69);
                numberStatusUpdater();
                operandStatus.lastActiveIndex = i;
                operandStatus.firstTime = false;

                if (workingMemory.length > 0) {
                    equation.push(parseInt(workingMemory[0]))
                    equation.push('=')
                    equation.push()
                    equation.push(operand[i]);
                    workingEquation.num2 === parseInt(workingMemory[0]);
                    screenNum.innerText && workingEquation.ans === solve();
                    workingEquation.num1 === workingEquation.ans;
                    workingEquation.num2 === '';
                    workingMemory.length = 0;
                } else { console.log(`nothing to ${operand[i]} by & firstTime = false`) };

            } else {
                console.log('error! operator has already been pressed! Please input a number.')
            }
        }
    })
};
// del.addEventListener('click', function (e) {
//     console.log('del')
// });
// res.addEventListener('click', function (e) {
//     console.log('res')
// });
// decimal.addEventListener('click', function (e) {
//     console.log('decimal')
// });

//equals button event listener
equals.addEventListener('click', function (e) {
    if (operandStatus.firstTime === true) {
        console.log('error! you need an operator')
    } else if (numberStatus.lastActive === true) {
        console.log('equals')
        equation.push(parseInt(workingMemory[0]))
        workingMemory.length = 0;
        // solutionCalculation(equation);
        solve();
    } else {

    }
});




// just in case i need this
// function solve(e) {
//     if (e === 'op') {
//         if (operandStatus.lastActiveIndex === 0) {
//             return plus(workingEquation.num1, workingEquation.num2)
//         } else if (operandStatus.lastActiveIndex === 1) {
//             return minus(workingEquation.num1, workingEquation.num2)
//         } else if (operandStatus.lastActiveIndex === 2) {
//             return by(workingEquation.num1, workingEquation.num2)
//         } else if (operandStatus.lastActiveIndex === 3) {
//             return times(workingEquation.num1, workingEquation.num2)
//         }
//     } else if (e === 'eq') {
//         if (operandStatus.lastActiveIndex === 0) {
//             return plus(workingEquation.num1, workingEquation.num2)
//         } else if (operandStatus.lastActiveIndex === 1) {
//             return minus(workingEquation.num1, workingEquation.num2)
//         } else if (operandStatus.lastActiveIndex === 2) {
//             return by(workingEquation.num1, workingEquation.num2)
//         } else if (operandStatus.lastActiveIndex === 3) {
//             return times(workingEquation.num1, workingEquation.num2)
//         }
//     } else {
//         return console.log('solve() input not validated')
//     }
