'use strict'

// arvotaan arvattava numero väliltä 0-100, 0 ja sata myös mahdollisia
var arvattava = Math.floor(Math.random() * (100 + 1) );

// debug-tulostus kehittäjälle, kommentoi pois tuotantoversiosta
console.log("Arvattava: " + arvattava);

// muuttuja pelaajan nykyistä arvausta varten
// alkuarvo on undefined, jotta erotetaan, onko tehty yhtään arvausta
// vai ei
var arvaus = undefined;
var arvaukset = 0;
var alin = 0;
var ylin = 0;
var numero = document.getElementById('numerot');
var alempi = document.getElementById('alempi');
var ylempi = document.getElementById('ylempi');
var vihje = document.getElementById('vihje');
// määrittele myös muuttujat pelaajan nykyistä arvausta, parasta
// alinta ja parasta ylintä arvausta varten sekä tehtyjen arvausten
// lukumäärää varten


// kannattaa myös hakea tarvitsemasi DOM-elementit muuttujiin,
// jotta niitä on helpompi käyttää, muuttujanimet ovat lyhyempiä
// kirjoittaa kuin "document.getElementById(...)..."


//
// Event-käsittelijä lomakkeelle
//
function arvausTehty() {
  // haetaan käyttäjän syöttämä arvo ja tulkitaan se numeroksi
  var syote = document.getElementById('luku').value;
  arvaus = Number(syote);
  console.log("Arvaus: " + arvaus);

  // tyhjennetään lomake uutta arvausta varten
  document.getElementById('lomake').reset();

  arvaukset++;

  if(arvaus < arvattava) {
    if(arvaus < alin) {
      alin = arvaus;
      alempi.innerHTML = "Alin: " + alin;
      vihje.innerHTML = "Luku on suurempi";
    }
  } else if (arvaus > arvattava){
    if(arvaus > ylin) {
      ylin = arvaus;
      ylempi.innerHTML = "Ylin: " + ylin;
      vihje.innerHTML = "Luku on pienempi";
    }
  } else if (arvaus === arvattava) {
    vihje.innerHTML = "Onnittelut. Arvausten määrä: " + arvaukset;
    for(var i = 0; i < arvattava; i++) {
      numero.innerHTML = i;
    }
  }
  /*
  Toteuta tähän algoritmi:

    Päivitä arvausten määrä
    Jos pelaajan arvaus on pienempi kuin arvattava,
        Jos arvaus on parempi kuin nykyinen alempi arvaus,
          päivitä alempi arvaus
        Anna vihje "Luku on suurempi"
    Jos pelaajan arvaus on suurempi kuin arvattava,
        Jos arvaus on parempi kuin nykyinen ylempi arvaus,
          päivitä ylempi arvaus
        Anna vihje "Luku on pienempi"
    Jos arvaus on yhtäsuuri kuin arvattava
        Kirjoita vihje-elementtiin onnitttelut ja arvausten määrä
        Kirjoita numerot-elementtiin luvut nollasta arvattavaan
          Huomaa, että numerot on kirjoitettava html-koodina, jotta
          ne näytetään oikein!
  */


  // onsubmit-käsittelijä palauttaa false, jotta lomaketta ei oikeasti lähetettäisi
  // lähetys lataisi sivun uudelleen ja nollaisi koko pelin
  return false;
}

// asetetaan tapahtumankäsittelijä lomakkeelle, siis määritellään,
// mitä funktiota kutsutaan, kun lomake lähetetään
document.getElementById('lomake').onsubmit = arvausTehty;
