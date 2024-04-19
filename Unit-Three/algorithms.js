class Leaf {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Creating the leaves
const head = new Leaf(1);
head.left = new Leaf(2);
head.right = new Leaf(3);
head.left.left = new Leaf(4);
head.left.right = new Leaf(5);
head.right.left = new Leaf(6);
head.right.right = new Leaf(7);
head.left.left.left = new Leaf(8);
head.left.left.right = new Leaf(9);
head.left.right.left = new Leaf(10);

// Arrays to store our results
let depth = [];
let breadth = [];

// Depth First Search function
function depthFirstSearch() {
    depth = [];
    function traverse(node) {
        if (node) {
            depth.push(node.value);
            traverse(node.left);
            traverse(node.right);
        }
    }
    traverse(head);
    displayDepthResults();
}

// Breadth First Search function
function breadthFirstSearch() {
    breadth = [];
    let queue = [head];
    while (queue.length > 0) {
        let current = queue.shift();
        breadth.push(current.value);
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    displayBreadResults();
}

// Function to display contents of arrays to our html page!
function displayDepthResults() {
    const output = document.getElementById('algorithms');
    output.innerHTML = `${depth.join(', ')}`;
}

function displayBreadResults() {
    const output = document.getElementById('algorithms2');
    output.innerHTML = `${breadth.join(', ')}`;
}