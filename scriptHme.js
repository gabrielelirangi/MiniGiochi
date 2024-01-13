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
      "bg-violet-400", "h-max", "w-[50vw]",
      "md:h-[25vh]" , "md:w-max", "xl:h-[25vh]",
      "rounded-lg", "flex", "flex-col", "gap-3",
      "p-6", "m-4", "relative",
      
      
    );

    
    card.innerHTML = `
      <img src="${game.immagine}" alt="${game.titolo}" class="w-full md:h-[100px] md:w-[200px] rounded-lg " >
      <h2 class="text-black font-bold text-[20px]">${game.titolo}</h2>
      <button id= "gioca" ><img src="${game.bottone}" alt="fantasma" title= " Gioca" class="absolute bottom-2 right-4 h-[5vh]" ></img></button>
    `;

    
    boxCard.appendChild(card);
  });
})
.catch((error) =>
  console.error("Errore durante il recupero del file JSON:", error)
);