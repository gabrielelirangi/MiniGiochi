let aside = document.getElementById("aside");
let menu = document.getElementById("menu");
let boxCard = document.getElementById("box-card");

// function che mostra e toglie il menu
menu.addEventListener("click", () => {
  aside.classList.toggle("hidden");
});

// creo le card in maniera dinamica attraverso un api

fetch("/Api.json")
.then((response) => response.json())
.then((data) => {
  data.forEach((game) => {
    
    let card = document.createElement("div");
    card.classList.add(
      "bg-white",
      "rounded-lg",
      "p-6",
      "m-4",
      "w-[300px]",
      "text-white"
    );

    
    card.innerHTML = `
      <img src="${game.immagine}" alt="${game.titolo}" class="h-[150px] w-full  rounded mb-4">
      <h2 class="text-2xl font-bold mb-2">${game.titolo}</h2>
      <p>${game.descrizione}</p>
    `;

    
    boxCard.appendChild(card);
  });
})
.catch((error) =>
  console.error("Errore durante il recupero del file JSON:", error)
);