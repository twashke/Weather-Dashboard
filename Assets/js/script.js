// Declare Element Variables

// Declare Variables
var apiKey = "fe8522e8db720eab5b888ddc0854648d";


// Fetch latitude and longitude from city input from API Open Weather
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    // coord.lon
    // coord.lat
// Fetch weather information
// https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=minutely,hourly,daily,alerts&appid={API key}

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

// Handle Search Button Function - Having Issues console logging undefined
function handleSearchBtn() {
    // Variable for city entered
    var userInput = $("#input-form").val();
    // Console log user Input
    console.log("City Entered: ", userInput);
    // Save to local storage
    localStorage.setItem("city", JSON.stringify(userInput));
}
// add event listener for Search button
$(".search").on("click", handleSearchBtn);




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


