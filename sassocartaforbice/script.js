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





// funzionalita gioco


