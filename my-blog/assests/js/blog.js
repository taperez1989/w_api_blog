const blogs = JSON.parse(localStorage.getItem("blogs"));
const mainEl = document.querySelector("main");

// for loop to .getItem("blogs") and populate html

// i starts at 0, i is less than the length of array of objects, add one to i as it loops through.
for (let i = 0; i < blogs.length; i++) {
    const blog = blogs[i];

    const sectionEl = document.createElement("section");
    const divEl = document.createElement("div");
    const pEl = document.createElement("p");
    const h2El = document.createElement("h2");
    const h3El = document.createElement("h3");

    h3El.textContent = blog.userName;
    h2El.textContent = blog.title;
    pEl.textContent = blog.content;

    divEl.append(h2El, h3El, pEl);
    sectionEl.append(divEl);
    mainEl.append(sectionEl);

    
    // h2El.setAttribute( 'class', blog.userName);
    sectionEl.setAttribute('class', 'posts');
    console.log("inside loop");
    // divEl.classList.add('box')
};
console.log('outside loop');


const backButton = document.getElementById("back-button");
const Port = document.getElementById("Port");

// function for back button
function handleBackbuttonClick(event) {
    window.history.back();
}

// function portfolio link
function handlePortClick(event) {
    window.open("https://taperez1989.github.io/TP_Dev_Port/");
}

backButton.addEventListener('click', handleBackbuttonClick);
Port.addEventListener('click', handlePortClick);

// light and dark mode

const modeToggle = document.getElementById('Toggle');
const container = document.querySelector('.container');

Toggle.addEventListener('click', function () {
    if (container.classList.contains('light')) {
        container.removeAttribute('class');
        container.setAttribute('class', 'container dark');
    } else {
        container.removeAttribute('class');
        container.setAttribute('class', 'container light');
    }
});