// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');
const body = document.body;
const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');

// Check for saved theme preference or use preferred color scheme
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
} else if (!prefersDark) {
    body.setAttribute('data-theme', 'light');
    updateThemeIcon('light');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    themeIcon.style.transform = 'scale(0)';
    setTimeout(() => {
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        themeIcon.style.transform = 'scale(1)';

        if (newTheme === 'light') {
            sun.style.transform = 'scale(0)';
            setTimeout(() => sun.style.transform = 'scale(1)', 300);
        } else {
            moon.style.transform = 'scale(0)';
            setTimeout(() => moon.style.transform = 'scale(1)', 300);
        }
    }, 300);
});

function updateThemeIcon(theme) {
    if (theme === 'light') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        moon.style.display = 'none';
        sun.style.display = 'block';
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        moon.style.display = 'block';
        sun.style.display = 'none';
    }
}

// Floating stars
const starsContainer = document.getElementById('stars');
const starCount = 150;

for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    const size = Math.random() * 3;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const opacity = Math.random() * 0.8 + 0.2;
    const duration = Math.random() * 5 + 3;
    const delay = Math.random() * 5;

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${posX}%`;
    star.style.top = `${posY}%`;
    star.style.setProperty('--opacity', opacity);
    star.style.setProperty('--duration', `${duration}s`);
    star.style.animationDelay = `${delay}s`;

    starsContainer.appendChild(star);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Apple-like nav effect
window.addEventListener('scroll', () => {
    document.body.classList.toggle('scrolled', window.scrollY > 50);
});

// Fade-in on load
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 50);
});
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';
