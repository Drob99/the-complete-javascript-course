// Q1: Basic DOM Manipulation
let mainTitle = document.getElementById('main-title');
mainTitle.innerText = 'Welcome to the DOM World';

// Q2: Event Handling
let submitBtn = document.getElementById('submit-btn');

function alertFunction() {
    alert('Button Clicked!');
}

submitBtn.addEventListener('click', alertFunction);

//Q3: Dynamic Styling
let highlightDiv = document.querySelector('.highlight');

function yellowBackground() {
    highlightDiv.style.background = 'yellow';
}

highlightDiv.addEventListener('mouseover', yellowBackground);

//Q4: Element Creation and Insertion
let listContainer = document.getElementById('list-container');
let newItem = document.createElement('li');
newItem.innerText = 'New Item';
listContainer.appendChild(newItem); // append it on the end

//Q5: Form Handling
let formExample = document.getElementById('form-example');
let testInput = document.querySelector('#form-example input');

function handleFormSubmit(event) {
    event.preventDefault();
    console.log(testInput.value);
}

formExample.addEventListener('submit', handleFormSubmit);

//Q6: Understanding Event Bubbling

let propBtn = document.querySelector('button') // tag selector
function stopBtnPropagation(event) {
    event.stopPropagation();
}

propBtn.addEventListener('click', stopBtnPropagation);

//Q7: Dynamic Page Styling
let toggleElement = document.getElementById('toggle-element');

function toggleStyle() {
    toggleElement.classList.toggle('active');
}

toggleElement.addEventListener('click', toggleStyle);

//Q8: Advanced Event Handling
let timeBtn = document.querySelector('button');
let paragraphElement = document.querySelector('p');

function displayCurrentTime() {
    paragraphElement.innerText = new Date();
}

timeBtn.addEventListener('click', displayCurrentTime);

//Q9: Event Listener Removal

document.getElementById('james-is-cool').removeEventListener('click', myFunction);

//Q10: Manipulating Attributes and Properties
let imgElement = document.querySelector('img');
imgElement.setAttribute('src', 'new-img.png');

//Q11: Utilizing Dataset Attributes

let informationDiv = document.getElementById('info');
console.log(informationDiv.dataset.userId);

// <div id="info" data-user-id="12345" data-user-role="admin"></div>
