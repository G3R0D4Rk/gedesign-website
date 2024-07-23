// FUNZIONE SCROLL TO ELEMENT
function scrollToElement(elementSelector, instance = 0){
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance){
        elements[instance].scrollIntoView({ behavior: 'smooth'});
    }
}

const link1 = document.getElementById("link1");

link1.addEventListener('click', () => {
    scrollToElement('.container-glass', 1);
});

const link2 = document.getElementById("link2");

link2.addEventListener('click', () => {
    scrollToElement('.container-glass', 2);
});

// TRADUZIONE
const translation = {
    it: {
        inte : '"Ogni click, tocco e scroll è una storia da raccontare"',
        pargr : "Sono un alchimista digitale che trasforma idee in realtà.\nAttraverso la progettazione centrata sull'utente e lo sviluppo Front End all'avanguardia, creo soluzioni che connettono il bello all'usabilità. Ogni progetto inizia con una profonda immersione nel mondo del cliente.",
        pargr2 : "Progettazione dell'esperienza utente che mette gli utenti al primo posto.",
        pargr3 : "Progettazione dell'interfaccia utente che affascina e coinvolge.",
        pargr4 : "Sviluppo l'interfaccia utente per dare vita al design in modo interattivo.",
        pargr5 : "Ottimizzazione e adattamento per una perfetta esperienza su tutti i dispositivi.",
    },
    en: {
        inte : '"Every click, tap and scroll is a story to tell"',
        pargr : "I'm a digital alchemist who turns ideas into reality.\nThrough user-centered design and cutting-edge Front End development, I create solutions that connect beauty with usability. Every project begins with a deep immersion in the client's world.",
        pargr2 : "User experience design that puts users first.",
        pargr3 : "User interface design that captivates and engages.",
        pargr4 : "I develop the user interface to bring the design to life interactively.",
        pargr5 : "Optimization and adaptation for a perfect experience on all devices.",
    }
}

const languageSelectop = document.querySelector("select");
let inte = document.getElementById("inte");
let pargr = document.getElementById("pargr");
let pargr2 = document.getElementById("pargr2");
let pargr3 = document.getElementById("pargr3");
let pargr4 = document.getElementById("pargr4");
let pargr5 = document.getElementById("pargr5");

languageSelectop.addEventListener("change", (event) => {
    setLanguage(event.target.value)
})

const setLanguage = (language) => {
    if(language == "en"){
        inte.innerText = translation.en.inte;
        pargr.innerText = translation.en.pargr;
        pargr2.innerText = translation.en.pargr2;
        pargr3.innerText = translation.en.pargr3;
        pargr4.innerText = translation.en.pargr4;
        pargr5.innerText = translation.en.pargr5;
    }
    else if(language == "it"){
        inte.innerText = translation.it.inte;
        pargr.innerText = translation.it.pargr;
        pargr2.innerText = translation.it.pargr2;
        pargr3.innerText = translation.it.pargr3;
        pargr4.innerText = translation.it.pargr4;
        pargr5.innerText = translation.it.pargr5;
    }
        // Function to update paragraph with translated text
        function updateTranslation() {
            const paragraphElement = document.getElementById('pargr');
            paragraphElement.innerHTML = translation[lang].pargr;
        }

        // Call function to update the translation
        updateTranslation();
}

//ICONE SU SELECT