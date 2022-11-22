const images = [ 
    {
        image: 'img/01.webp', 
        title: 'Marvel\'s Spiderman Miles Morale', 
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', 
    }, 

    { 
        image: 'img/02.webp', 
        title: 'Ratchet & Clank: Rift Apart', 
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', 
    }, 

    { 
        image: 'img/03.webp', 
        title: 'Fortnite', 
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
    }, 
    
    { 
        image: 'img/04.webp', 
        title: 'Stray', 
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', 
    }, 
    
    { 
        image: 'img/05.webp', 
        title: "Marvel's Avengers", 
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 
    } 
];

// catturo elemento dell'html
const slider = document.querySelector(".slider");

// creo all'interno due div che saranno flex item
slider.innerHTML += `<div class="items-container"></div> <div class="column-img"></div>`

// catturo i due flex item
const itemsContainer = document.querySelector(".items-container")

const columnImg = document.querySelector(".column-img")

// aggiungo per ogni oggetto del mio array vari elementi nell html con i valori delle proprietà dei miei oggetti

images.forEach((element) => {
    itemsContainer.innerHTML += `<div class="item"><img src=${element.image}> <div class="text"><h4>${element.title}</h4> <p>${element.text}</p></div></div>`;

    columnImg.innerHTML += `<div class="img-slide"><img src=${element.image}></div>`
})

// aggiungo le classi iniziali
document.querySelector(".item").classList.add("active");

document.querySelector(".img-slide").classList.add("selected");

// salvo due html collection 
const items = document.getElementsByClassName("item");

const imgSlider = document.getElementsByClassName("img-slide");

// aggiungo e catturo i pulsanti per scorrere il carousel
columnImg.innerHTML += `<div class="prev">^</div>` + `<div class="next">^</div>`;

const next = document.querySelector(".next");

const prev = document.querySelector(".prev");

// imposto una variabile numerica di riferimento
let activeItem = 0;

// evento al click del tasto freccia verso il basso
next.addEventListener('click', 
    
    function() {
        removeClass();

        if (activeItem < items.length - 1) {

            activeItem++;

        } else {

            activeItem = 0;

        }

        addClass();
    }
);

// evento al click del tasto freccia verso l'alto
prev.addEventListener('click', 
    function() {
        removeClass();

        if (activeItem > 0) {

            activeItem--;

        } else {

            activeItem = items.length - 1

        }

        addClass();
    }
);

// serie di eventi al click su ogni singola miniatura
Array.from(imgSlider).forEach((element, index) => {
    element.addEventListener('click',
        function() {
            removeClass();

            activeItem = index;

            addClass();
        }
    )
});

// serie di variabili che intercettano button nell'html
const autoplay = document.querySelector(".autoplay");

const autoplayStop = document.querySelector(".autoplay-stop");

const autoplayReverse = document.querySelector(".autoplay-reverse");

// due variabili in cui saranno contenuti i setinterval
let intervalAutoplay;

let intervalReverseAutoplay;

// funzione dell'autoplay
autoplay.addEventListener('click',
    function() {
        clearInterval(intervalReverseAutoplay);

        intervalAutoplay = setInterval(function() {
            removeClass();

            activeItem++;

            if (activeItem === 5) {
                activeItem = 0;
            }

            addClass();
        }, 3000)
    }
)

// funzione autoplayreverse
autoplayReverse.addEventListener('click',
    function() {
        clearInterval(intervalAutoplay);

        intervalReverseAutoplay = setInterval(function() {
            removeClass();

            activeItem--;

            if (activeItem === -1) {
                activeItem = 4;
            }

            addClass();
        }, 3000)
    }
)

// funzione stop
autoplayStop.addEventListener('click',
    function() {
        clearInterval(intervalAutoplay);

        clearInterval(intervalReverseAutoplay)
    }
)

function removeClass() {
    items[activeItem].classList.remove('active');

    imgSlider[activeItem].classList.remove('selected');
}

function addClass() {
    items[activeItem].classList.add('active');

    imgSlider[activeItem].classList.add('selected');
}