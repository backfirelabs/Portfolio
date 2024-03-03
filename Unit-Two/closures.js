// Define a function to create a character with specified attributes.
// The `...moves` syntax allows passing an arbitrary number of moves as arguments.
function createCharacter(name, hp, ...moves) {
    // These variables are private to the created object due to closure.
    // They cannot be accessed directly from outside this function.
    let privateName = name;
    let privateHp = hp;
    let privateMoves = moves;

    // Return an object that exposes four methods to interact with the private variables.
    return {
        // Method to get the character's HP.
        getHp: function() {
            // Returns the private HP variable.
            return privateHp;
        },
        // Method to get the character's name.
        getName: function() {
            // Returns the private name variable.
            return privateName;
        },
         // Add a method to get the character's moves.
         getMoves: function() {
            // Returns the private moves array.
            return privateMoves;
        },
        // Method to append the character's moves to a page element with class 'moves'.
        appendMovesToPage: function() {
            // Select the DOM element with the class 'moves'.
            const movesDiv = document.querySelector('.moves');
            // Loop through each move in the privateMoves array.
            for (const move of privateMoves) {
                // Create a new paragraph element for each move.
                const paragraph = document.createElement('p');
                // Set the text content of the paragraph to the current move.
                paragraph.textContent = move;
                // Append the paragraph to the 'moves' div, adding it to the page.
                movesDiv.appendChild(paragraph);
            }
        },
    };
}

// Example usage of the `createCharacter` function.
// Creates a character named Pikachu with 100 HP and three moves.
const character = createCharacter('Pikachu', 100, 'Thunder Shock', 'Quick Attack', 'Tail Whip');

// Call the `appendMovesToPage` method to add the moves to the webpage.
character.appendMovesToPage();
// Log the character's name using the `getName` method.
console.log(`Name: ${character.getName()}`);
// Log the character's HP using the `getHp` method.
console.log(`HP: ${character.getHp()}`);
// Use the new `getMoves` method to access and log the character's moves.
// `getMoves` returns the moves array, which is then joined into a string separated by commas for logging.
console.log(`Moves: ${character.getMoves().join(', ')}`);
