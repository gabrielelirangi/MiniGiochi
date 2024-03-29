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



// da qui in poi verra' inserita tutta la logica del pagina del gioco
let schermo = document.getElementById("schermo");
let gioca = document.getElementById("gioca");


// creo una funzione che al richiamo mi crei un pulsante che mi permette di scegliere la difficolta' del gioco
const creaBottoni = (testo, schermo, link) => {
    let bottone = document.createElement("button");
    bottone.textContent = testo;
    //evento che mi collega con il click del bottone alla pagina specifica
    bottone.addEventListener("click", () => {
        window.location.href = link; //uso la proprieta' window che rappresenta l'url della pagina corrente, che al click del bottone verra' sostituito con il collegamento della pagina che vogliamo raggiungere
    });

    schermo.appendChild(bottone);
    return bottone;
}

gioca.addEventListener("click", () =>{
    gioca.classList.add("hidden");
    let btn1 = creaBottoni("FACILE", schermo, "/giocomemory/facile/facile.html");
    let btn2 = creaBottoni("DIFFICILE", schermo, "/giocomemory/difficile/difficile.html");
    let btn3 = creaBottoni("AVANZATO", schermo, "/giocomemory/avanzato/avanzato.html");
    let btn4 = creaBottoni("Help" , schermo, "/giocomemory/help/help.html");
})

