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

let gioco = () => {
  let puntiGiocatore = 0;
  let puntiSistema = 0;

  let iniziaGioco = () => {
    let inizio = document.getElementById("inizio");
    let vs = document.getElementById("vs");
    let btnGioca = document.getElementById("btnGioca");

    btnGioca.addEventListener("click", () => {
      inizio.classList.add("hidden");
      vs.classList.remove("hidden");
    });
  };

  let logicaVs = () => {
    let check = document.getElementById("check");
    let btnCheck = check.querySelectorAll("button");

    let lancio = document.getElementById("lancio");
    let img = lancio.querySelectorAll("img");

    let giocatore = document.getElementById("giocatore");
    let sistema = document.getElementById("computer");

    let sistemaMosse = ["sasso", "carta", "forbici"];

    btnCheck.forEach((opt1) => {
      opt1.addEventListener("click", () => {
        let numeroMossa = Math.floor(Math.random() * 3);
        // console.log(numeroMossa);
        let sceltaSistema = sistemaMosse[numeroMossa];
        console.log(typeof(sceltaSistema))

        setTimeout(() => {
          comparaLancio(opt1.id, sceltaSistema);

          giocatore.src = `/sassocartaforbice/immaginiGioco/${opt1.id}.png`;
          console.log(giocatore.src);
          sistema.src = `/sassocartaforbice/immaginiGioco/${sceltaSistema}.png`;

          
        }, 2000);
      });
    });
  };

  let comparaLancio = (opt1 , sceltaSistema) => {
    
    let mossa = document.getElementById("mossa");
    let mossaGiocatore = opt1;

    if (mossaGiocatore === sceltaSistema) {
        mossa.textContent = "Pareggio!";
        return;
    }


    if(mossaGiocatore === "sasso"){
      if(sceltaSistema === "forbici"){
        mossa.textContent = "Hai vinto! Forza!!!";
        mossa.classList.add("text-[#FFD700]");
        puntiGiocatore++;
        fineGioco();
        aggiornaPunteggio();
        return;

      } else{
        mossa.textContent = "Hai perso...!";
        mossa.classList.add("text-red-500");
        puntiSistema++;
        fineGioco();
        aggiornaPunteggio();
        return;
      }
    }


    if(mossaGiocatore === "carta"){
      if(sceltaSistema === "forbici"){
        mossa.textContent = "Hai perso...!";
        mossa.classList.add("text-red-500");
        puntiSistema++;
        fineGioco();
        aggiornaPunteggio();
        return;

      } else{
        mossa.textContent = "Hai vinto! Forza!!!";
        mossa.classList.add("text-[#FFD700]");
        puntiGiocatore++;
        fineGioco();
        aggiornaPunteggio();
        return;
      }
    }

    
    if(mossaGiocatore === "forbici"){
      if(sceltaSistema === "sasso"){
        mossa.textContent = "Hai perso...!";
        mossa.classList.add("text-red-500");
        puntiSistema++;
        fineGioco();
        aggiornaPunteggio();
        return;

      } else{
        mossa.textContent = "Hai vinto! Forza!!!";
        mossa.classList.add("text-[#FFD700]");
        puntiGiocatore++;
        fineGioco();
        aggiornaPunteggio();
        return;
      }
    }

  }

  let aggiornaPunteggio = () => {
    let ptGiocatore = document.getElementById("ptGiocatore");
    let ptSistema = document.getElementById("ptSistema");

    ptGiocatore.textContent = puntiGiocatore;
    ptSistema.textContent = puntiSistema;
  };

  let restartGioco = () => {
    let restart = document.getElementById("restart");

    restart.addEventListener("click" , () =>{
      window.location.reload(); //ricarico la pagina
    });

  };

  let fineGioco = () => {
    let fine = document.getElementById("vittoria");
    let vs = document.getElementById("vs");
    let vinto = document.getElementById("vinto");

    if (puntiGiocatore === 5) {
        vs.classList.add("hidden");
        fine.classList.remove("hidden");
        setTimeout(() => {
            fine.classList.remove("hidden");  // Modifica questa riga
            vinto.textContent = "Alla grande! Hai vinto!";
            vinto.classList.add("text-[#ffd700]");
        }, 1000);
    } else if (puntiSistema === 5) {
        vs.classList.add("hidden");
        fine.classList.remove("hidden");
        setTimeout(() => {
            fine.classList.remove("hidden");  // Modifica questa riga
            vinto.textContent = "Loser! Hai perso!!";
            vinto.classList.add("text-red-500");
        },1000);
    }
}


  restartGioco();
  iniziaGioco();
  logicaVs();
};

gioco();
