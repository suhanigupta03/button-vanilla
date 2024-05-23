function addButton() {
    const button = document.createElement('button');
    button.textContent = 'Get URL';
    button.addEventListener('click', getUrl);
    document.body.appendChild(button);
  }
  
  function getUrl() {
    const currentUrl = window.location.href;
    alert('Current URL: ' + currentUrl);
  }
  
  // Call addButton function when the script is loaded
  addButton();
