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
      "bg-violet-700", "h-max", "w-[50vw]",
      "md:h-[25vh]" , "md:w-max", "xl:h-[30vh]",
      "rounded-lg", "flex", "flex-col", "gap-5",
      "p-6", "m-4", "relative",
      "hover:border-2", "hover:border-solid", "hover:border-bg-[#110041]", 
      
    );

    
    card.innerHTML = `
      <img src="${game.immagine}" alt="${game.titolo}" class="w-full md:h-[100px] md:w-[200px] rounded-lg " >
      <h2 class="text-white font-bold text-[20px]">${game.titolo}</h2>
      <button id= "gioca" ><a href="${game.percorso}"><img src="${game.bottone}" alt="fantasma" title= " Gioca" class="absolute bottom-2 right-4 h-[5vh]" ></img></a</button>
    `;

    
    boxCard.appendChild(card);
  });
})
.catch((error) =>
  console.error("Errore durante il recupero del file JSON:", error)
);



// evento che illumina i bordi dei pulsanti social
let social = document.getElementById("social");
let social2 = document.getElementById("social2");
let social3 = document.getElementById("social3");
let omino = document.getElementById("profilo")

social.addEventListener("mouseover" , () => {
  social.classList.add("border-2", "border-solid");
  social.style.borderColor= "#7F3DFF";
});

social.addEventListener("mouseout" , () => {
  social.classList.remove("border-2", "border-solid")
  social.style.borderColor= "";
});

social2.addEventListener("mouseover" , () => {
  social2.classList.add("border-2", "border-solid");
  social2.style.borderColor= "#7F3DFF";
});

social2.addEventListener("mouseout" , () => {
  social2.classList.remove("border-2", "border-solid")
  social2.style.borderColor= "";
});

social3.addEventListener("mouseover" , () => {
  social3.classList.add("border-2", "border-solid");
  social3.style.borderColor= "#7F3DFF";
});

social3.addEventListener("mouseout" , () => {
  social3.classList.remove("border-2", "border-solid")
  social3.style.borderColor= "";
});

omino.addEventListener("mouseover" , () => {
  omino.style.borderColor= "#7F3DFF";
});

omino.addEventListener("mouseout" , () => {
  omino.style.borderColor= "#f8f8ff";
});



function creaCarte(id, imageUrl) {
    let carta = document.createElement("div");
    carta.classList.add("bg-black", "rounded", "overflow-hidden", "shadow-md");

    let img = document.createElement("img");
    img.classList.add("w-full", "h-32", "object-contain");
    img.src = imageUrl;
    img.alt = `Carta ${id}`;

    carta.appendChild(img);

    return carta;
  }

  // Funzione per inizializzare le carte nel div con ID "schermo"
  function initializeCards(data) {
    let schermo = document.getElementById("schermo");

    data.forEach(({ id, immagine }) => {
      let carta = creaCarte(id, immagine);
      schermo.appendChild(carta);
    });
  }

  // Carica i dati dal file JSON utilizzando fetch
  fetch('/giocomemory/facile/file.json')
    .then(response => response.json())
    .then(data => initializeCards(data))
    .catch(error => console.error('Errore durante il recupero dei dati:', error));