function getCurrentURL() {
    var currentURL = window.location.href;
    alert("Current URL: " + currentURL);
}
var button = document.createElement('button');
button.textContent = 'Get Current URL';

button.addEventListener('click', getCurrentURL);

var buttonContainer = document.getElementById('buttonContainer');
buttonContainer.appendChild(button);