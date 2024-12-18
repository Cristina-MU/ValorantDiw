const mapas = new XMLHttpRequest();
mapas.open('GET', 'https://valorant-api.com/v1/maps');

mapas.onreadystatechange = () => {
    if (mapas.readyState === 4 && mapas.status === 200) {
        const response = JSON.parse(mapas.responseText);
        const maps = response.data;

        const mapContainer = document.getElementById('map-container');

        maps.forEach(map => {
            const mapCard = document.createElement('div');
            mapCard.className = 'bg-gray-800 p-4 rounded-[15px] shadow-md flex flex-col space-y-4 border';

            const titleAndMiniMap = document.createElement('div');
            titleAndMiniMap.className = 'flex justify-between items-center mb-4';

            const mapTitle = document.createElement('h2');
            mapTitle.textContent = map.displayName || 'Unknown Map';
            mapTitle.className = 'text-4xl font-bold text-white';

            const miniMap = document.createElement('img');
            miniMap.src = map.displayIcon;
            miniMap.alt = `${map.displayName} Mini Map`;
            miniMap.className = 'w-24 h-24';

            const mapImage = document.createElement('img');
            mapImage.src = map.splash;
            mapImage.alt = `${map.displayName} Map`;
            mapImage.className = 'w-full rounded-[15px] shadow';

            titleAndMiniMap.appendChild(mapTitle);
            titleAndMiniMap.appendChild(miniMap);

            mapCard.appendChild(titleAndMiniMap);
            mapCard.appendChild(mapImage);
            mapContainer.appendChild(mapCard);
        });
    }
};

// Enviar la solicitud
mapas.send();
