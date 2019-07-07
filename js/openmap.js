const appKey = "ea09f29f5215ea32e4f946564a945a1d";

let searchButton = document.getElementById("search-btn");
let searchInput = document.getElementById("search-txt");
/*city name*/
let cityNameToday = document.getElementById("city-name-today");
let cityNameTomorrow = document.getElementById("city-name-tomorrow");
// let cityNameDayAfterTomorrow = document.getElementById("city-name-dayaftertomorrow);

var todays_Date = document.getElementById("todays_Date");
var tomorrows_date = document.getElementById("tomorrows_date");
var dayaftertomorrows_date = document.getElementById("dayaftertomorrows_date");


/* ************** todays variables*************** */
/*00*/
var today00icon = document.getElementById("today00icon");
var todaytemp00 = document.getElementById("todaytemp00");
var todaydescription00 = document.getElementById("todaydescription00");
var todaymax00 = document.getElementById("todaymax00");
var todaymin00 = document.getElementById("todaymin00");
var todayhumidity00 = document.getElementById("todayhumidity00");
var todaywind00 = document.getElementById("todaywind00");
/*03*/
var today03icon = document.getElementById("today03icon");
var todaytemp03 = document.getElementById("todaytemp03");
var todaydescription03 = document.getElementById("todaydescription03");
var todaymax03 = document.getElementById("todaymax03");
var todaymin03 = document.getElementById("todaymin03");
var todayhumidity03 = document.getElementById("todayhumidity03");
var todaywind03 = document.getElementById("todaywind03");
/*06*/
var today06icon = document.getElementById("today06icon");
var todaytemp06 = document.getElementById("todaytemp06");
var todaydescription06 = document.getElementById("todaydescription06");
var todaymax06 = document.getElementById("todaymax06");
var todaymin06 = document.getElementById("todaymin06");
var todayhumidity06 = document.getElementById("todayhumidity06");
var todaywind06 = document.getElementById("todaywind06");
/*09*/
var today09icon = document.getElementById("today09icon");
var todaytemp09 = document.getElementById("todaytemp09");
var todaydescription09 = document.getElementById("todaydescription09");
var todaymax09 = document.getElementById("todaymax09");
var todaymin09 = document.getElementById("todaymin09");
var todayhumidity09 = document.getElementById("todayhumidity09");
var todaywind09 = document.getElementById("todaywind09");
/*12*/
var today12icon = document.getElementById("today12icon");
var todaytemp12 = document.getElementById("todaytemp12");
var todaydescription12 = document.getElementById("todaydescription12");
var todaymax12 = document.getElementById("todaymax12");
var todaymin12 = document.getElementById("todaymin12");
var todayhumidity12 = document.getElementById("todayhumidity12");
var todaywind12 = document.getElementById("todaywind12");
/*15*/
var today15icon = document.getElementById("today15icon");
var todaytemp15 = document.getElementById("todaytemp15");
var todaydescription15 = document.getElementById("todaydescription15");
var todaymax15 = document.getElementById("todaymax15");
var todaymin15 = document.getElementById("todaymin15");
var todayhumidity15 = document.getElementById("todayhumidity15");
var todaywind15 = document.getElementById("todaywind15");
/*18*/
var today18icon = document.getElementById("today18icon");
var todaytemp18 = document.getElementById("todaytemp18");
var todaydescription18 = document.getElementById("todaydescription18");
var todaymax18 = document.getElementById("todaymax18");
var todaymin18 = document.getElementById("todaymin18");
var todayhumidity18 = document.getElementById("todayhumidity18");
var todaywind18 = document.getElementById("todaywind18");
/*21*/
var today21icon = document.getElementById("today21icon");
var todaytemp21 = document.getElementById("todaytemp21");
var todaydescription21 = document.getElementById("todaydescription21");
var todaymax21 = document.getElementById("todaymax21");
var todaymin21 = document.getElementById("todaymin21");
var todayhumidity21 = document.getElementById("todayhumidity21");
var todaywind21 = document.getElementById("todaywind21");

