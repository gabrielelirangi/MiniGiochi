let aside = document.getElementById("aside");
let menu = document.getElementById("menu");


// function che mostra e toglie il menu
menu.addEventListener("click", () => {
  aside.classList.toggle("hidden");
});

// evento che illumina i bordi dei pulsanti social
let social = document.getElementById("social");
let social2 = document.getElementById("social2");
let social3 = document.getElementById("social3");
let omino = document.getElementById("profilo");

social.addEventListener("mouseover", () => {
  social.classList.add("border-2", "border-solid");
  social.style.borderColor = "#7F3DFF";
});

social.addEventListener("mouseout", () => {
  social.classList.remove("border-2", "border-solid");
  social.style.borderColor = "";
});

social2.addEventListener("mouseover", () => {
  social2.classList.add("border-2", "border-solid");
  social2.style.borderColor = "#7F3DFF";
});

social2.addEventListener("mouseout", () => {
  social2.classList.remove("border-2", "border-solid");
  social2.style.borderColor = "";
});

social3.addEventListener("mouseover", () => {
  social3.classList.add("border-2", "border-solid");
  social3.style.borderColor = "#7F3DFF";
});

social3.addEventListener("mouseout", () => {
  social3.classList.remove("border-2", "border-solid");
  social3.style.borderColor = "";
});

omino.addEventListener("mouseover", () => {
  omino.style.borderColor = "#7F3DFF";
});

omino.addEventListener("mouseout", () => {
  omino.style.borderColor = "#f8f8ff";
});



// logica carte e del gioco
let schermo = document.getElementById("schermo");
let data; // dati json

let creaCarte = (cardsData) => {
  data = cardsData; // assegna i dati a data
  data.forEach((carte) => {
    let carta = document.createElement("div");
    carta.classList.add("h-[10vh]", "w-[10vw]", "bg-white");
    carta.innerHTML = `<img src="${carte.img}" alt="immagine" class="w-full h-full object-contain" />`;
    carta.id = `carta-${carte.id}`;

    // Aggiungi l'evento di click all'immagine
    carta.addEventListener("click", eventoclick);

    schermo.appendChild(carta);
  });
};

let eventoclick = (event) => {
  let carta = event.currentTarget;
  let cartaId = carta.id.replace("carta-", "");
  let cartaData = data.find((carte) => carte.id === cartaId);

  // Mostra l'immagine della carta
  carta.innerHTML = `<img src="${cartaData.immagine}" alt="immagine" class="w-full h-full object-contain" />`;
};

// prendo i dati dal file json
fetch("/giocomemory/facile/file.json")
  .then((response) => response.json())
  .then((jsonData) => creaCarte(jsonData))
  .catch((error) => console.error("errore durante il recupero del file json"));



