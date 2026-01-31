const logo = document.querySelector(".navbar-brand");
const overlay = document.getElementById("gameOverlay");
const paws = document.querySelectorAll(".paw");
const closeBtn = document.getElementById("closeGame");

// Abrir juego al click en Guau!
logo.addEventListener("click", (e) => {
  e.preventDefault();
  overlay.classList.remove("d-none");
});


// limpiar estados por las dudas
paws.forEach((paw) => {
  paw.dataset.win = "false";
  paw.style.opacity = "1";
  paw.style.pointerEvents = "auto";
});

// elegir ganador random
const winnerIndex = Math.floor(Math.random() * paws.length);
paws[winnerIndex].dataset.win = "true";


// Click en huellas
const message = document.getElementById("gameMessage");

paws.forEach((paw) => {
  paw.addEventListener("click", () => {
    const isWinner = paw.dataset.win === "true";

    if (isWinner) {
      message.textContent = "🎉 ¡Ganaste!";
      message.className = "win";

      setTimeout(() => {
        overlay.classList.add("d-none");
        logo.classList.add("logo-win");

        setTimeout(() => {
          logo.classList.remove("logo-win");
          message.textContent = "";
        }, 1200);
      }, 800);
    } else {
      message.textContent = "❌ Ups, no era esa";
      message.className = "lose";

      paw.style.opacity = "0.3";
      paw.style.pointerEvents = "none";
    }
  });
});


// Cerrar juego
closeBtn.addEventListener("click", () => {
  overlay.classList.add("d-none");
});
