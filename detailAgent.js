const urlParams = new URLSearchParams(window.location.search);
const agentUUID = urlParams.get('uuid');

document.addEventListener('DOMContentLoaded', async () => {
    if (agentUUID) {
        try {
            const response = await fetch(`https://valorant-api.com/v1/agents/${agentUUID}`);
            const data = await response.json();

            const agent = data.data;

            document.querySelector('#agent-name').textContent = agent.displayName;
            document.querySelector('#agent-img').src = agent.fullPortrait;
            document.querySelector('#agent-description').textContent = agent.description;
            document.querySelector('#agent-role').textContent = `Role ${agent.role.displayName}`;

            const abilitiesContainer = document.querySelector('#abilities-images');
            agent.abilities.forEach(ability => {
                if (ability.displayIcon) {
                    const img = document.createElement('img');
                    img.src = ability.displayIcon;
                    img.alt = ability.displayName;
                    img.className = 'h-12 w-12 rounded hover:scale-110 transition-transform duration-200';
                    abilitiesContainer.appendChild(img);
                }
            });
        } catch (error) {
            console.error('Error fetching agent details:', error);
            document.querySelector('#agent-description').textContent = 'Failed to load agent details.';
        }
    }
});