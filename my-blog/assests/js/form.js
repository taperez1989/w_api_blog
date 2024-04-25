// This grabs the form element by its unique ID

const blogSubmit = document.getElementById("blog-submit");

// by using "submit" instead of "click" its listening specifically for the submit button event vs a click event any where on the page 

blogSubmit.addEventListener("submit", function (event) {
    event.preventDefault()
    console.log("buttonclick");
    


     // grabs all the values submitted from the form tag in html
    
    const userName = document.getElementById("userName").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;


    if (userName === '' || title === '' || content === '') {
        window.alert("fill form");

        return;
    };

    // created an object that holds all the values/information that was submitted for use later in the code
    
    const blog = {
        userName,
        title,
        content,
    }

    // JSON.parse is a static method parses a JSON string, constructing
    // the js value/object described by the string.
    // grabs "blogs" from local storage

    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];


    // pushes new values into an array/object (const blog LN 11)

    blogs.push(blog);

    // stringify converts a js value into a JSON string LN 19
    // .setItem when passed a key name and value, will add that key to the given Storage object, or update that key's value if it already exists.
    
    localStorage.setItem("blogs", JSON.stringify(blogs));

    // this redirects you to another webpage

    location.href = "blog.html";
});
