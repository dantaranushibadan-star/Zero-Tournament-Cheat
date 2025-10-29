function switchTab(section, language) {
    // Hide all tab contents for this section
    const tabContents = document.querySelectorAll(`#${section}-english, #${section}-tagalog`);
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Show selected tab content
    document.getElementById(`${section}-${language}`).classList.add('active');
    
    // Update tab buttons
    const tabButtons = document.querySelectorAll(`.language-tabs button`);
    tabButtons.forEach(button => {
        if (button.textContent.toLowerCase().includes(language)) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});