// Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team.
// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell'html
// stampare dinamicamente una card per ogni membro del team.

// Creo oggetto comune Card

const card = [
    {
        id : "Wayne Barnett",
        role : "Founder & CEO",
        proPic : "img/wayne-barnett-founder-ceo.jpg",
    },
    {
        id : "Angela Caroll",
        role : "Chief Editor",
        proPic : "img/angela-caroll-chief-editor.jpg",
    },
    {
        id : "Angela Lopez",
        role : "Social Media Manager",
        proPic : "img/angela-lopez-social-media-manager.jpg",
    },
    {
        id : "Barbara Ramos",
        role : "Graphic Designer",
        proPic : "img/barbara-ramos-graphic-designer.jpg",
    },
    {
        id : "Scott Estrada",
        role : "Developer",
        proPic : "img/scott-estrada-developer.jpg",
    },
    {
        id : "Walter Gordon",
        role : "Office Manager",
        proPic : "img/walter-gordon-office-manager.jpg",
    },
]
// Seleziono il container dal foglio HTML
const container = document.querySelector(".team-container")

// Creo ciclo for che attraversa l'oggetto card

for (let i = 0 ; i < card.length ; i++){
    // prendo la parte di codice html che devo modificare 
    const graphic = `
    <div class="team-card">
        <div class="card-image">
        <img src="img/wayne-barnett-founder-ceo.jpg" alt="Wayne Barnett" />
        </div>
        <div class="card-text">
        <h3>${card[i].id}</h3>
        <p>${card[i].role}</p>
    </div>
    `
}