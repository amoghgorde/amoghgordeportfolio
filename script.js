// Theme Management
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');
const body = document.body;
const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');

// Initialize theme
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    } else if (prefersDark) {
        body.setAttribute('data-theme', 'dark');
        updateThemeIcon('dark');
    }
}

// [Rest of your JavaScript functionality]

// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    createStars();
    // Other initializations
});
