const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-btn");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");


let options ={
    fruits :[
        "Apple",
        "BlueBerry",
        "Mandarin",
        "pineapple",
        "pomegratnate",
        "Watermelon"
    ],
    animals:[
        "Hedghog",
        "Rhiocecors",
        "Squareel",
        "panter",
        "Walrus",
        "Zebra"
    ],
    countries:[
        "India",
        "hungary",
        "kyrgyzstan",
        "Switerzerland",
        "Zimbabwer",
        "Dominica",
    ]
};

let winCount =0;
let count = 0;
let chosenWord ="";
//
const dispalyOptions =()=>{
    optionsContainer.innerHTML+=`<h3>please select An option</h3>`;
    let buttonCon = document.createDocumentFragment("div");
    for(let value in options){
        buttonCon.innerHTML+=`<button class="options" onclick="generateWord('${value}">${value}</button>`
    }

    optionsContainer.appendChild(buttonCon);
}
//
const initializer =()=>{
    winCount =0;
    count =0;
    dispalyOptions();

};
newGameButton.addEventListener("click",initializer)
window.onload = initializer;
