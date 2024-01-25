let container = document.getElementById('container');


for (let i = 0; i < 5; i++) {
    let paragraph = document.createElement('p');
    paragraph.textContent = `Paragraph ${i + 1}`;
    container.appendChild(paragraph);
}

function changeColors() {
    document.body.style.backgroundColor = 'lightblue'; // Choose any color
    container.style.backgroundColor = 'navy'; // Choose any color
    container.style.color = 'white'; // Text color
}

<button onclick="changeColors()">Change Colors</button>
