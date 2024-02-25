// Get the element with the ID 'container' from the document and store it in a variable.
let container = document.getElementById('container');

// Loop 5 times to create 5 paragraphs.
for (let i = 0; i < 5; i++) {
    // Create a new paragraph element.
    let paragraph = document.createElement('p');
    // Set the text content of the paragraph to "Paragraph" followed by the loop counter + 1.
    paragraph.textContent = `Paragraph ${i + 1}`;
    // Append the newly created paragraph as a child to the container element.
    container.appendChild(paragraph);
}

// Define a function named 'changeColors'.
function changeColors() {
    // Change the background color of the entire document body to light blue.
    document.body.style.backgroundColor = 'lightblue'; // Choose any color
    // Change the background color of the container element to navy.
    container.style.backgroundColor = 'navy'; // Choose any color
    // Change the text color of the content inside the container to white.
    container.style.color = 'white'; // Text color
}