/* ************** tomorrow's variables*************** */
/*00*/
var tomorrow00icon = document.getElementById("tomorrow00icon");
var tomorrowtemp00 = document.getElementById("tomorrowtemp00");
var tomorrowdescription00 = document.getElementById("tomorrowdescription00");
var tomorrowmax00 = document.getElementById("tomorrowmax00");
var tomorrowmin00 = document.getElementById("tomorrowmin00");
var tomorrowhumidity00 = document.getElementById("tomorrowhumidity00");
var tomorrowwind00 = document.getElementById("tomorrowwind00");
/*03*/
var tomorrow03icon = document.getElementById("tomorrow03icon");
var tomorrowtemp03 = document.getElementById("tomorrowtemp03");
var tomorrowdescription03 = document.getElementById("tomorrowdescription03");
var tomorrowmax03 = document.getElementById("tomorrowmax03");
var tomorrowmin03 = document.getElementById("tomorrowmin03");
var tomorrowhumidity03 = document.getElementById("tomorrowhumidity03");
var tomorrowwind03 = document.getElementById("tomorrowwind03");
/*06*/
var tomorrow06icon = document.getElementById("tomorrow06icon");
var tomorrowtemp06 = document.getElementById("tomorrowtemp06");
var tomorrowdescription06 = document.getElementById("tomorrowdescription06");
var tomorrowmax06 = document.getElementById("tomorrowmax06");
var tomorrowmin06 = document.getElementById("tomorrowmin06");
var tomorrowhumidity06 = document.getElementById("tomorrowhumidity06");
var tomorrowwind06 = document.getElementById("tomorrowwind06");
/*09*/
var tomorrow09icon = document.getElementById("tomorrow09icon");
var tomorrowtemp09 = document.getElementById("tomorrowtemp09");
var tomorrowdescription09 = document.getElementById("tomorrowdescription09");
var tomorrowmax09 = document.getElementById("tomorrowmax09");
var tomorrowmin09 = document.getElementById("tomorrowmin09");
var tomorrowhumidity09 = document.getElementById("tomorrowhumidity09");
var tomorrowwind09 = document.getElementById("tomorrowwind09");
/*12*/
var tomorrow12icon = document.getElementById("tomorrow12icon");
var tomorrowtemp12 = document.getElementById("tomorrowtemp12");
var tomorrowdescription12 = document.getElementById("tomorrowdescription12");
var tomorrowmax12 = document.getElementById("tomorrowmax12");
var tomorrowmin12 = document.getElementById("tomorrowmin12");
var tomorrowhumidity12 = document.getElementById("tomorrowhumidity12");
var tomorrowwind12 = document.getElementById("tomorrowwind12");
/*15*/
var tomorrow15icon = document.getElementById("tomorrow15icon");
var tomorrowtemp15 = document.getElementById("tomorrowtemp15");
var tomorrowdescription15 = document.getElementById("tomorrowdescription15");
var tomorrowmax15 = document.getElementById("tomorrowmax15");
var tomorrowmin15 = document.getElementById("tomorrowmin15");
var tomorrowhumidity15 = document.getElementById("tomorrowhumidity15");
var tomorrowwind15 = document.getElementById("tomorrowwind15");
/*18*/
var tomorrow18icon = document.getElementById("tomorrow18icon");
var tomorrowtemp18 = document.getElementById("tomorrowtemp18");
var tomorrowdescription18 = document.getElementById("tomorrowdescription18");
var tomorrowmax18 = document.getElementById("tomorrowmax18");
var tomorrowmin18 = document.getElementById("tomorrowmin18");
var tomorrowhumidity18 = document.getElementById("tomorrowhumidity18");
var tomorrowwind18 = document.getElementById("tomorrowwind18");
/*21*/
var tomorrow21icon = document.getElementById("tomorrow21icon");
var tomorrowtemp21 = document.getElementById("tomorrowtemp21");
var tomorrowdescription21 = document.getElementById("tomorrowdescription21");
var tomorrowmax21 = document.getElementById("tomorrowmax21");
var tomorrowmin21 = document.getElementById("tomorrowmin21");
var tomorrowhumidity21 = document.getElementById("tomorrowhumidity21");
var tomorrowwind21 = document.getElementById("tomorrowwind21");

