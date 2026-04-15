function startJourney() {
  document.getElementById("welcome").classList.add("hidden");
  document.getElementById("timeline").classList.remove("hidden");

  let cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    card.style.display = "none";

    setTimeout(() => {
      card.style.display = "block";
    }, index * 2000);
  });

  // Move to final screen after all cards
  setTimeout(() => {
    document.getElementById("timeline").classList.add("hidden");
    document.getElementById("final").classList.remove("hidden");
  }, cards.length * 2000 + 2000);
}
