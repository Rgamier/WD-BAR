document.addEventListener('DOMContentLoaded', () => {s
    document.querySelectorAll('.step')[0].classList.add('selected');

    document.querySelectorAll('.step').forEach(step => {
        step.addEventListener('click', () => {

            document.querySelectorAll('.step').forEach(s => s.classList.remove('selected'));

            step.classList.add('selected');
        });
    });

    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('.dropdown-button');
        const links = dropdown.querySelectorAll('.dropdown-content a');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {

                button.textContent = e.target.textContent;
                
                links.forEach(l => l.classList.remove('selected-option'));
                e.target.classList.add('selected-option');
            });
        });
    });
});
