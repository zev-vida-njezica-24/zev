'use strict';

class MyHero extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section class="hero ">

            <div class="moving-bg kenburns-right"></div>

            <nav class="nav">
                <a href="../../index.html" class="nav-link"><img src="../../img/zev2.png" alt="logo" class="logo "></a>

                <ul class="menu-items">
                    <li class="item" ><a href="../../index.html">Početna</a></li>

                    <li class="item"><a href="../novosti/novosti.html">Novosti</a></li>

                    <li class="item"><a href="../zapisnici/zapisnici.html">Zapisnici</a></li>

                    <li class="item"><a href="../obavesti/obavijesti.html">Obavještenja</a></li>

                    <li class="item"><a href="../razno/kucni-red.html">Kućni red</a></li>

                    <li class="item" ><a href="../razno/organi-upravljanja.html">Organi upravljanja</a></li>
                </ul>

                <div class="hamburger hidden">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </nav>

            <div class="naslovni-tekst">
                <h1 class="naslov">
                    ZEV Vida Nježića 24B
                </h1>
                <p class="podnaslov">
                    Zajednica etažnih vlasnika
                </p>
            </div>
        </section>
    `
    }
}
customElements.define('my-hero', MyHero);




class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="f1">
                    <div class="fbox1">

                        <div class="f-adr">
                            <h4>ZEV Vida Nježića 24B</h4>

                            <div class="f-label"><p>Adresa:</p></div>
                            <div class="f-label1"><p>ZEV Vida Nježića 24 ulaz B</p>
                            <p>78430 Prnjavor</p></div>

                            <div class="f-label"><p>Račun:</p></div>
                            <div class="f-label1"><p>567 - 463270000 - 7168</p>
                            <p class="banka">(SBERBANK AD Prnjavor)</p></div>
                        </div>

                    </div>

                    <div class="fbox2">
                        <div class="f-label"><p>UPLATE BEZ PROVIZIJE</p></div>
                        <div class="f-label1"><p>Račun naše zajednice etažnih vlasnika je otvoren u SBERBANK AD Prnjavor i u okviru njihovih poslovnica možete vršiti uplate na račun bez provizije.</p></div>
                    </div>
                </div>

                <div class="f2">
                    <p>&copy ByMe</p>
                </div>
            </footer>
        `
    }
}
customElements.define('my-footer', MyFooter);



class MyDoks extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            
                <div class="dokumenti">
                    <h4>Dokumenti</h4>
                    <ul>
                        <li><a href="../dokumenti/dokumenti.html">Dokumenti 2022</a></li>
                    </ul>
                </div>

                <div class="kategorije">
                    <h4>Kategorije</h4>
                    <ul class="kategorija-lista">
                        <li data-category="novost"><a href="../novosti/novosti.html">Novosti (<span class="kat-br novost"> 0 </span>)</a></li>
                        <li ><a href="../obavesti/obavijesti.html">Obavještenja (<span class="kat-br obavijest"> 0 </span>)</a></li>
                        <li data-category="zapisnik"><a href="../zapisnici/zapisnici.html">Zapisnik (<span class="kat-br zapisnik"> 0 </span>)</a></li>
                    </ul>
                </div>
                
            
        `
    }
}
customElements.define('my-doks', MyDoks);


























