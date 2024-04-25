const blogs = JSON.parse(localStorage.getItem("blogs"));

for (let i = 0; i < blogs.length; i++) {
    const blog = blogs[i];
    const sectionEl = document.createElement("section")
}


let backButton = document.getElementById("#back-button");
backButton=addEventListener('click', function () {
    location.href = "index.html"
});

