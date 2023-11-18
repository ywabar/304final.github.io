// Define a base URL that changes depending on the environment
let baseURL = ''; // Set a default value

if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    // If running locally, use local Flask server
    baseURL = 'http://127.0.0.1:5000'; // Update this with your Flask server's URL
} else {
    // For production or deployment on a different server
    baseURL = ''; // Add your production server's URL here
}

// Use the baseURL variable to construct the fetch URL
fetch(`${baseURL}/python-backend-endpoint`)
    .then(response => response.json())
    .then(data => {
        Object.keys(data).forEach(category => {
            // Get the element corresponding to the category ID in the HTML
            let categoryElement = document.getElementById(category.toLowerCase().replace(/ /g, ''));

            // Check if the element exists
            if (categoryElement) {
                // Create a <h2> tag for the category
                let heading = document.createElement('h2');
                heading.textContent = category;

                // Append the heading to the category element
                categoryElement.appendChild(heading);

                // Loop through each item in the category
                data[category].forEach(item => {
                    // Create a <p> tag for each item
                    let paragraph = document.createElement('p');
                    paragraph.textContent = item;

                    // Append the paragraph to the category element
                    categoryElement.appendChild(paragraph);
                });
            }
        });
    })
    .catch(error => {
        console.error('Error:', error);
        // Get the element with ID 'alert'
        let alertElement = document.getElementById('alert');

        // Change the class of the element
        if (alertElement) {
            // Remove existing classes
            alertElement.classList.remove('nothidden'); // Replace 'old-class' with the class to be removed

            // Add a new class
            alertElement.classList.add('hidden'); // Replace 'new-class' with the class to be added
        }

    });
