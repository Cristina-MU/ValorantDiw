// Seleccionar elementos del DOM
const menuToggle = document.getElementById('menu-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

const imgHome = document.getElementById('imgHome');
const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox');

menuToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
});

const currentTheme = localStorage.getItem('theme') || 'light';
themeToggleCheckbox.checked = currentTheme === 'dark';
applyResponsiveImage();

themeToggleCheckbox.addEventListener('change', applyResponsiveImage);

window.addEventListener('resize', applyResponsiveImage);

function applyResponsiveImage() {
    const isTablet = window.matchMedia('(min-width: 768px) and (max-width: 1024px)').matches;
    const isDesktop = window.matchMedia('(min-width: 1025px)').matches;
    const isDarkTheme = themeToggleCheckbox.checked;

    if (isTablet) {
        imgHome.src = isDarkTheme ? 'img/bgHomeOTab.jpg' : 'img/bgHomeCTab.jpg';
    } else if (isDesktop) {
        imgHome.src = isDarkTheme ? 'img/bgHomeOPC.jpg' : 'img/bgHomeCPC.jpg';
    } else {
        // Modo móvil
        imgHome.src = isDarkTheme ? 'img/fondoHome.png' : 'img/white-Home-mb.png';
    }
}
