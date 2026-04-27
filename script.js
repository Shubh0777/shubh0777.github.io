function toggleDetails(cardId) {
    const body = document.querySelector(`#${cardId} .card-body`);
    body.style.display = body.style.display === "block" ? "none" : "block";
}
