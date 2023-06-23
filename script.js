function modal(id){
  const poradi = document.getElementById(id).id;
  const index = poradi.indexOf("-");
  const num = poradi.substr(index+1);
  const favDialog = document.getElementById("favDialog");
  const text = document.getElementById("questions");
  const aktivniId = `showDialog-${num}`
  const aktivniPole = document.getElementById(aktivniId);

  nacteniOtazek(text,num);
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

function nacteniOtazek(text,num) {
  fetch('questions.json')
  .then(response => response.json())
  .then(otazky => {
    text.innerHTML = otazky.otazka[num-1];
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
