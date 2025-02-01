document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript loaded');
    const themeSelector = document.getElementById('theme-selector');
    const body = document.body;
    const logo = document.getElementById('site-logo');

    const savedTheme = localStorage.getItem('theme') || 'light';
    themeSelector.value = savedTheme;
    changeTheme(savedTheme);

    // ------------------ for theme changes ------------------
    
    themeSelector.addEventListener('change', function() {
        const selectedTheme = this.value;
        changeTheme(selectedTheme);
        localStorage.setItem('theme', selectedTheme);
    });

    function changeTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark');
            logo.src = 'byui-logo_blue.webp';
            logo.style.backgroundColor = 'white';
            logo.style.padding = '5px';
            logo.style.borderRadius = '5px';
        } else {
            body.classList.remove('dark');
            logo.src = 'byui-logo_blue.webp';
            logo.style.backgroundColor = 'transparent';
            logo.style.padding = '0';
            logo.style.borderRadius = '0';
        }
    }
});
