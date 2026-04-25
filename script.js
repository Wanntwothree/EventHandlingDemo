const form = document.getElementById('myForm');
const input = document.getElementById('userInput');
const output = document.getElementById('output');
const clearBtn = document.getElementById('clearBtn');
const box = document.getElementById('box'); // Ensure this element exists in HTML

form.addEventListener('submit', function(e) {
  e.preventDefault();
  output.textContent = input.value;
});

input.addEventListener('keyup', function(e) {
  console.log('Last key:', e.key);
});

input.addEventListener('focus', function() {
  this.style.border = '2px solid green';
});

input.addEventListener('blur', function() {
  this.style.border = '';
});

clearBtn.addEventListener('click', function() {
  input.value = '';
  output.textContent = '';
});

box.addEventListener('mouseover', function() {
  this.style.backgroundColor = 'yellow';
});

box.addEventListener('mouseout', function() {
  this.style.backgroundColor = '';
});   