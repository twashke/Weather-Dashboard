// Declare Element Variables

// Declare Variables
var now = moment()
var date = now.format("MM/DD/YYYY");

function getWeather() {

    // Variable for city entered
    var userInput = $("#input-form").val();
    // Console log user Input
    console.log("City Entered: ", userInput);
    // Set userinput and save to local storage
    localStorage.setItem("city", JSON.stringify({userInput}));
    
    // Variable for API to get latitude and longitude
    var requestLatLon = "https://api.openweathermap.org/data/2.5/weather?q="+ userInput +"&appid=ba6e0d885e4c033e81cf08113e661854";

    fetch(requestLatLon, {
        method: 'GET', 
        credentials: 'same-origin', 
        redirect: 'follow', 
    })

        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        console.log(data)
        // Variables for Latitude and Longitude
        var lat = data.coord.lat;
        var lon = data.coord.lon;
        // Console log data
        console.log("lat: ", lat);
        console.log("lon: ", lon);

        var requestWeatherUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts&appid=ba6e0d885e4c033e81cf08113e661854";

        fetch(requestWeatherUrl, {
            method: 'GET', 
            credentials: 'same-origin', 
            redirect: 'follow', 
        })

            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data)
                // Variables for current data
                var currentIcon = data.current.weather[0].icon;
                var currentIconImg = "http://openweathermap.org/img/wn/" + currentIcon 
                + ".png";
                var currentIconAlt = data.current.weather[0].main;
                // console log icon info
                console.log("icon: ", currentIcon);
                console.log("icon img: ", currentIconImg);
                console.log("icon alt: ", currentIconAlt);
                // console.log date
                console.log("date: ", date);
                // Variables for weather information current data
                var currentTemp = data.current.temp;
                var currentWind = data.current.wind_speed;
                var currentHumidity = data.current.humidity;
                var currentUvi = data.current.uvi;
                // console log data
                console.log("temp: ", currentTemp);
                console.log("wind: ", currentWind);
                console.log("humidity: ", currentHumidity);
                console.log("UVI: ", currentUvi);
                // Input Data into Current Forecast Section
                $(".city-date").text(userInput + " " + date);
                $(".weather-icon").append("<img>");
                $("img").attr("src", currentIconImg).attr("alt", currentIconAlt);
                $(".temp").text(currentTemp + " \u00B0F");
                $(".wind").text(currentWind + " MPH");
                $(".humidity").text(currentHumidity + " %");
                $(".uv-index").text(currentUvi);
                if (currentUvi <= 2) {
                    // Remove other classes and add class "low"
                    $(".uv-index").removeClass("moderate").removeClass("high").removeClass("very-high").removeClass("extreme").addClass("low")
                // Yellow = Moderate - uv index 3 - 5 = uv index less than 5
                } else if (currentUvi <= 5) {
                    // Remove other classes and add class "moderate"
                    $(".uv-index").removeClass("low").removeClass("high").removeClass("very-high").removeClass("extreme").addClass("moderate")
                // Orange = High - uv index 6 - 7 = uv index less than 7
                } else if (currentUvi <= 7) {
                    // Remove other classes and add class "high"
                    $(".uv-index").removeClass("low").removeClass("moderate").removeClass("very-high").removeClass("extreme").addClass("high")
                // Red = Very High - uv index 8 - 10 = uv index less than 10
                } else if (currentUvi <= 10) {
                    // Remove other classes and add class "very-high"
                    $(".uv-index").removeClass("low").removeClass("moderate").removeClass("high").removeClass("extreme").addClass("very-high")
                // Magenta = Extreme - uv index 11 = uv index equal or greater than 11
                } else {
                    // Remove other classes and add class "extreme"
                    $(".uv-index").removeClass("low").removeClass("moderate").removeClass("high").removeClass("very-high").addClass("extreme")
                }
                // Input Data from 5-day forecast
                
            })

        })
};


// add event listener for Search button - change to getAPI function (add previousCities function in Get API)
$(".search").on("click", getWeather);


// // Save previous user inputs for items last item entered
//     // Provide as buttons under the Search area so user can view again
//     // Provide clear button to remove and clear local storage

// // Function to return previous searches
// function previousSearches() {
//     var searches = [];
//     // Return previous search results from local storage
//     var previous = JSON.parse(localStorage.getItem("city"));
//     // Console log the search result
//     console.log("Previous Search: ", previous);
//         // Push the previous searches into a new array
//         if (Array.isArray(previous)) {
//         previous.push(searches);
//         // Set previous searches and turn into string
//         localStorage.setItem("city", JSON.stringify(searches));
//         }
//     // Create as button
//     // add event listener
//     // Rerun the search results for current weather
// };

// previousSearches();

// // Function to create Search buttons for previous searches
// function whatever() {
//     $("#previous-button").addClass("d-grid gap-2 md-block row submit-btn");
//     $("#previous-button").append("<button>" + previousSearch + "</button>").addClass("search btn btn-primary");
// }

