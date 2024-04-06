let myArray = [];

function update() {
  const outputParagraph = document.getElementById("output");
  outputParagraph.innerHTML = "";
  myArray.reduce((accumulator, currentValue, index) => {
    outputParagraph.innerHTML += `${index + 1}. ${currentValue}<br>`;
  }, "");
}

function pushItem() {
  const input = document.getElementById("input").value;
  myArray.push(input);
  update();
}

function popItem() {
    if (myArray.length > 0) {
        myArray.pop();
        update();
    } else {
        alert("Array is empty!");
    }
}


function unshiftItem() {
    const input = document.getElementById('input').value;
    if (input !== '') {
        myArray.unshift(input);
        update();
    } else {
        alert("Input is empty!");
    }
}


function shiftItem() {
    if (myArray.length > 0) {
        myArray.shift();
        update();
    } else {
        alert("Array is empty!");
    }
}


function arrMap() {
    const input = document.getElementById('input').value;
    if (input !== '') {
        myArray = myArray.map(item => input + item);
        update();
    } else {
        alert("Input is empty!");
    }
}