/* ************** day after tomorrow's variables*************** */
/*00*/
var dayaftertomorrow00icon = document.getElementById("dayaftertomorrow00icon");
var dayaftertomorrowtemp00 = document.getElementById("dayaftertomorrowtemp00");
var dayaftertomorrowdescription00 = document.getElementById("dayaftertomorrowdescription00");
var dayaftertomorrowmax00 = document.getElementById("dayaftertomorrowmax00");
var dayaftertomorrowmin00 = document.getElementById("dayaftertomorrowmin00");
var dayaftertomorrowhumidity00 = document.getElementById("dayaftertomorrowhumidity00");
var dayaftertomorrowwind00 = document.getElementById("dayaftertomorrowwind00");
/*03*/
var dayaftertomorrow03icon = document.getElementById("dayaftertomorrow03icon");
var dayaftertomorrowtemp03 = document.getElementById("dayaftertomorrowtemp03");
var dayaftertomorrowdescription03 = document.getElementById("dayaftertomorrowdescription03");
var dayaftertomorrowmax03 = document.getElementById("dayaftertomorrowmax03");
var dayaftertomorrowmin03 = document.getElementById("dayaftertomorrowmin03");
var dayaftertomorrowhumidity03 = document.getElementById("dayaftertomorrowhumidity03");
var dayaftertomorrowwind03 = document.getElementById("dayaftertomorrowwind03");
/*06*/
var dayaftertomorrow06icon = document.getElementById("dayaftertomorrow06icon");
var dayaftertomorrowtemp06 = document.getElementById("dayaftertomorrowtemp06");
var dayaftertomorrowdescription06 = document.getElementById("dayaftertomorrowdescription06");
var dayaftertomorrowmax06 = document.getElementById("dayaftertomorrowmax06");
var dayaftertomorrowmin06 = document.getElementById("dayaftertomorrowmin06");
var dayaftertomorrowhumidity06 = document.getElementById("dayaftertomorrowhumidity06");
var dayaftertomorrowwind06 = document.getElementById("dayaftertomorrowwind06");
/*09*/
var dayaftertomorrow09icon = document.getElementById("dayaftertomorrow09icon");
var dayaftertomorrowtemp09 = document.getElementById("dayaftertomorrowtemp09");
var dayaftertomorrowdescription09 = document.getElementById("dayaftertomorrowdescription09");
var dayaftertomorrowmax09 = document.getElementById("dayaftertomorrowmax09");
var dayaftertomorrowmin09 = document.getElementById("dayaftertomorrowmin09");
var dayaftertomorrowhumidity09 = document.getElementById("dayaftertomorrowhumidity09");
var dayaftertomorrowwind09 = document.getElementById("dayaftertomorrowwind09");
/*12*/
var dayaftertomorrow12icon = document.getElementById("dayaftertomorrow12icon");
var dayaftertomorrowtemp12 = document.getElementById("dayaftertomorrowtemp12");
var dayaftertomorrowdescription12 = document.getElementById("dayaftertomorrowdescription12");
var dayaftertomorrowmax12 = document.getElementById("dayaftertomorrowmax12");
var dayaftertomorrowmin12 = document.getElementById("dayaftertomorrowmin12");
var dayaftertomorrowhumidity12 = document.getElementById("dayaftertomorrowhumidity12");
var dayaftertomorrowwind12 = document.getElementById("dayaftertomorrowwind12");
/*15*/
var dayaftertomorrow15icon = document.getElementById("dayaftertomorrow15icon");
var dayaftertomorrowtemp15 = document.getElementById("dayaftertomorrowtemp15");
var dayaftertomorrowdescription15 = document.getElementById("dayaftertomorrowdescription15");
var dayaftertomorrowmax15 = document.getElementById("dayaftertomorrowmax15");
var dayaftertomorrowmin15 = document.getElementById("dayaftertomorrowmin15");
var dayaftertomorrowhumidity15 = document.getElementById("dayaftertomorrowhumidity15");
var dayaftertomorrowwind15 = document.getElementById("dayaftertomorrowwind15");
/*18*/
var dayaftertomorrow18icon = document.getElementById("dayaftertomorrow18icon");
var dayaftertomorrowtemp18 = document.getElementById("dayaftertomorrowtemp18");
var dayaftertomorrowdescription18 = document.getElementById("dayaftertomorrowdescription18");
var dayaftertomorrowmax18 = document.getElementById("dayaftertomorrowmax18");
var dayaftertomorrowmin18 = document.getElementById("dayaftertomorrowmin18");
var dayaftertomorrowhumidity18 = document.getElementById("dayaftertomorrowhumidity18");
var dayaftertomorrowwind18 = document.getElementById("dayaftertomorrowwind18");
/*21*/
var dayaftertomorrow21icon = document.getElementById("dayaftertomorrow21icon");
var dayaftertomorrowtemp21 = document.getElementById("dayaftertomorrowtemp21");
var dayaftertomorrowdescription21 = document.getElementById("dayaftertomorrowdescription21");
var dayaftertomorrowmax21 = document.getElementById("dayaftertomorrowmax21");
var dayaftertomorrowmin21 = document.getElementById("dayaftertomorrowmin21");
var dayaftertomorrowhumidity21 = document.getElementById("dayaftertomorrowhumidity21");
var dayaftertomorrowwind21 = document.getElementById("dayaftertomorrowwind21");


// searchButton.addEventListener("click", findWeatherDetails);
// searchInput.addEventListener("keyup", enterPressed);


function enterPressed(event) {
  if (event.key === "Enter") {
    findWeatherDetails();
  }
}

window.onload = function findWeatherDetails() {
  // if (searchInput.value === "") {
	// console.log("Please enter value");
  // }else {
	//only current temparature
    //let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=tokyo" + "&appid="+appKey;
    // let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid="+appKey;
	
	//5days 3hourly prediction temparature
    let searchLink = "https://api.openweathermap.org/data/2.5/forecast?q=tokyo" + "&appid="+appKey + "&units=metric" + "&lang=ja";
	httpRequestAsync(searchLink, theResponse);
  // }
 }
function getFormattedDate(strDate){
	var dateObj = new Date(strDate);
	var month = dateObj.getMonth() + 1;
	var day = dateObj.getDate();
	var formattedDate = month + "月" + day + "日";
	
	return formattedDate;
}

function getHoursFromDate(strDate){
	var string_date = new Date(strDate);
	return string_date.getHours();
}
function getDateFromString(strDate){
	var string_date = new Date(strDate);
	string_date.setHours(0,0,0,0);
	return string_date;
}

