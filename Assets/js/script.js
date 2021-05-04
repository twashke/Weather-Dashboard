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
                var icon = data.current.weather[0].icon;
                var iconImg = "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
                // console log icon info
                console.log("icon: ", icon);
                console.log("icon img: ", iconImg);
                // console.log date
                console.log("date: ", date);
                


            })

        })
};



// User input should provide the following
    // City Name
    // Date
    // Weather conditions: - "current"
        // Icon of conditions - "current.weather.icon"
            // For code 500 - light rain icon = "10d". See below a full list of codes
            // URL is http://openweathermap.org/img/wn/10d@2x.png - refer to https://openweathermap.org/weather-conditions
        // Temperature - "current.temp"
        // Humidity - "current.humidity"
        // Wind speed - "current.wind_speed"
        // UV Index - "current.uvi"

// Declare Variables
var uvIndex;    

// Function to change UV Index Color depending on severity
function changeIndexColor() {          
    // Green = Low - uv index 1 - 2 = uv index less than 2
    if (uvIndex <= 2) {
        // Remove other classes and add class "low"
        $("#uv-index").removeClass("moderate").removeClass("high").removeClass("very-high").removeClass("extreme").addClass("low")
    // Yellow = Moderate - uv index 3 - 5 = uv index less than 5
    } else if (uvIndex <= 5) {
        // Remove other classes and add class "moderate"
        $("#uv-index").removeClass("low").removeClass("high").removeClass("very-high").removeClass("extreme").addClass("moderate")
    // Orange = High - uv index 6 - 7 = uv index less than 7
    } else if (uvIndex <= 7) {
        // Remove other classes and add class "high"
        $("#uv-index").removeClass("low").removeClass("moderate").removeClass("very-high").removeClass("extreme").addClass("high")
    // Red = Very High - uv index 8 - 10 = uv index less than 10
    } else if (uvIndex <= 10) {
        // Remove other classes and add class "very-high"
        $("#uv-index").removeClass("low").removeClass("moderate").removeClass("high").removeClass("extreme").addClass("very-high")
    // Magenta = Extreme - uv index 11 = uv index equal or greater than 11
    } else {
        // Remove other classes and add class "extreme"
        $("#uv-index").removeClass("low").removeClass("moderate").removeClass("high").removeClass("very-high").addClass("extreme")
    }
};

// Handle Search Button Function - Need to push into an array for multiple searches
// function getCityLatLon() {
//     // Variable for city entered
//     var userInput = $("#input-form").val();
//     // Console log user Input
//     console.log("City Entered: ", userInput);
//     // Set userinput and save to local storage
//     localStorage.setItem("city", JSON.stringify({city: userInput}));
// };


// add event listener for Search button - change to getAPI function (add previousCities function in Get API)
$(".search").on("click", getWeather);



//     // Provide 5 day forecast that displays: 
//         // Date
//         // Weather Conditions: - "daily"
//             // Icon of conditions - "daily.weather.icon"
//                 // For code 500 - light rain icon = "10d". See below a full list of codes
//                 // URL is http://openweathermap.org/img/wn/10d@2x.png - refer to https://openweathermap.org/weather-conditions
//             // Temperature - "daily.temp.day"
//             // Humidity - "daily.humidity"
//             // Wind speed - "daily.wind_speed"

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

