// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
const input1 = document.getElementById("userInput1");
const button = document.getElementById("copy");
const output = document.querySelector(".output");

// add an event listener on the target element
button.addEventListener("click", function () {
  output.textContent = input1.value;
});

// callback function to handle event

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
const input2 = document.getElementById("userInput2");

// create output element for second section
const section2 = document.getElementById("inputEventExample");
const output2 = document.createElement("div");
output2.classList.add("output");
section2.appendChild(output2);

// add an event listener on the target element
input2.addEventListener("input", function () {
  output2.textContent = input2.value;
});

// callback function to handle event
