
const cityForm = document.querySelector("#cityForm");

function fetchData(city = 'Timisoara') {
    const API_SRC = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;
    const API_KEY = "5273ce3495381b23ff735e4cfd482dd9";

    fetch(API_SRC)
    .then((response) => response.json())
    .then((responseJSON) => console.log(responseJSON));
}

function cityFormSubmitHandler(event) {
    event.preventDefault();

    const cityInput = document.querySelector("#city");

    fetchData(cityInput.value);
}

cityForm.addEventListener("submit", (event) => cityFormSubmitHandler(event));