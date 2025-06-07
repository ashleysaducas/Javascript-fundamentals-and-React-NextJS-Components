// 1. Variables and Data Types - Simple Examples
(function demonstrateVariables() {
    // String - just regular text
    let myName = "Ash";
    let message = "Hello!";

    // Number - for math and counting
    let age = 20;
    let score = 100;

    // Boolean - just true or false
    let isSunny = true;
    let isRaining = false;

    // Array - a list of items
    let colors = ["red", "blue", "green"];

    // Object - storing information about something
    let person = {
        name: "Ash",
        age: 20,
        likesIceCream: true
    };

    // Show everything in a simple way
    let summary = `
        1. Text (Strings):
        My name is ${myName}
        I can say ${message}

        2. Numbers:
        Age: ${age}
        Score: ${score}

        3. True/False (Booleans):
        Is it sunny? ${isSunny}
        Is it raining? ${isRaining}

        4. List (Array):
        My favorite colors: ${colors.join(', ')}

        5. Information Group (Object):
        Person's name: ${person.name}
        Person's age: ${person.age}
        Likes ice cream? ${person.likesIceCream}
    `;

    // Put it on the webpage
    document.getElementById('variables-output').innerHTML = summary.replace(/\n/g, '<br>');
})();

// 2. Functions
// Function declaration
function calculateArea() {
    // Get values from input fields
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    
    // Check if inputs are empty
    if (!width || !height) {
        document.getElementById('functions-output').innerHTML = 'Please enter both width and height!';
        return;
    }

    // Calculate area
    const area = width * height;
    const output = document.getElementById('functions-output');
    output.innerHTML = `The area of a rectangle with width ${width} and height ${height} is: ${area}`;
}

// Arrow function
const greetUser = () => {
    const output = document.getElementById('functions-output');
    output.innerHTML = `Hello! Welcome to our JavaScript exercises.`;
};

// 3. Arrays
// Create an array to store numbers
let numbers = [];

// Function to add numbers to array
function addToArray() {
    const input = document.getElementById('arrayInput');
    const number = Number(input.value);
    
    if (input.value.trim() === '') {
        document.getElementById('arrays-output').innerHTML = 'Please enter a number!';
        return;
    }

    numbers.push(number);
    input.value = ''; // Clear input
    
    // Show current array
    document.getElementById('arrays-output').innerHTML = `
        Current Array: [${numbers.join(', ')}]
    `;
}

// Function to clear the array
function clearArray() {
    numbers = [];
    document.getElementById('arrays-output').innerHTML = 'Array cleared!';
}

// Function to demonstrate array methods
function demonstrateArrayMethods() {
    if (numbers.length === 0) {
        document.getElementById('arrays-output').innerHTML = 'Please add some numbers to the array first!';
        return;
    }

    // Array operations
    const doubled = numbers.map(num => num * 2);
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const average = sum / numbers.length;
    
    const output = document.getElementById('arrays-output');
    output.innerHTML = `
        Original Array: [${numbers.join(', ')}]<br>
        Doubled Numbers: [${doubled.join(', ')}]<br>
        Even Numbers Only: [${evenNumbers.join(', ')}]<br>
        Sum of All Numbers: ${sum}<br>
        Average of Numbers: ${average.toFixed(2)}
    `;
}

// 4. Objects
// Create a user object to store information
let user = {
    firstName: '',
    lastName: '',
    age: '',
    hobbies: [],
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

// Function to add a hobby
function addHobby() {
    const hobbyInput = document.getElementById('hobby');
    const hobby = hobbyInput.value.trim();
    
    if (hobby === '') {
        document.getElementById('objects-output').innerHTML = 'Please enter a hobby!';
        return;
    }

    user.hobbies.push(hobby);
    hobbyInput.value = ''; // Clear input
    
    // Show current hobbies
    document.getElementById('objects-output').innerHTML = `
        Current Hobbies: ${user.hobbies.join(', ')}
    `;
}

// Function to demonstrate objects
function demonstrateObjects() {
    // Update user object with current input values
    user.firstName = document.getElementById('firstName').value.trim();
    user.lastName = document.getElementById('lastName').value.trim();
    user.age = document.getElementById('userAge').value;

    // Check if required fields are filled
    if (!user.firstName || !user.lastName) {
        document.getElementById('objects-output').innerHTML = 'Please enter at least first and last name!';
        return;
    }

    const output = document.getElementById('objects-output');
    output.innerHTML = `
        Full Name: ${user.getFullName()}<br>
        Age: ${user.age || 'Not specified'}<br>
        Hobbies: ${user.hobbies.length > 0 ? user.hobbies.join(', ') : 'No hobbies added yet'}
    `;
}

// Function to clear user information
function clearUserInfo() {
    // Clear the object
    user = {
        firstName: '',
        lastName: '',
        age: '',
        hobbies: [],
        getFullName: function() {
            return `${this.firstName} ${this.lastName}`;
        }
    };

    // Clear input fields
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('userAge').value = '';
    document.getElementById('hobby').value = '';

    // Clear output
    document.getElementById('objects-output').innerHTML = 'User information cleared!';
}

// 5. DOM Manipulation
function updateText() {
    const inputElement = document.getElementById('textInput');
    const displayElement = document.getElementById('displayText');
    const newText = inputElement.value;
    
    if (newText.trim() !== '') {
        displayElement.textContent = newText;
        displayElement.style.color = getRandomColor();
        inputElement.value = '';
    }
}

function getRandomColor() {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// 6. Event Handling
function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');
    const newTodoText = todoInput.value.trim();

    if (newTodoText !== '') {
        // Create new todo item
        const li = document.createElement('li');
        li.className = 'todo-item';

        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            todoText.classList.toggle('completed');
        });

        // Create todo text
        const todoText = document.createElement('span');
        todoText.textContent = newTodoText;
        todoText.style.marginLeft = '10px';

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });

        // Assemble todo item
        li.appendChild(checkbox);
        li.appendChild(todoText);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);

        // Clear input
        todoInput.value = '';
    }
}

// Initialize the page by running the variables demonstration
document.addEventListener('DOMContentLoaded', function() {
    demonstrateVariables();
}); 