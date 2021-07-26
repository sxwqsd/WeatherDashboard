var todayDate = moment().format('dddd, LL');
$("#currentDay").html(todayDate);

var currentTime = moment().format('LT');
$("#currentTime").html(currentTime);

searchBtn.addEventListener("click", findCity)
var cityList = {};
var currentCity = $("#currentCity");
var weatherIcon = $('#icon');
var currentTemperature = $("#temperature");
var currentHumidity = $("#humidity");
var currentWSpeed = $("#windSpeed");
var currentUvindex = $("#uvIndex");
var clearHistory = $('#clearBtn');



function findCity() {
  var searchTerm = document.getElementById('searchTerm').value;

  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    searchTerm +
    '&appid=dfe8a62c51090cbe2c997f11f4087de5' +
    '&units=imperial'
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);

      var city = (response.name);
      console.log(city);
      currentCity.text(city)

      var temp = (response.main.temp);
      console.log(temp);
      currentTemperature.text(temp);

      var humid = (response.main.humidity);
      console.log(humid);
      currentHumidity.text(humid);

      var speed = (response.wind.speed);
      console.log(speed);
      currentWSpeed.text(speed);
    });
  forecast();
}


var date1 = $('#date1')
var temp1 = $('#temperature1')
var humidity1 = $('#humidity1')
var windSpeed1 = $('#windSpeed1')

var date1 = $('#date2')
var temp1 = $('#temperature2')
var humidity1 = $('#humidity2')
var windSpeed1 = $('#windSpeed2')

var date1 = $('#date3')
var temp1 = $('#temperature3')
var humidity1 = $('#humidity3')
var windSpeed1 = $('#windSpeed3')

var date1 = $('#date4')
var temp1 = $('#temperature4')
var humidity1 = $('#humidity4')
var windSpeed1 = $('#windSpeed4')

var date1 = $('#date5')
var temp1 = $('#temperature5')
var humidity1 = $('#humidity5')
var windSpeed1 = $('#windSpeed5')


function forecast() {
  var searchTerm = document.getElementById('searchTerm').value;

  fetch(
    'https://api.openweathermap.org/data/2.5/forecast?q=' +
    searchTerm +
    '&appid=dfe8a62c51090cbe2c997f11f4087de5' +
    '&units=imperial'
  )

    .then(function (forecastResponse) {
      return forecastResponse.json();
    })
    .then(function (forecastResponse) {
      console.log(forecastResponse);

      var temp01 = (forecastResponse.list.main.temp);
      console.log(temp01);
      temp1.text(temp01);



      



      });
}



function searchHistory() {
  var searchTerm = document.getElementById('searchTerm').value;
  


}
