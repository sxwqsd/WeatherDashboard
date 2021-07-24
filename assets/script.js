
var todayDate = moment().format('dddd, LL');
$("#currentDay").html(todayDate);

var currentTime = moment().format('LT');
$("#currentTime").html(currentTime);

searchbtn.addEventListener("click", findCity)

function findCity(){
  var searchTerm = document.getElementById('searchTerm').value;

  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    searchTerm +
    '&appid=dfe8a62c51090cbe2c997f11f4087de5'
  )
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response);
    var responseContainerEl = document.querySelector('#response-container');
    responseContainerEl.innerHTML = '';
    searchTerm.value = responseContainerEl;

  });
}
