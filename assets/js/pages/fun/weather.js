function getLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position);
            getWeather(position.coords.latitude, position.coords.longitude);
            reverseGeocode(position.coords.latitude, position.coords.longitude);
        }); 
      } else {
        getWeather("41.2638", "-95.9658");
        reverseGeocode("41.2638", "-95.9658");
      }
}

/////////////
//API Calls//
/////////////


function getWeather(lat, lon){
    let apiAddress = "https://api.openweathermap.org/data/3.0/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=12be7f0750ce44d51d675415558fedc5";

    fetch(apiAddress) 
    .then(response => { 
        if (response.ok) { 
        return response.json(); // Parse the response data as JSON 
        } else { 
        throw new Error('API request failed'); 
        } 
    }) 
    .then(data => { 
        displayWeather(data);
        console.log(data);
    }) 
    .catch(error => { 
        // Handle any errors here 
        console.error(error); // Example: Logging the error to the console 
    });
}  
function reverseGeocode(lat, lon){ 
    let apiAddress = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat +","+lon+"&result_type=locality&key=AIzaSyCYz0qOqUFkYeQvBFSNrJXJuIlvZNY5S5k";
    fetch(apiAddress) 
    .then(response => { 
        if (response.ok) { 
        return response.json(); // Parse the response data as JSON 
        } else { 
        throw new Error('API request failed'); 
        } 
    }) 
    .then(data => { 
        console.log(data);
        console.log(data.results[0].formatted_address);
        displayCity(data.results[0].formatted_address);
    }) 
    .catch(error => { 
        // Handle any errors here 
        console.error(error); // Example: Logging the error to the console 
    });
} 


///////////////
//Render data//
///////////////

function displayWeather(data){
    //Display current temp
    document.getElementById("current-temp").innerHTML = Math.round(data.current.temp);

    //Display weather icon
    let iconClasses = determineIcon(data.current);
    iconClasses.forEach(icon => {
        document.getElementById("weather-icon").classList.add(icon);
    });

    //display daily forecast
    var dayDivs = document.getElementsByClassName("day-line");
    console.log(dayDivs);
    dayDivs.forEach((div, i) => {
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let date = new Date (data.daily[i].dt * 1000);
        document.getElementById("date-".concat(i)).innerHTML = weekday[date.getDay()];
        document.getElementById("high-".concat(i)).innerHTML = Math.round(data.daily[i].temp.max);
        document.getElementById("low-".concat(i)).innerHTML = Math.round(data.daily[i].temp.min);
    });

    
    
}

//display time
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    h = checkTime(h);
    document.getElementById("clock").innerHTML =  h + ":" + m;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

function determineIcon(data){
    if (data.wind_speed > 10){
        let wind = ["fa-solid", "fa-wind"];
        return wind;
    } else if(data.clouds > 15) {
        let cloud = ["fa-solid", "fa-cloud"];
        return cloud;
    } else {
        let sun = ["fa-solid", "fa-sun"];
        return sun;
    }
}

function displayCity(city){
    document.getElementById("city-name").innerHTML = city;
}

function displayElevation(elevation){
    console.log(elevation.result.elevation);
    document.getElementById("elevation").innerHTML = (Math.round(elevation.result.elevation)*3.28084) + "ft";
}

