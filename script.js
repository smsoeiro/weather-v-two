function showTemperature(response) {
  let temperature = document.querySelector("#temperature");
  temperature.innerText = Math.round(response.data.main.temp);
  let place = document.querySelector("#place");
  place.innerText = response.data.name;

  let humidity = document.querySelector("#humidity");
  humidity.innerText = response.data.main.humidity;

  let wind = document.querySelector("#wind");
  wind.innerText = response.data.wind.speed;

  let precipitation = document.querySelector("#precipitation");
  precipitation.innerText = "Something";

  let description = document.querySelector("#description");
  console.log(response.data);
  description.innerText = response.data.wind[0].description;
}

let city = "Lisbon";
let apiKey = "2537b2b1ba22d3d74b283bd28c154d0c";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
axios.get(apiUrl).then(showTemperature);
