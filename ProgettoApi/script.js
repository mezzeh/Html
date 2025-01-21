document.addEventListener('DOMContentLoaded', async () => {
    const contentDiv = document.getElementById('content');

    try {
        const response = await fetch('https://api.github.com/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const users = await response.json();

        const userList = document.createElement('ul');
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.login;
            userList.appendChild(listItem);
        });

        contentDiv.appendChild(userList);
    } catch (error) {
        console.error('Fetch error:', error);
        contentDiv.textContent = 'Failed to load data';
    }
});