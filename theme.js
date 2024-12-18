document.addEventListener('DOMContentLoaded', () => {
    const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox');
    const body = document.body;
    const bgDetail = document.getElementById('bgDetail');
    const bgBody = document.getElementById('bgBody');

    const currentTheme = localStorage.getItem('theme') || 'light';
    applyTheme(currentTheme);

    themeToggleCheckbox.checked = currentTheme === 'dark'; 

    themeToggleCheckbox.addEventListener('change', () => {
        const newTheme = themeToggleCheckbox.checked ? 'dark' : 'light';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    function applyTheme(theme) {
        if (theme === 'light') {
            body.classList.remove('dark');
            body.classList.add('bg-gray-100', 'text-gray-900');
            document.querySelector('header').classList.replace('bg-gray-800', 'bg-gray-500');
            document.querySelector('footer').classList.replace('bg-gray-800', 'bg-gray-500');

            // Cambiar fondo de bgBody al modo claro
            if (bgBody) {
                bgBody.style.backgroundImage = "url('img/whitebg2.jpg')";
                bgBody.style.backgroundRepeat = "no-repeat";
                bgBody.style.backgroundSize = "cover";
                bgBody.style.backgroundPosition = "center";

            }

            // Cambiar fondo de bgDetail al modo claro
            if (bgDetail) {
                bgDetail.style.backgroundImage = "url('img/bgDetailC.jpg')";
                bgDetail.style.backgroundRepeat = "no-repeat";
                bgDetail.style.backgroundSize = "cover";
                bgDetail.style.backgroundPosition = "center";
            }
        } else {
            body.classList.add('dark');
            body.classList.remove('bg-gray-100', 'text-gray-900');
            body.classList.add('bg-gray-900', 'text-gray-100');
            document.querySelector('header').classList.replace('bg-gray-500', 'bg-gray-800');
            document.querySelector('footer').classList.replace('bg-gray-500', 'bg-gray-800');

            // Cambiar fondo de bgBody al modo oscuro
            if (bgBody) {
                bgBody.style.backgroundImage = "url('img/fondorojo2.png')";
                bgBody.style.backgroundRepeat = "no-repeat";
                bgBody.style.backgroundSize = "cover";
                bgBody.style.backgroundPosition = "center";

            }

            // Cambiar fondo de bgDetail al modo oscuro
            if (bgDetail) {
                bgDetail.style.backgroundImage = "url('img/bgDetailO.jpg')";
                bgDetail.style.backgroundRepeat = "no-repeat";
                bgDetail.style.backgroundSize = "cover";
                bgDetail.style.backgroundPosition = "center";

            }
        }
    }
});
