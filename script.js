
document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('mainNav').classList.toggle('active');
});


document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('mainNav').classList.remove('active');
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});