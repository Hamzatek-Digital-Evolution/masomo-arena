// public/js/main.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const inquiry = document.getElementById('inquiry').value;
    const message = document.getElementById('message').value;

    const formData = {
        name: name,
        email: email,
        phone: phone,
        inquiry: inquiry,
        message: message
    };

    // Replace this URL with your actual Cloud Function's URL after deployment
    const cloudFunctionUrl = 'YOUR_CLOUD_FUNCTION_URL_HERE'; 

    fetch(cloudFunctionUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        // Display a confirmation message and clear the form
        document.getElementById('contactForm').reset();
        document.getElementById('confirmationMessage').classList.remove('hidden');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
});