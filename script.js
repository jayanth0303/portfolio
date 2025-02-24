// script.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Message sent! Thank you, ' + name + '.');
        this.reset(); // Clear the form after submission
    } else {
        alert('Please fill in all fields.');
    }
});