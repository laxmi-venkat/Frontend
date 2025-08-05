const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit&format=txt";


let getJoke =()=>{
    fetch(url)
    .then(data => data.json())
    .then(item =>console.log(item.json));

}
getJoke();

