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

let mischiaImmagine = (array) => {
  for (let i = 0; i < array.length; i++) {
    let nuovoIndice = Math.floor(Math.random() * array.length);
    [array[i], array[nuovoIndice]] = [array[nuovoIndice], array[i]];
  }
  return array;
};

let creaCarte = (carteData) => {
  carteData.forEach((carta) => {
    let cartaElemento = document.createElement("div");
    cartaElemento.classList.add("h-[10vh]", "w-[10vw]", "bg-yellow-400");
    cartaElemento.innerHTML = `<img src="${carta.img}" alt="immagine" class="w-full h-full object-contain" />`;
    cartaElemento.id = `${carta.id}`;
    cartaElemento.addEventListener("click", eventoClick);
    schermo.appendChild(cartaElemento);
  });
};

let eventoClick = (evento) => {
  let cartaElemento = evento.currentTarget;
  let cartaId = cartaElemento.id;
  let carta = jsonData.find((carta) => carta.id === cartaId);
  cartaElemento.innerHTML = `<img src="${carta.immagine}" alt="immagine" class="w-full h-full object-contain" />`;

  giraCarte(cartaId);
};

let carteGirate = []; // contenitore delle carte girate
let giraCarte = (cartaId) => {
  let carte = document.getElementById(cartaId);
  let img = carte.querySelector("img");

  if (!carteGirate.includes(cartaId) && carteGirate.length < 2) {
    img.classList.add("block");
    carteGirate.push(cartaId);

    if (carteGirate.length === 2) {
      let img1 = document.getElementById(carteGirate[0]).querySelector("img");
      let img2 = document.getElementById(carteGirate[1]).querySelector("img");

      if (img1.src === img2.src) {
        // se le carte coincidono svuota l'array
        carteGirate = [];
      } else {
        // carte non uguali
        setTimeout(() => {
          // set time out cosi ci mette 1 s per coprire le carte
          img1.src =
            "https://c8.alamy.com/compit/2cbm9rj/fifa-2cbm9rj.jpg";
          img2.src =
            "https://c8.alamy.com/compit/2cbm9rj/fifa-2cbm9rj.jpg";
          carteGirate = [];
          errori++;
          aggiornaErrori();
        }, 1000);
      }
    }
  }
};

// aggiornameento errori commessi
let errori = 0;
let aggiornaErrori = () => {
  let errore = document.getElementById("errore");
  errore.textContent = "Errori: " + errori;
};

// logica del tasto reset
let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  
  carteGirate = [];
  errori = 0;
  aggiornaErrori();

  for(let i = 1; i <= 12 ; i++){
    let cartaId = "carta-" + i;
    let img= document.getElementById(cartaId).querySelector("img");
    img.src = "https://c8.alamy.com/compit/2cbm9rj/fifa-2cbm9rj.jpg";
  }

});


//tempo trascorso al completamento del gioco

// prendo i dati dal file json
fetch("/giocomemory/difficile/file.json")
  .then((response) => response.json())
  .then((jsonDataResponse) => {
    // Mischi0
    jsonData = mischiaImmagine(jsonDataResponse);

    console.log("array iniziale", jsonData);
    creaCarte(jsonData);
  })
  .catch((error) => console.error("errore durante il recupero del file json"));
