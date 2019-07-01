function showTemperature(response) {
  let temperature = document.querySelector("#temperature");
  temperature.innerText = Math.round(response.data.main.temp);
}

let city = "Lisbon";
let apiKey = "2537b2b1ba22d3d74b283bd28c154d0c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
axios.get(apiUrl).then(showTemperature);
