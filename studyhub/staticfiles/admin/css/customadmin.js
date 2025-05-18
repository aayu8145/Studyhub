document.addEventListener('DOMContentLoaded', function() {
    const modules = document.querySelectorAll('.module');
    modules.forEach((mod, i) => {
        mod.style.opacity = 0;
        mod.style.transform = 'translateY(20px)';
        setTimeout(() => {
            mod.style.transition = 'all 0.6s ease';
            mod.style.opacity = 1;
            mod.style.transform = 'translateY(0px)';
        }, i * 100);
    });
});
