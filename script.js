function toggleDetails(cardId) {
    const card = document.getElementById(cardId);
    const body = card.querySelector('.card-body');

    body.style.display = body.style.display === "block" ? "none" : "block";
}
