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
    let cityElement = document.querySelector("#weather-app-city");
    cityElement.innerHTML = searchInput.value;
    getCurrentDate();
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);

