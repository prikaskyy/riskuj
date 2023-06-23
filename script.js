function modal(id){
  const cardId = document.getElementById(id).id;
  const index = cardId.indexOf("-");
  const lastIndex = cardId.lastIndexOf("-");
  const temaId = cardId.substr(index+1,lastIndex-index-1);
  const otazkaId = cardId.substr(lastIndex+1);

  const favDialog = document.getElementById("favDialog");
  const text = document.getElementById("questions");
  const aktivniId = `showDialog-${temaId}-${otazkaId}`
  const aktivniPole = document.getElementById(aktivniId);

  const tema = `tema${temaId}`
  const otazka = `otazka${otazkaId}`

  nacteniOtazek(text,tema,otazka);
  favDialog.showModal();
  uvod();

  const smazat = document.getElementById("smazat");
  smazat.onclick = () => {
    aktivniPole.style.opacity = 0;
    aktivniPole.style.cursor = 'default';
  }

  const obnovit = document.getElementById("obnovit");
  obnovit.onclick = () => {
    aktivniPole.style.opacity = 1;
    aktivniPole.style.cursor = 'pointer';
  }
}

function nacteniOtazek(text,tema,otazka) {
  fetch('questions.json')
  .then(response => response.json())
  .then(otazky => {
    text.innerHTML = otazky[tema][otazka].popis;
  })
}

function uvod() {
  const zacatek = document.getElementById("audio");
  zacatek.play();
}

function konec() {
  const konec = document.getElementById("konec");
  konec.play();
}

const startButton = document.getElementById("start");
const odpocet = document.getElementById("pocet");
let pocetSekund = 39;
odpocet.innerHTML = pocetSekund+1;

startButton.onclick = function () {
  let downloadTimer = setInterval(function(){
    if(pocetSekund <= 0){
      clearInterval(downloadTimer);
      document.getElementById("pocet").innerHTML = "Konec";
      konec();
    } else {
      document.getElementById("pocet").innerHTML = pocetSekund;
    }
    pocetSekund -= 1;
  }, 1000);
}

const zastavit = document.getElementById("stop");
zastavit.onclick = () => {
  pocetSekund = 0;
  odpocet.innerHTML = "Konec";
  konec();
}

let Ids = [];
const pokus = document.querySelectorAll(".card");
const allIds = Array.from(pokus);
allIds.forEach((el)=>{
  Ids.push(el.id)
})


fetch('questions.json')
.then(response => response.json())
.then(otazky => {
  Ids.forEach((id)=>{
  const card = document.getElementById(id)
  const cardId = card.id;
  const index = cardId.indexOf("-");
  const lastIndex = cardId.lastIndexOf("-");
  const temaId = cardId.substr(index+1,lastIndex-index-1);
  const otazkaId = cardId.substr(lastIndex+1);
  const nadpis = card.querySelector("p");

  const tema = `tema${temaId}`
  const otazka = `otazka${otazkaId}`
  
  nadpis.innerHTML = otazky[tema][otazka].titul;

  })
})