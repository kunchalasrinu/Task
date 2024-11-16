// // Get all the boxes
// const boxes = document.querySelectorAll('.box');
// let totalPrice = document.querySelector(".total-price");

// // Add event listener to each box
// boxes.forEach(box => {
//     box.addEventListener('click', function () {
//         // Find the radio button inside the clicked box
//         const radioButton = box.querySelector('input[type="radio"]');
        
//         // Check the radio button
//         radioButton.checked = true;

//         // Hide all secound-sections
//         document.querySelectorAll('.secound-section').forEach(section => {
//             section.style.display = 'none';
//         });

//         // Show the secound-section of the clicked box
//         const secoundSection = box.querySelector('.secound-section');
//         if (secoundSection) {
//             secoundSection.style.display = 'block'; // Show the table
//         }

//         const price = parseFloat(box.getAttribute('data-price'));
//         totalPrice.textContent = Total Price: $${price.toFixed(2)};

//         box.classList.add('selected');
//         boxes.forEach(otherBox => {
//             if (otherBox !== box) {
//                 otherBox.classList.remove('selected');
//             }
//         });
//     });
// });

// Get all the boxes
const boxes = document.querySelectorAll('.box');

// Get the total price element
const totalPriceElement = document.querySelector('.total-price');

// Function to update the UI (show table and change border)
function updateUI() {
    boxes.forEach(box => {
        const radioButton = box.querySelector('input[type="radio"]');
        
        // Check if the radio button is checked
        if (radioButton.checked) {
            // Hide all secound-sections (tables)
            document.querySelectorAll('.secound-section').forEach(section => {
                section.style.display = 'none';
            });

            // Show the secound-section (table) of the clicked box
            const secoundSection = box.querySelector('.secound-section');
            if (secoundSection) {
                secoundSection.style.display = 'block'; // Show the table
            }

            // Get the price from the data-price attribute of the clicked box
            const price = parseFloat(box.getAttribute('data-price'));

            // Update the total price dynamically
            totalPriceElement.textContent = `Total: $${price.toFixed(2)} USD`;

            // Add the 'selected' class to the clicked box
            box.classList.add('selected');
        } else {
            // Remove the 'selected' class from the box if the radio is not checked
            box.classList.remove('selected');
        }
    });
}

// Add event listener to each box
boxes.forEach(box => {
    box.addEventListener('click', function () {
        // Find the radio button inside the clicked box
        const radioButton = box.querySelector('input[type="radio"]');
        
        // Check the radio button
        radioButton.checked = true;

        // Call updateUI to show the table and update the border color
        updateUI();
    });
});

// Call updateUI on page load to set the initial state based on the default checked radio button
document.addEventListener('DOMContentLoaded', updateUI);