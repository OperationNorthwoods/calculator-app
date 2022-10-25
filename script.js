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