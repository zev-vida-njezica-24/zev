'use strict';

//======= mobil menu =============================
//================================================
let hamburger = document.querySelector('.hamburger');
let navList = document.querySelector('.menu-items');

hamburger.addEventListener('click', function() {

    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
})

document.querySelectorAll('.item').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navList.classList.remove('active');
}))
//=================================================
//-------------------------------------------------
//=================================================


//==================================================
// navigacija sticky ================
//==================================================
const section1 = document.querySelector('.section1');
const nav = document.querySelector('nav');
const hero = document.querySelector('.hero');

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function(entries) {
    const [entry] = entries;

    if(!entry.isIntersecting) nav.classList.add('sticky');
    else nav.classList.remove('sticky');
}

const heroObserver = new IntersectionObserver
(stickyNav, {
    root: null,
    threshold: 0,
//    rootMargin: '-80px'
    rootMargin: `-${navHeight}px`
});

heroObserver.observe(hero)

//==================================================

//==================================================
// pojavljivanje elemenata na scroll ================
const allText = document.querySelectorAll('.text');
const naslov = document.querySelector('.naslov');

const revealSection = function(entries, observer) {
    const [entry] = entries;

    if(!entry.isIntersecting) return;

    entry.target.classList.remove('reveal')

    observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver
(revealSection, {
    root: null,
    threshold: 0.2
})

allText.forEach(function (text) {
    sectionObserver.observe(text);
    text.classList.add('reveal');
});
//======================================================
//======================================================


//==========================================
//==== Parallax ============================
var rellax = new Rellax('.rellax', {
    center: true
});
//==========================================
//==========================================

// ========================================
// ======= pojavljivanje na load ==========
let naslovna = document.querySelector('.naslovni-tekst')
window.onload = function(){
    setTimeout(function(){
        naslovna.style.opacity = '1';

    }, 400);
};

// =============================================
// =============================================


////=== PAGINATION ===================================
////==================================================
//const paginationNumbers = document.getElementById("pagination-numbers");
//const paginatedList = document.getElementById("paginated-list");
//const listItems = paginatedList.querySelectorAll("li");
//const nextButton = document.getElementById("next-button");
//const prevButton = document.getElementById("prev-button");
//
//const paginationLimit = 10;
//const pageCount = Math.ceil(listItems.length / paginationLimit);
//let currentPage = 1;
//
//const disableButton = (button) => {
//    button.classList.add("disabled");
//    button.setAttribute("disabled", true);
//};
//
//const enableButton = (button) => {
//    button.classList.remove("disabled");
//    button.removeAttribute("disabled");
//};
//
//const handlePageButtonsStatus = () => {
//    if (currentPage === 1) {
//        disableButton(prevButton);
//    } else {
//        enableButton(prevButton);
//    }
//
//    if (pageCount === currentPage) {
//        disableButton(nextButton);
//    } else {
//        enableButton(nextButton);
//    }
//};
//
//const handleActivePageNumber = () => {
//    document.querySelectorAll(".pagination-number").forEach((button) => {
//        button.classList.remove("active");
//        const pageIndex = Number(button.getAttribute("page-index"));
//        if (pageIndex == currentPage) {
//            button.classList.add("active");
//        }
//    });
//};
//
//const appendPageNumber = (index) => {
//    const pageNumber = document.createElement("button");
//    pageNumber.className = "pagination-number";
//    pageNumber.innerHTML = index;
//    pageNumber.setAttribute("page-index", index);
//    pageNumber.setAttribute("aria-label", "Page " + index);
//
//    paginationNumbers.appendChild(pageNumber);
//};
//
//const getPaginationNumbers = () => {
//    for (let i = 1; i <= pageCount; i++) {
//        appendPageNumber(i);
//    }
//};
//
//const setCurrentPage = (pageNum) => {
//    currentPage = pageNum;
//
//    handleActivePageNumber();
//    handlePageButtonsStatus();
//
//    const prevRange = (pageNum - 1) * paginationLimit;
//    const currRange = pageNum * paginationLimit;
//
//    listItems.forEach((item, index) => {
//        item.classList.add("hidden");
//        if (index >= prevRange && index < currRange) {
//            item.classList.remove("hidden");
//        }
//    });
//};
//
//window.addEventListener("load", () => {
//    getPaginationNumbers();
//    setCurrentPage(1);
//
//    prevButton.addEventListener("click", () => {
//        setCurrentPage(currentPage - 1);
//    });
//
//    nextButton.addEventListener("click", () => {
//        setCurrentPage(currentPage + 1);
//    });
//
//    document.querySelectorAll(".pagination-number").forEach((button) => {
//        const pageIndex = Number(button.getAttribute("page-index"));
//
//        if (pageIndex) {
//            button.addEventListener("click", () => {
//                setCurrentPage(pageIndex);
//            });
//        }
//    });
//});
//
////==================================================
////--------------------------------------------------
////==================================================





































