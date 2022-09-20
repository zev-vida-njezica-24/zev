novosti.forEach((item) => {
    let novostLista = document.querySelector('.novost-lista');
            let sablon1 = `

            <li class="text list-item lista-za-brojanje" data-category="zapisnik">
              <p class="datum">${item.datum}</p>
              <a href="${item.link2}" class="main-naslov">
                  <h2 class="m-naslov" >
                        ${item.naslov}
                  </h2>
              </a>

              <p class="main-tekst ">
                    ${item.sadrzaj}
              </p>

              <div class="nastavi">
                  <a href="${item.link2}"><p>Nastavi čitati</p></a>
              </div>
          </li>

        ` 
        novostLista.innerHTML += sablon1;
})

