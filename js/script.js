// Question 1

const heading3 = document.querySelector("h3");
heading3.innerText = "Hello";

// Question 2

const heading4 = document.querySelectorAll("h4");
console.log(heading4);

for (let i = 0; i < heading4.length; i++) {
    heading4[i].style.backgroundColor = "lightGray";
    heading4[i].style.marginBottom = "-20px";
}

// Question 3

const secondH4 = document.querySelector("h4.two");
console.log(secondH4);

secondH4.style.backgroundColor = "red";
console.log(secondH4);

// Question 4

const paragraph1 = document.querySelector("p.one");
console.log(paragraph1);