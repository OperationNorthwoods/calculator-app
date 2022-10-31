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

// ============================================================ //

const numbers = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const delres = document.querySelectorAll('.delres');
const del = document.querySelector('#del');
const res = document.querySelector('#res');
const decimal = document.querySelector('#decimal');
const equals = document.querySelector('#equals');
const total = document.querySelector('#total');
const workingMemory = [];
let workingEquation = ''
const equation = [];
const solution = [];
const operand = ['+', '-', '/', '*'];
const eq = [];
let isOperandLastActive = false;
const operandStatus = { lastActive: false, lastActiveOperandNum: -1, };

function operandStatusUpdater(a) {
    if (a = true) {
        operandStatus.lastActive = true;
        isOperandLastActive = true;
    }
    else {
        operandStatus.lastActive = false;
        isOperandLastActive = false;
    }
};

if (isOperandLastActive = true) {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', function (e) {
            console.log(`number ${i}`);
            operandStatusUpdater(false);
            if (workingMemory.length > 0) {
                workingMemory.unshift(workingMemory[0] + numbers[i].innerText)
            } else {
                workingMemory.unshift(numbers[i].innerText)
            }
            total.innerText = workingMemory[0];
        })
    };
} else {
    workingMemory = [];
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', function (e) {
            console.log(`number ${i}`);
            operandStatusUpdater(false);
            if (workingMemory.length > 0) {
                workingMemory.unshift(workingMemory[0] + numbers[i].innerText)
            } else {
                workingMemory.unshift(numbers[i].innerText)
            }
            total.innerText = workingMemory[0];
        })
    };
}
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function (e) {
        console.log(`operator ${i}`);
        operandStatusUpdater(true);
        operandStatus.lastActiveOperandNum = parseInt(operator[i].id);

        if (workingMemory.length > 0) {
            let newData = 0;
            equation.push(workingMemory[0])
            equation.push(operand[i])

        } else { console.log(`nothing to ${operand[i]} by`) };
        // for (let j = 0; j < operator.length; j++) {
        //     if (j = i) { operator[j].id = "isTrue" }
        //     else { operator[j].id = "" }
        // };
        // ^^^ this infiite loops for some reason??
        total.innerText = "";
    })
};
del.addEventListener('click', function (e) {
    console.log('del')
});
res.addEventListener('click', function (e) {
    console.log('res')
});
decimal.addEventListener('click', function (e) {
    console.log('decimal')
});
equals.addEventListener('click', function (e) {
    console.log('equals')
    for (let i = 0; i < equation.length; i++) {
        workingEquation = equation[i]
    }
});

//=============//
// for (let i=1; i>10; i++) {
//     let n = document.querySelectorAll('.number')
//     n. //trying to iterator over all numbers and pull out the .innerText to determine their values.
//        //I could also just set them manually and it would be easier
// }
