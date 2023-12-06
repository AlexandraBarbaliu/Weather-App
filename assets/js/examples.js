const API_KEY = "47de525c8b6e8be1118dc5ace4b3687a";

function fetchData(city) {
    const source =  `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
}
fetch(source)
.then((response) => response.json())
.then((responseJSON) => console.log(response.JSON));

document.querySelector(`cityform`).addEventListener("submit"), function(event) {
    event.preventDefault();
const data = new FormData(event.target);
const entries = Object.fromEntries(data.entries());

fetchData(entries.city);
}