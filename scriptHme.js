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
      "hover:border-2", "hover:border-solid", "hover:border-bg-[#110041]", 
      
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




// logica che fa comparire l'input testuale in versione telefono

let ricerca = document.getElementById("ricerca");
let boxRicerca = document.getElementById("box-ricerca");
let boxAperto = false; // Flag per tracciare lo stato dell'elemento di ricerca


const barraDiRicerca = () => {
  if (boxAperto) {
    boxRicerca.innerHTML = "";
    boxRicerca.classList.remove("h-[7vh]", "w-[100vw]", "absolute", "top-[10vh]");
  } else {
    let input = document.createElement("input");
    input.type = "text";
    boxRicerca.appendChild(input);
    boxRicerca.classList.add("h-[7vh]", "w-[100vw]", "absolute", "top-[10vh]");
    input.classList.add("h-[5vh]", "w-[70vw]", "ml-[15vw]", "rounded-full", "pl-3", "outline-none");
    input.focus();
  }
  boxAperto = !boxAperto;
};

ricerca.addEventListener("click", barraDiRicerca);



// logica di ricerca della barra

// da implementare ancora





