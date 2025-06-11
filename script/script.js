const doForm = document.getElementById(`to-do`);
doForm.addEventListener(`submit`, (e) => {
  e.preventDefault();
  const coseDaFare = document.getElementById(`things`);

  const aggiunte = { things: coseDaFare.value };

  console.log(`Cose da fare`, aggiunte);

  const longCard = document.createElement(`div`);

  longCard.classList.add(`toDo-card`);

  longCard.innerHTML = `

<p>${aggiunte.things}</p> 
<button onclick="fatto(event)">ELIMINA</button>
`;

  const fare = document.getElementById(`long-cards`);
  fare.appendChild(longCard);

  longCard.addEventListener("click", () => {
    longCard.classList.add("linea");
  });
  doForm.reset();
});

const fatto = function (e) {
  e.target.parentElement.remove();
};
