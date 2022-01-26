// Question 1

const heading3 = document.querySelector("h3");
heading3.innerText = "Hello";

// ***************************************************


// Question 2

const heading4 = document.querySelectorAll("h4");
console.log(heading4);

for (let i = 0; i < heading4.length; i++) {
    heading4[i].style.backgroundColor = "lightGray";
    heading4[i].style.marginBottom = "-20px";
}

// ***************************************************


// Question 3

const secondH4 = document.querySelector("h4.two");
secondH4.style.backgroundColor = "red";
console.log(secondH4);

// ***************************************************


// Question 4

const paragraph1 = document.querySelector(".section.one");
paragraph1.style.color = "blue";
paragraph1.style.fontSize = "24px";
console.log(paragraph1);

// ***************************************************


// Question 5

const paragraph3 = document.querySelector(".section.three");
console.log(paragraph3);

paragraph3.innerHTML = `<span>Three: Nunc a quam tincidnt</span>`;
console.log(paragraph3);

// ***************************************************


// Question 6

const theDiv = document.querySelector(".content");
console.log(theDiv);

const existingHTML = theDiv.innerHTML;
const newParagraph = `<p>I'm the new paragraph</p>`;

theDiv.innerHTML += newParagraph;

// ***************************************************


// Question 7

const addClass = document.querySelectorAll(".content");
console.log(addClass);

// ***************************************************


// Question 8

const getUl = document.getElementById("services");
console.log(getUl);

const newLI = "<li>I'm the new list item</li>";

// ***************************************************


// Question 9

// ***************************************************


// Question 10

// ***************************************************