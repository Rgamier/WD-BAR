document.addEventListener('DOMContentLoaded', () => {
    // Set the first step as selected by default when the page loads
    document.querySelectorAll('.step')[0].classList.add('selected');

    // Add click event to each step
    document.querySelectorAll('.step').forEach(step => {
        step.addEventListener('click', () => {
            // Remove the 'selected' class from all steps
            document.querySelectorAll('.step').forEach(s => s.classList.remove('selected'));

            // Add the 'selected' class to the clicked step
            step.classList.add('selected');
        });
    });

    // Dropdown functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('.dropdown-button');
        const links = dropdown.querySelectorAll('.dropdown-content a');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                // Change the button text to the selected value
                button.textContent = e.target.textContent;
                
                // Optionally, add a class to highlight the selected option
                links.forEach(l => l.classList.remove('selected-option'));
                e.target.classList.add('selected-option');
            });
        });
    });
});
