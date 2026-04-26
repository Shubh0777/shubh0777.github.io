function toggleDetails(cardId) {
    const card = document.getElementById(cardId);
    const body = card.querySelector('.card-body');

    if (body.style.display === "block") {
        body.style.display = "none";
    } else {
        body.style.display = "block";
    }
}
