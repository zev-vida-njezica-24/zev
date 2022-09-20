'use strict';

var novosti = [

    {
        datum: new Date('2022-09-19').toLocaleDateString("de-DE"),
        naslov: "Odluka o utvrđivanju vrijednosti boda za akontaciju troškova",
        sadrzaj: "Na osnovu člana 35 Zakona o održavanju stambenih zgrada (“Sl. glasnik RS”, br. 16/02 i 65/03) Skupština zajednice etažnih vlasnika Vida Nježića 24 ulaz B, Prnjavor, donosi <strong>Odluku o utvrđivanju vrijednosti boda za akontaciju troškova održavanja stambene zgrade</strong>.",
        kategorija: "novost",
        link: "kategorije/obavesti/odluka-o-akontaciji.html",
        link2: "../obavesti/odluka-o-akontaciji.html",
        redniBroj: 1,
    },


]


var obavijesti = [

    {
        datum: new Date('2022-09-19').toLocaleDateString("de-DE"),
        naslov: "Banka - obavijest",
        sadrzaj: "Obavještavaju se stanari Zajednice za upravljanje zgradom da je došlo do izmjene žiro-računa na koji se vrše uplate za troškove odžavanja zgrade.",
        kategorija: "obavijest",
        link: "kategorije/obavesti/banka-obavijest.html",
        link2: "../obavesti/banka-obavijest.html",
        redniBroj: 4,
    },

    {
        datum: new Date('2022-09-19').toLocaleDateString("de-DE"),
        naslov: "Organi upravljanja",
        sadrzaj: "Organi upravljanja zajednicom definisana su Zakonom o održavanju stanova i Statutom zajednice, a oni su:",
        kategorija: "obavijest",
        link: "kategorije/razno/organi-upravljanja.html",
        link2: "../razno/organi-upravljanja.html",
        redniBroj: 3,
    },
    {
        datum: new Date('2022-09-20').toLocaleDateString("de-DE"),
        naslov: "Zakon o održavanju stambenih zgrada",
        sadrzaj: "Tekst Zakona sastoji se od teksta Zakona o održavanju stambenih zgrada Sl. glasnik RS 16/02, i teksta Zakona o izmjenama i dopunama Zakona o održavanju stambenih zgrada Sl. glasnik RS 65/03",
        kategorija: "obavijest",
        link: "kategorije/razno/zakon-o-odrzavanju-stambenih-zgrada.html",
        link2: "../razno/zakon-o-odrzavanju-stambenih-zgrada.html",
        redniBroj: 6,
    },



]

var zapisnici = [
    {
        datum: new Date('2022-09-19').toLocaleDateString("de-DE"),
        naslov: "Zapisnik sa I vanredne sjednice Skupštine stanara",
        sadrzaj: "Prva vanredna sjednica Skupštine stanara stambene zgrade u ulici Vida Nježića 24 ulaz B,održana je 15. augusta 2022. godine, sa početkom u 20:00 časova ispred stambene zgrade.",
        kategorija: "zapisnik",
        link: "kategorije/zapisnici/zapisnik-1-vanredna-sjednica.html",
        link2: "../zapisnici/zapisnik-1-vanredna-sjednica.html",
        redniBroj: 5,
    },


]


//==========================================
//==========================================
let sveZajedno;

sveZajedno = [...novosti, ...obavijesti, ...zapisnici];

function sortiranje(a, b) {
    return b.redniBroj - a.redniBroj;

    }
sveZajedno.sort(sortiranje)

sveZajedno.forEach((item) => {

        var pocetnaLista = document.getElementById('paginated-list');

        let sablon = `

            <li class="text list-item lista-za-brojanje" data-category="zapisnik">
              <p class="datum">${item.datum}</p>
              <a href="${item.link}" class="main-naslov">
                  <h2 class="m-naslov" >
                        ${item.naslov}
                  </h2>
              </a>

              <p class="main-tekst ">
                    ${item.sadrzaj}
              </p>

              <div class="nastavi">
                  <a href="${item.link}"><p>Nastavi čitati</p></a>
              </div>

          </li>

        `
        pocetnaLista.innerHTML += sablon;

})
