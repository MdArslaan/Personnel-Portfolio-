const headings = ["Web Developer", "UI UX Designer", "C++ Developer"];
let currentIndex = 0;

function changeHeading() {
    document.getElementById("heading").innerHTML = `<h1>${headings[currentIndex]}</h1>`;
    currentIndex = (currentIndex + 1) % headings.length;
}

setInterval(changeHeading, 2000); // Change heading every 3 seconds

function submitForm() {
    // Prevent the form from submitting as default
    event.preventDefault();

    // Get form elements
    const form = document.getElementById('contactForm');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const successMessage = document.getElementById('successMessage');

    // Validate form fields
    if (name.value && email.value && message.value) {
        // Display success message
        successMessage.innerText = 'Your message has been sent successfully!';
        successMessage.style.display = 'block';

        // Reset form fields
        name.value = '';
        email.value = '';
        message.value = '';

        // Submit the form
        form.submit();

        return true;
    } else {
        // Display error message or perform other error handling
        alert('Please fill in all required fields.');
        return false;
    }
}