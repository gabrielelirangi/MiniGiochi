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




// logica che fa comparire l'input testuale in versione telefono

var ricercaDiv = document.getElementById('ricerca');
var ricercaInput = document.getElementById('ricerca-input');
var ricercaIcona = document.getElementById('ricerca-icona');

ricercaDiv.addEventListener('click', function (event) {
    // Verifica se l'evento viene scatenato dall'input stesso
    if (event.target !== ricercaInput) {
        ricercaInput.classList.toggle('hidden');
        ricercaInput.focus();
    }
});

// evento al premere enter su tastiera
ricercaInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        ricercaInput.classList.add('hidden');
    }
});


// logica di ricerca della barra
function cercaCard() {
  const carcaCarte = document.getElementById("ricerca").querySelector("input").value.toLowerCase();
  
  
  Array.from(boxCard.children).forEach((card) => {  //converto la lista dei figli di box card cosi uso il foreach per comparare il valore di input con i titoli delle card
    const title = card.querySelector("h2").innerText.toLowerCase();

    
    if (title.includes(carcaCarte)) {
      card.style.display = "block"; 
    } else {
      card.style.display = "none"; 
    }
  });
}


document.getElementById("ricerca").addEventListener("input", cercaCard);









