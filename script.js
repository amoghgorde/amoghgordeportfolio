// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('i');
const body = document.body;
const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');
const stars = document.querySelectorAll('.star');
const galaxyBg = document.querySelector('.galaxy-bg');

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

// Update theme icon
function updateThemeIcon(theme) {
    if (theme === 'light') {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
}

// Smooth theme switch
async function switchTheme(newTheme) {
    body.style.pointerEvents = 'none';
    
    // Animate celestial bodies
    if (newTheme === 'light') {
        moon.style.transform = 'scale(0) rotate(180deg)';
        await new Promise(r => setTimeout(r, 300));
        moon.style.display = 'none';
        sun.style.display = 'block';
        sun.style.transform = 'scale(1) rotate(0deg)';
    } else {
        sun.style.transform = 'scale(0) rotate(180deg)';
        await new Promise(r => setTimeout(r, 300));
        sun.style.display = 'none';
        moon.style.display = 'block';
        moon.style.transform = 'scale(1) rotate(0deg)';
    }
    
    // Apply theme
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    
    // Re-enable interactions
    setTimeout(() => {
        body.style.pointerEvents = 'auto';
    }, 600);
}

// Event listener
themeToggle.addEventListener('click', async () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    themeIcon.style.transform = 'rotate(180deg) scale(0.8)';
    await switchTheme(newTheme);
    themeIcon.style.transform = 'rotate(0deg) scale(1)';
});

// Initialize
initTheme();

// [Copy remaining JavaScript from your original script tag here]
