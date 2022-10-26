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

const number = document.querySelectorAll('.number')
const operator = document.querySelectorAll('.operator')
const delres = document.querySelectorAll('.delres')
const del = document.querySelector('#del')
const res = document.querySelector('#res')
const equals = document.querySelectorAll('.equals')

// number.addEventListener('click', function (e) {
//     console.log('number')
// });
// operator.addEventListener('click', function (e) {
//     console.log('operator')
// });
// delres.addEventListener('click', function (e) {
//     console.log('delres')
// });
del.addEventListener('click', function (e) {
    console.log('del')
});
res.addEventListener('click', function (e) {
    console.log('res')
});
// equals.addEventListener('click', function (e) {
//     console.log('equals')
// });

//=============//
// for (let i=1; i>10; i++) {
//     let n = document.querySelectorAll('.number')
//     n. //trying to iterator over all numbers and pull out the .innerText to determine their values.
//        //I could also just set them manually and it would be easier
// }
