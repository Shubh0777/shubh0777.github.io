// script.js

function toggleDetails(cardId) {
    const card = document.getElementById(cardId);
    const cardBody = card.querySelector('.card-body');
    cardBody.style.display = cardBody.style.display === 'block' ? 'none' : 'block';
}

function toggleResponsibilities(roleId) {
    const role = document.getElementById(roleId);
    const responsibilities = role.nextElementSibling;
    responsibilities.style.display = responsibilities.style.display === 'block' ? 'none' : 'block';
}