function theResponse(response) {
  let jsonObject = JSON.parse(response);
  var listObject = jsonObject.list;
  var todaysDate, tomorrowsDate, dayaftertomorrowsDate;
  var todaysDateCount=0, tomorrowsDateCount=0, dayaftertomorrowsDateCount=0;
  var todaysArray={}, tomorrowsArray={}, dayaftertomorrowsArray={};
  //console.log(response); 
  
  //today's date
  todaysDate = getDateFromString(listObject[0].dt_txt); //listObject[0] because the list starts from today's info
  //iterate for finding todays items to make today's array
  for(var i = 0; i < listObject.length; i++) {
	 var temp_date = getDateFromString(listObject[i].dt_txt); 
	if(todaysDate.getTime() === temp_date.getTime()){ 
	
		var hourKey = getHoursFromDate(listObject[i].dt_txt); //make hourly key value pairs because sometimes there is no responsedata
		todaysArray[hourKey.toString()] = listObject[i];
		todaysDateCount++; //count today's total number of dates to find the tomorrow's starting position int the list
	}
	else{
		console.log("LOOP BREAK");
		break; // loop will break when the tomorrow starts
	}
}
	
	//tomorrow's date
   tomorrowsDateCount=todaysDateCount; //because list starts from 0
   tomorrowsDate = getDateFromString(listObject[tomorrowsDateCount].dt_txt);
   //iterate for finding tomorrow's items to make tomorrow's array
  for(var i = tomorrowsDateCount; i <= listObject.length; i++) {
	 var temp_date = getDateFromString(listObject[i].dt_txt); 
	if(tomorrowsDate.getTime() === temp_date.getTime()){
		
		var hourKey = getHoursFromDate(listObject[i].dt_txt); //make hourly key value pairs because sometimes there is no responsedata
		tomorrowsArray[hourKey.toString()] = listObject[i];
		tomorrowsDateCount++; //count tomorrow's total number of dates to find the day after tomorrow's starting position int the list
	}
	else{
		console.log("LOOP BREAK");
		break; // loop will break when the day after tomorrow's items starts
	}
}

//day after tomorrow's date
   dayaftertomorrowsDateCount=tomorrowsDateCount; //because list starts from 0
   dayaftertomorrowsDate = getDateFromString(listObject[dayaftertomorrowsDateCount].dt_txt);
   //iterate for finding day after tomorrow's items to make day after tomorrow's array
  for(var i = dayaftertomorrowsDateCount; i <= listObject.length; i++) {
	 var temp_date = getDateFromString(listObject[i].dt_txt); 
	if(dayaftertomorrowsDate.getTime() === temp_date.getTime()){
		
		var hourKey = getHoursFromDate(listObject[i].dt_txt); //make hourly key value pairs because sometimes there is no responsedata
		dayaftertomorrowsArray[hourKey.toString()] = listObject[i];
		dayaftertomorrowsDateCount++; //count day after tomorrow's total number of dates
	}
	else{
		console.log("LOOP BREAK");
		break; // loop will break when the day after tomorrow's items starts
	}
}

//console.log(response);
//console.log(todaysArray);
// console.log(tomorrowsArray);
// console.log(dayaftertomorrowsArray);
   
   
  cityNameToday.innerHTML = jsonObject.city.name;
  cityNameTomorrow.innerHTML = jsonObject.city.name;
  // cityNameDayAfterTomorrow.innerHTML = jsonObject.city.name;
  todays_Date.innerHTML = getFormattedDate(todaysDate);
  tomorrows_date.innerHTML = getFormattedDate(tomorrowsDate);
  dayaftertomorrows_date.innerHTML = getFormattedDate(dayaftertomorrowsDate);
  
  /*set todays information*/
	/*00*/
	if(todaysArray["0"]){
		today00icon.src = "http://openweathermap.org/img/w/" + todaysArray["0"].weather[0].icon + ".png";
		todaytemp00.innerHTML = todaysArray["0"].main.temp;
		todaydescription00.innerHTML = todaysArray["0"].weather[0].description;
		todaymax00.innerHTML = todaysArray["0"].main.temp_max;
		todaymin00.innerHTML = todaysArray["0"].main.temp_min;
		todayhumidity00.innerHTML = todaysArray["0"].main.humidity;
		todaywind00.innerHTML = todaysArray["0"].wind.speed +"<br>"+ todaysArray["0"].wind.deg.toFixed(2) + "°" ;
	}
	else{
		var today00 = document.getElementById("today00");
		today00.innerHTML = "";
	}
	/*03*/
	if(todaysArray["3"]){
		today03icon.src = "http://openweathermap.org/img/w/" + todaysArray["3"].weather[0].icon + ".png";
		todaytemp03.innerHTML = todaysArray["3"].main.temp;
		todaydescription03.innerHTML = todaysArray["3"].weather[0].description;
		todaymax03.innerHTML = todaysArray["3"].main.temp_max;;
		todaymin03.innerHTML = todaysArray["3"].main.temp_min;
		todayhumidity03.innerHTML = todaysArray["3"].main.humidity;
		todaywind03.innerHTML = todaysArray["3"].wind.speed +"<br>"+ todaysArray["3"].wind.deg.toFixed(2) + "°" ;
		
	}
	else{
		var today03 = document.getElementById("today03");
		today03.innerHTML = "";
	}
	/*06*/
	if(todaysArray["6"]){
		today06icon.src = "http://openweathermap.org/img/w/" + todaysArray["6"].weather[0].icon + ".png";
		todaytemp06.innerHTML = todaysArray["6"].main.temp;
		todaydescription06.innerHTML = todaysArray["6"].weather[0].description;
		todaymax06.innerHTML = todaysArray["6"].main.temp_max;;
		todaymin06.innerHTML = todaysArray["6"].main.temp_min;
		todayhumidity06.innerHTML = todaysArray["6"].main.humidity;
		todaywind06.innerHTML = todaysArray["6"].wind.speed +"<br>"+ todaysArray["6"].wind.deg.toFixed(2) + "°" ;
	}
	else{
		var today06 = document.getElementById("today06");
		today06.innerHTML = "";
	}
	/*9*/
	if(todaysArray["9"]){
		today09icon.src = "http://openweathermap.org/img/w/" + todaysArray["9"].weather[0].icon + ".png";
		todaytemp09.innerHTML = todaysArray["9"].main.temp;
		todaydescription09.innerHTML = todaysArray["9"].weather[0].description;
		todaymax09.innerHTML = todaysArray["9"].main.temp_max;;
		todaymin09.innerHTML = todaysArray["9"].main.temp_min;
		todayhumidity09.innerHTML = todaysArray["9"].main.humidity;
		todaywind09.innerHTML = todaysArray["9"].wind.speed +"<br>"+ todaysArray["9"].wind.deg.toFixed(2) + "°" ;
	}
	else{
		var today09 = document.getElementById("today09");
		today09.innerHTML = "";
	}
	/*12*/
	if(todaysArray["12"]){
		today12icon.src = "http://openweathermap.org/img/w/" + todaysArray["12"].weather[0].icon + ".png";
		todaytemp12.innerHTML = todaysArray["12"].main.temp;
		todaydescription12.innerHTML = todaysArray["12"].weather[0].description;
		todaymax12.innerHTML = todaysArray["12"].main.temp_max;;
		todaymin12.innerHTML = todaysArray["12"].main.temp_min;
		todayhumidity12.innerHTML = todaysArray["12"].main.humidity;
		todaywind12.innerHTML = todaysArray["12"].wind.speed +"<br>"+ todaysArray["12"].wind.deg.toFixed(2) + "°" ;
	}
	else{
		var today12 = document.getElementById("today12");
		today12.innerHTML = "";
	}
	/*15*/
	if(todaysArray["15"]){
		today15icon.src = "http://openweathermap.org/img/w/" + todaysArray["15"].weather[0].icon + ".png";
		todaytemp15.innerHTML = todaysArray["15"].main.temp;
		todaydescription15.innerHTML = todaysArray["15"].weather[0].description;
		todaymax15.innerHTML = todaysArray["15"].main.temp_max;;
		todaymin15.innerHTML = todaysArray["15"].main.temp_min;
		todayhumidity15.innerHTML = todaysArray["15"].main.humidity;
		todaywind15.innerHTML = todaysArray["15"].wind.speed +"<br>"+ todaysArray["15"].wind.deg.toFixed(2) + "°" ;
	}
	else{
		var today15 = document.getElementById("today15");
		today15.innerHTML = "";
	}
	/*18*/
	if(todaysArray["18"]){
		today18icon.src = "http://openweathermap.org/img/w/" + todaysArray["18"].weather[0].icon + ".png";
		todaytemp18.innerHTML = todaysArray["18"].main.temp;
		todaydescription18.innerHTML = todaysArray["18"].weather[0].description;
		todaymax18.innerHTML = todaysArray["18"].main.temp_max;;
		todaymin18.innerHTML = todaysArray["18"].main.temp_min;
		todayhumidity18.innerHTML = todaysArray["18"].main.humidity;
		todaywind18.innerHTML = todaysArray["18"].wind.speed +"<br>"+ todaysArray["18"].wind.deg.toFixed(2) + "°" ;
	}
	else{
		var today18 = document.getElementById("today18");
		today18.innerHTML = "";
	}
	/*21*/
	if(todaysArray["21"]){
		today21icon.src = "http://openweathermap.org/img/w/" + todaysArray["21"].weather[0].icon + ".png";
		todaytemp21.innerHTML = todaysArray["21"].main.temp;
		todaydescription21.innerHTML = todaysArray["21"].weather[0].description;
		todaymax21.innerHTML = todaysArray["21"].main.temp_max;;
		todaymin21.innerHTML = todaysArray["21"].main.temp_min;
		todayhumidity21.innerHTML = todaysArray["21"].main.humidity;
		todaywind21.innerHTML = todaysArray["21"].wind.speed +"<br>"+ todaysArray["21"].wind.deg.toFixed(2) + "°" ;
	}
	else{
		var today18 = document.getElementById("today18");
		today18.innerHTML = "";
	}
	
	/*set tomorrow's information*/
	/*00*/
	if(tomorrowsArray["0"]){
		tomorrow00icon.src = "http://openweathermap.org/img/w/" + tomorrowsArray["0"].weather[0].icon + ".png";
		tomorrowtemp00.innerHTML = tomorrowsArray["0"].main.temp;
		tomorrowdescription00.innerHTML = tomorrowsArray["0"].weather[0].description;
		tomorrowmax00.innerHTML = tomorrowsArray["0"].main.temp_max;
		tomorrowmin00.innerHTML = tomorrowsArray["0"].main.temp_min;
		tomorrowhumidity00.innerHTML = tomorrowsArray["0"].main.humidity;
		tomorrowwind00.innerHTML = tomorrowsArray["0"].wind.speed +"<br>"+ tomorrowsArray["0"].wind.deg.toFixed(2) + "°" ;
	}
	else{
		var tomorrow00 = document.getElementById("tomorrow00");
		tomorrow00.innerHTML = "";
	}
	/*03*/
	if(tomorrowsArray["3"]){
		tomorrow03icon.src = "http://openweathermap.org/img/w/" + tomorrowsArray["3"].weather[0].icon + ".png";
		tomorrowtemp03.innerHTML = tomorrowsArray["3"].main.temp;
		tomorrowdescription03.innerHTML = tomorrowsArray["3"].weather[0].description;
		tomorrowmax03.innerHTML = tomorrowsArray["3"].main.temp_max;;
		tomorrowmin03.innerHTML = tomorrowsArray["3"].main.temp_min;
		tomorrowhumidity03.innerHTML = tomorrowsArray["3"].main.humidity;
		tomorrowwind03.innerHTML = tomorrowsArray["3"].wind.speed +"<br>"+ tomorrowsArray["3"].wind.deg.toFixed(2) + "°" ;
		
	}
	else{
		var tomorrow03 = document.getElementById("tomorrow03");
		tomorrow03.innerHTML = "";
	}
	/*06*/
	if(tomorrowsArray["6"]){
		tomorrow06icon.src = "http://openweathermap.org/img/w/" + tomorrowsArray["6"].weather[0].icon + ".png";
		tomorrowtemp06.innerHTML = tomorrowsArray["6"].main.temp;
		tomorrowdescription06.innerHTML = tomorrowsArray["6"].weather[0].description;
		tomorrowmax06.innerHTML = tomorrowsArray["6"].main.temp_max;;
		tomorrowmin06.innerHTML = tomorrowsArray["6"].main.temp_min;
		tomorrowhumidity06.innerHTML = tomorrowsArray["6"].main.humidity;
		tomorrowwind06.innerHTML = tomorrowsArray["6"].wind.speed +"<br>"+ tomorrowsArray["6"].wind.deg.toFixed(2) + "°" ;
	}
	else{
		var tomorrow06 = document.getElementById("tomorrow06");
		tomorrow06.innerHTML = "";
	}
	/*9*/
	if(tomorrowsArray["9"]){
		tomorrow09icon.src = "http://openweathermap.org/img/w/" + tomorrowsArray["9"].weather[0].icon + ".png";
		tomorrowtemp09.innerHTML = tomorrowsArray["9"].main.temp;
		tomorrowdescription09.innerHTML = tomorrowsArray["9"].weather[0].description;
		tomorrowmax09.innerHTML = tomorrowsArray["9"].main.temp_max;;
		tomorrowmin09.innerHTML = tomorrowsArray["9"].main.temp_min;
		tomorrowhumidity09.innerHTML = tomorrowsArray["9"].main.humidity;
		tomorrowwind09.innerHTML = tomorrowsArray["9"].wind.speed +"<br>"+ tomorrowsArray["9"].wind.deg.toFixed(2) + "°" ;
	}
	else{
		var tomorrow09 = document.getElementById("tomorrow09");
		tomorrow09.innerHTML = "";
	}
	/*12*/
	if(tomorrowsArray["12"]){
		tomorrow12icon.src = "http://openweathermap.org/img/w/" + tomorrowsArray["12"].weather[0].icon + ".png";
		tomorrowtemp12.innerHTML = tomorrowsArray["12"].main.temp;
		tomorrowdescription12.innerHTML = tomorrowsArray["12"].weather[0].description;
		tomorrowmax12.innerHTML = tomorrowsArray["12"].main.temp_max;;
		tomorrowmin12.innerHTML = tomorrowsArray["12"].main.temp_min;
		tomorrowhumidity12.innerHTML = tomorrowsArray["12"].main.humidity;
		tomorrowwind12.innerHTML = tomorrowsArray["12"].wind.speed +"<br>"+ tomorrowsArray["12"].wind.deg.toFixed(2) + "°" ;
	}
	else{
		var tomorrow12 = document.getElementById("tomorrow12");
		tomorrow12.innerHTML = "";
	}
	/*15*/
	if(tomorrowsArray["15"]){
		tomorrow15icon.src = "http://openweathermap.org/img/w/" + tomorrowsArray["15"].weather[0].icon + ".png";
		tomorrowtemp15.innerHTML = tomorrowsArray["15"].main.temp;
		tomorrowdescription15.innerHTML = tomorrowsArray["15"].weather[0].description;
		tomorrowmax15.innerHTML = tomorrowsArray["15"].main.temp_max;;
		tomorrowmin15.innerHTML = tomorrowsArray["15"].main.temp_min;
		tomorrowhumidity15.innerHTML = tomorrowsArray["15"].main.humidity;
		tomorrowwind15.innerHTML = tomorrowsArray["15"].wind.speed +"<br>"+ tomorrowsArray["15"].wind.deg.toFixed(2) + "°" ;
	}
	else{
		var tomorrow15 = document.getElementById("tomorrow15");
		tomorrow15.innerHTML = "";
	}
	/*18*/
	if(tomorrowsArray["18"]){
		tomorrow18icon.src = "http://openweathermap.org/img/w/" + tomorrowsArray["18"].weather[0].icon + ".png";
		tomorrowtemp18.innerHTML = tomorrowsArray["18"].main.temp;
		tomorrowdescription18.innerHTML = tomorrowsArray["18"].weather[0].description;
		tomorrowmax18.innerHTML = tomorrowsArray["18"].main.temp_max;;
		tomorrowmin18.innerHTML = tomorrowsArray["18"].main.temp_min;
		tomorrowhumidity18.innerHTML = tomorrowsArray["18"].main.humidity;
		tomorrowwind18.innerHTML = tomorrowsArray["18"].wind.speed +"<br>"+ tomorrowsArray["18"].wind.deg.toFixed(2) + "°" ;
	}
	else{
		var tomorrow18 = document.getElementById("tomorrow18");
		tomorrow18.innerHTML = "";
	}
	/*21*/
	if(tomorrowsArray["21"]){
		tomorrow21icon.src = "http://openweathermap.org/img/w/" + tomorrowsArray["21"].weather[0].icon + ".png";
		tomorrowtemp21.innerHTML = tomorrowsArray["21"].main.temp;
		tomorrowdescription21.innerHTML = tomorrowsArray["21"].weather[0].description;
		tomorrowmax21.innerHTML = tomorrowsArray["21"].main.temp_max;;
		tomorrowmin21.innerHTML = tomorrowsArray["21"].main.temp_min;
		tomorrowhumidity21.innerHTML = tomorrowsArray["21"].main.humidity;
		tomorrowwind21.innerHTML = tomorrowsArray["21"].wind.speed +"<br>"+ tomorrowsArray["21"].wind.deg.toFixed(2) + "°" ;
	}
	else{
		var tomorrow18 = document.getElementById("tomorrow18");
		tomorrow18.innerHTML = "";
	}
	
	/*set day after tomorrow's information*/
	/*00*/
	if(dayaftertomorrowsArray["0"]){
		dayaftertomorrow00icon.src = "http://openweathermap.org/img/w/" + dayaftertomorrowsArray["0"].weather[0].icon + ".png";
		dayaftertomorrowtemp00.innerHTML = dayaftertomorrowsArray["0"].main.temp;
		dayaftertomorrowdescription00.innerHTML = dayaftertomorrowsArray["0"].weather[0].description;
		dayaftertomorrowmax00.innerHTML = dayaftertomorrowsArray["0"].main.temp_max;
		dayaftertomorrowmin00.innerHTML = dayaftertomorrowsArray["0"].main.temp_min;
		dayaftertomorrowhumidity00.innerHTML = dayaftertomorrowsArray["0"].main.humidity;
		dayaftertomorrowwind00.innerHTML = dayaftertomorrowsArray["0"].wind.speed +"<br>"+ dayaftertomorrowsArray["0"].wind.deg.toFixed(2) + "°" ;
	}
	else{
		var dayaftertomorrow00 = document.getElementById("dayaftertomorrow00");
		dayaftertomorrow00.innerHTML = "";
	}
	/*03*/
	if(dayaftertomorrowsArray["3"]){
		dayaftertomorrow03icon.src = "http://openweathermap.org/img/w/" + dayaftertomorrowsArray["3"].weather[0].icon + ".png";
		dayaftertomorrowtemp03.innerHTML = dayaftertomorrowsArray["3"].main.temp;
		dayaftertomorrowdescription03.innerHTML = dayaftertomorrowsArray["3"].weather[0].description;
		dayaftertomorrowmax03.innerHTML = dayaftertomorrowsArray["3"].main.temp_max;;
		dayaftertomorrowmin03.innerHTML = dayaftertomorrowsArray["3"].main.temp_min;
		dayaftertomorrowhumidity03.innerHTML = dayaftertomorrowsArray["3"].main.humidity;
		dayaftertomorrowwind03.innerHTML = dayaftertomorrowsArray["3"].wind.speed +"<br>"+ dayaftertomorrowsArray["3"].wind.deg.toFixed(2) + "°" ;
		
	}
	else{
		var dayaftertomorrow03 = document.getElementById("dayaftertomorrow03");
		dayaftertomorrow03.innerHTML = "";
	}
	/*06*/
	if(dayaftertomorrowsArray["6"]){
		dayaftertomorrow06icon.src = "http://openweathermap.org/img/w/" + dayaftertomorrowsArray["6"].weather[0].icon + ".png";
		dayaftertomorrowtemp06.innerHTML = dayaftertomorrowsArray["6"].main.temp;
		dayaftertomorrowdescription06.innerHTML = dayaftertomorrowsArray["6"].weather[0].description;
		dayaftertomorrowmax06.innerHTML = dayaftertomorrowsArray["6"].main.temp_max;;
		dayaftertomorrowmin06.innerHTML = dayaftertomorrowsArray["6"].main.temp_min;
		dayaftertomorrowhumidity06.innerHTML = dayaftertomorrowsArray["6"].main.humidity;
		dayaftertomorrowwind06.innerHTML = dayaftertomorrowsArray["6"].wind.speed +"<br>"+ dayaftertomorrowsArray["6"].wind.deg.toFixed(2) + "°" ;
	}
	else{
		var dayaftertomorrow06 = document.getElementById("dayaftertomorrow06");
		dayaftertomorrow06.innerHTML = "";
	}
	/*9*/
	if(dayaftertomorrowsArray["9"]){
		dayaftertomorrow09icon.src = "http://openweathermap.org/img/w/" + dayaftertomorrowsArray["9"].weather[0].icon + ".png";
		dayaftertomorrowtemp09.innerHTML = dayaftertomorrowsArray["9"].main.temp;
		dayaftertomorrowdescription09.innerHTML = dayaftertomorrowsArray["9"].weather[0].description;
		dayaftertomorrowmax09.innerHTML = dayaftertomorrowsArray["9"].main.temp_max;;
		dayaftertomorrowmin09.innerHTML = dayaftertomorrowsArray["9"].main.temp_min;
		dayaftertomorrowhumidity09.innerHTML = dayaftertomorrowsArray["9"].main.humidity;
		dayaftertomorrowwind09.innerHTML = dayaftertomorrowsArray["9"].wind.speed +"<br>"+ dayaftertomorrowsArray["9"].wind.deg.toFixed(2) + "°" ;
	}
	else{
		var dayaftertomorrow09 = document.getElementById("dayaftertomorrow09");
		dayaftertomorrow09.innerHTML = "";
	}
	/*12*/
	if(dayaftertomorrowsArray["12"]){
		dayaftertomorrow12icon.src = "http://openweathermap.org/img/w/" + dayaftertomorrowsArray["12"].weather[0].icon + ".png";
		dayaftertomorrowtemp12.innerHTML = dayaftertomorrowsArray["12"].main.temp;
		dayaftertomorrowdescription12.innerHTML = dayaftertomorrowsArray["12"].weather[0].description;
		dayaftertomorrowmax12.innerHTML = dayaftertomorrowsArray["12"].main.temp_max;;
		dayaftertomorrowmin12.innerHTML = dayaftertomorrowsArray["12"].main.temp_min;
		dayaftertomorrowhumidity12.innerHTML = dayaftertomorrowsArray["12"].main.humidity;
		dayaftertomorrowwind12.innerHTML = dayaftertomorrowsArray["12"].wind.speed +"<br>"+ dayaftertomorrowsArray["12"].wind.deg.toFixed(2) + "°" ;
	}
	else{
		var dayaftertomorrow12 = document.getElementById("dayaftertomorrow12");
		dayaftertomorrow12.innerHTML = "";
	}
	/*15*/
	if(dayaftertomorrowsArray["15"]){
		dayaftertomorrow15icon.src = "http://openweathermap.org/img/w/" + dayaftertomorrowsArray["15"].weather[0].icon + ".png";
		dayaftertomorrowtemp15.innerHTML = dayaftertomorrowsArray["15"].main.temp;
		dayaftertomorrowdescription15.innerHTML = dayaftertomorrowsArray["15"].weather[0].description;
		dayaftertomorrowmax15.innerHTML = dayaftertomorrowsArray["15"].main.temp_max;;
		dayaftertomorrowmin15.innerHTML = dayaftertomorrowsArray["15"].main.temp_min;
		dayaftertomorrowhumidity15.innerHTML = dayaftertomorrowsArray["15"].main.humidity;
		dayaftertomorrowwind15.innerHTML = dayaftertomorrowsArray["15"].wind.speed +"<br>"+ dayaftertomorrowsArray["15"].wind.deg.toFixed(2) + "°" ;
	}
	else{
		var dayaftertomorrow15 = document.getElementById("dayaftertomorrow15");
		dayaftertomorrow15.innerHTML = "";
	}
	/*18*/
	if(dayaftertomorrowsArray["18"]){
		dayaftertomorrow18icon.src = "http://openweathermap.org/img/w/" + dayaftertomorrowsArray["18"].weather[0].icon + ".png";
		dayaftertomorrowtemp18.innerHTML = dayaftertomorrowsArray["18"].main.temp;
		dayaftertomorrowdescription18.innerHTML = dayaftertomorrowsArray["18"].weather[0].description;
		dayaftertomorrowmax18.innerHTML = dayaftertomorrowsArray["18"].main.temp_max;;
		dayaftertomorrowmin18.innerHTML = dayaftertomorrowsArray["18"].main.temp_min;
		dayaftertomorrowhumidity18.innerHTML = dayaftertomorrowsArray["18"].main.humidity;
		dayaftertomorrowwind18.innerHTML = dayaftertomorrowsArray["18"].wind.speed +"<br>"+ dayaftertomorrowsArray["18"].wind.deg.toFixed(2) + "°" ;
	}
	else{
		var dayaftertomorrow18 = document.getElementById("dayaftertomorrow18");
		dayaftertomorrow18.innerHTML = "";
	}
	/*21*/
	if(dayaftertomorrowsArray["21"]){
		dayaftertomorrow21icon.src = "http://openweathermap.org/img/w/" + dayaftertomorrowsArray["21"].weather[0].icon + ".png";
		dayaftertomorrowtemp21.innerHTML = dayaftertomorrowsArray["21"].main.temp;
		dayaftertomorrowdescription21.innerHTML = dayaftertomorrowsArray["21"].weather[0].description;
		dayaftertomorrowmax21.innerHTML = dayaftertomorrowsArray["21"].main.temp_max;;
		dayaftertomorrowmin21.innerHTML = dayaftertomorrowsArray["21"].main.temp_min;
		dayaftertomorrowhumidity21.innerHTML = dayaftertomorrowsArray["21"].main.humidity;
		dayaftertomorrowwind21.innerHTML = dayaftertomorrowsArray["21"].wind.speed +"<br>"+ dayaftertomorrowsArray["21"].wind.deg.toFixed(2) + "°" ;
	}
	else{
		var dayaftertomorrow18 = document.getElementById("dayaftertomorrow18");
		dayaftertomorrow18.innerHTML = "";
	}
	
	  

  // icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
  // temperature.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";
  // humidity.innerHTML = jsonObject.main.humidity + "%";
}

function httpRequestAsync(url, callback)
{
  console.log("Requesting for data...");
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => { 
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true); // true for asynchronous 
    httpRequest.send();
}