const addBadge = function () {
  const cards = document.querySelectorAll("#welcome-summer .card");
  // Seleziona tutte le card nella sezione "Welcome Summer" (esercizio extra 16).

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const span = `<span class="badge bg-danger position-absolute end-0 mt-2 me-2">HOT</span>`;
    // Aggiunge un badge con la scritta "HOT" in alto a destra di ogni card.
    card.innerHTML += span;
  }
};
addBadge();
