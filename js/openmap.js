const appKey = "ea09f29f5215ea32e4f946564a945a1d";


let city_name = document.getElementById("city_name");
let todays_date = document.getElementById("todays_date");
let icon = document.getElementById("icon");
let icon_desc = document.getElementById("icon_desc");
let current_temp = document.getElementById("current_temp");
let max = document.getElementById("max");
let min = document.getElementById("min");
let humidity = document.getElementById("humidity");

window.onload = function findWeatherDetails() {

	//current temparature
    let searchLink = "https://api.openweathermap.org/data/2.5/weather?id=2759794" + "&appid="+appKey + "&units=metric" + "&lang=en";
	   httpRequestAsync(searchLink, theResponse);
 }

function getDateFromString(strDate){
	//var string_date = new Date(strDate);
  var a = new Date(strDate * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ', ' + year + '<br><span>' + hour + ':' + min + ':' + sec + '</span>';
	return time;
}

function theResponse(response) {
  let jsonObject = JSON.parse(response);
  console.log(jsonObject);
  var today = getDateFromString(jsonObject.dt);
  icon.src = "http://openweathermap.org/img/wn/" + jsonObject.weather[0].icon + "@2x.png";
  icon_desc.innerHTML =  jsonObject.weather[0].description;
  current_temp.innerHTML = jsonObject.main.temp + " °C" ;
  city_name.innerHTML = jsonObject.name;
  todays_date.innerHTML = today;
  max.innerHTML = 'Max: ' +  jsonObject.main.temp_max + ', ';
  min.innerHTML = 'Min: ' +  jsonObject.main.temp_min + ', ';
  humidity.innerHTML = 'Humidity: ' +  jsonObject.main.humidity;

}

function httpRequestAsync(url, callback)
{
  console.log("Requesting for data...");
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true);
    httpRequest.send();
}
