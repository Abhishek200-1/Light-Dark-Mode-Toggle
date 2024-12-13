const themeToggleCheckbox = document.getElementById('theme-toggle');

// Check for saved theme in local storage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleCheckbox.checked = true;
}

// Toggle theme on checkbox change
themeToggleCheckbox.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');

    // Save theme preference to local storage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
