document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('https://valorant-api.com/v1/weapons');
        const data = await response.json();

        const armitas = document.querySelector('#armitas');

        data.data.forEach(weapon => {
            const img = document.createElement('img');
            img.src = weapon.displayIcon;
            img.alt = weapon.displayName;
            img.className = 'cursor-pointer w-48 h-24 hover:scale-110 transition-transform duration-200';

            img.addEventListener('click', () => {
                window.location.href = `detailWeapon.html?uuid=${weapon.uuid}`;
            });

            armitas.appendChild(img);
        });
    } catch (error) {
        console.error('Error fetching weapons:', error);
    }
});