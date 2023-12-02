function refreshWeather(response) {
    let temperatureValue = document.querySelector("#temperature-value");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#weather-app-city");
    let desc = document.querySelector("#description");
    let weatherWind = document.querySelector("#wind");
    let weatherHumidity = document.querySelector("#humidity");
    let weatherIcon = document.querySelector("#icon");

    temperatureValue.innerHTML = Math.round(temperature);
    cityElement.innerHTML = response.data.city;
    desc.innerHTML = `${response.data.condition.description}`;
    weatherWind.innerHTML = `${response.data.wind.speed}m/s`;
    weatherHumidity.innerHTML = `${response.data.temperature.humidity}%`;
    weatherIcon.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon" />`;
}

function searchCity(city) {
  let apiKey = `o40f86t9b8f9434a4b59c39ad0c1d830`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function getCurrentDate() {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let currentDay = days[now.getDay()];
  let currentHour = now.getHours();
  if (currentHour <= 9) {
    currentHour = `0${currentHour}`;
  }
  /*if (currentHour > 12) {
    currentHour = currentHour - 12;
  }*/
  let currentMinute = now.getMinutes();
  if (currentMinute <= 9) {
    currentMinute = `0${currentMinute}`;
  }

  let currentDate = now.getDate();
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let currentMonth = months[now.getMonth()];
  let currentYear = now.getFullYear();

  let nowTime = document.querySelector("#current-time");
  nowTime.innerHTML = `${currentDay}, ${currentHour}:${currentMinute}`;
  let nowDate = document.querySelector("#current-date");
  nowDate.innerHTML = `${currentMonth} ${currentDate}, ${currentYear}`;
}

function handleSearch(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");

    searchCity(searchInput.value);
    getCurrentDate();
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);