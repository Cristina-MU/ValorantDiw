const client = new XMLHttpRequest();
client.open('GET', 'https://valorant-api.com/v1/agents?isPlayableCharacter=true');

client.onreadystatechange = () => {
    if (client.readyState === 4 && client.status === 200) {
        const agents = JSON.parse(client.responseText);

        agents.data.forEach(agent => {
            const link = document.createElement('a');
            link.href = `detailAgent.html?uuid=${agent.uuid}`;
            link.target = '_self';

            const img = document.createElement('img');
            img.src = agent.displayIconSmall;
            img.alt = agent.displayName;
            img.style.width = '150px';
            img.style.cursor = 'pointer';
            img.style.background = '#1f2937';
            img.style.borderRadius = '15px'; 
            img.style.height = '150px';
            img.style.padding = '20px';
            img.className = 'rounded hover:scale-110 transition-transform duration-200';

            link.appendChild(img);

            const container = document.querySelector('#container');
            container.appendChild(link);
        });
    }
};

client.send();