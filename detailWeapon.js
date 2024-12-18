document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const weaponUUID = urlParams.get('uuid');

    if (weaponUUID) {
        try {
            const response = await fetch(`https://valorant-api.com/v1/weapons/${weaponUUID}`);
            const data = await response.json();
            const weapon = data.data;

            document.querySelector('#weapon-name').textContent = weapon.displayName;

            const videoContainer = document.querySelector('#video-container');
            let videoURL = null;

            weapon.skins.forEach(skin => {
                skin.chromas.forEach(chroma => {
                    if (!videoURL && chroma.streamedVideo) {
                        videoURL = chroma.streamedVideo;
                    }
                });
            });

            if (videoURL) {
                videoContainer.innerHTML = `
                    <video class="w-full" controls>
                        <source src="${videoURL}" type="video/mp4">
                    </video>
                `;
            } else {
                videoContainer.innerHTML = '<p>No video available for this weapon.</p>';
            }

            const skinsContainer = document.querySelector('#skins-container');
            weapon.skins.forEach(skin => {
                if (skin.displayIcon) {
                    const img = document.createElement('img');
                    img.src = skin.displayIcon;
                    img.alt = skin.displayName;
                    img.className = 'w-24 h-12 rounded hover:scale-110 transition-transform duration-200';
                    skinsContainer.appendChild(img);
                }
            });
        } catch (error) {
            console.error('Error fetching weapon details:', error);
        }
    }
});