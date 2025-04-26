// 🌀 Page Load par loader dikhana
document.addEventListener('DOMContentLoaded', function () {
    console.log("Custom Admin JS Loaded Successfully! 🚀");

    // Example: Alert jab koi form submit kare
    const forms = document.querySelectorAll('form');
    forms.forEach(function(form) {
        form.addEventListener('submit', function(event) {
            alert('Form is being submitted! 🚀');
        });
    });

    // Example: Admin buttons ko animation dena
    const buttons = document.querySelectorAll('button, input[type="submit"]');
    buttons.forEach(function(button) {
        button.addEventListener('mouseover', function() {
            button.style.transform = "scale(1.05)";
            button.style.transition = "all 0.3s ease";
        });
        button.addEventListener('mouseout', function() {
            button.style.transform = "scale(1)";
        });
    });

    // Example: Smooth scroll to top button
    const topButton = document.createElement('button');
    topButton.innerText = '⬆ Top';
    topButton.style.position = 'fixed';
    topButton.style.bottom = '30px';
    topButton.style.right = '30px';
    topButton.style.padding = '10px';
    topButton.style.backgroundColor = '#4a90e2';
    topButton.style.color = 'white';
    topButton.style.border = 'none';
    topButton.style.borderRadius = '5px';
    topButton.style.cursor = 'pointer';
    topButton.style.zIndex = 1000;
    document.body.appendChild(topButton);

    topButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
