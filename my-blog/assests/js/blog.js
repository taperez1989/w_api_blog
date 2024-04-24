// JSON.parse(localStorage.getItem("blogs"))

const ldMode = document.querySelector('#ld-mode');
const container = document.querySelector('.container');

let mode = 'dark';

ldMode.addEventListener('click', function () {
    if (mode === 'dark') {
        mode = 'light';
        container.setAttribute('class', 'light');
    }
    else {
        mode = 'dark';
        container.setAttribute('class', 'dark');
    }
});

const backButton = document.getElementById("#back-button");
backButton = addEventListener('click', function () {
    location.href = "index.html"
});

const Port = document.getElementById("#Port");
Port.addEventListener('click', function () {
    location.href = "https://taperez1989.github.io/TP_Dev_Port/"
 });