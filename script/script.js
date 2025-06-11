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

`;

  const fare = document.getElementById(`long-cards`);
  fare.appendChild(longCard);

  doForm.reset();
});
