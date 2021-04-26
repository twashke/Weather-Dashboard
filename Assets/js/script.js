// Create way to take user city input and convert to latitude and longitude
    // Autocomplete geocoding API - refer to https://apidocs.geoapify.com/docs/geocoding/api/
        // https://api.geoapify.com/v1/geocode/autocomplete
            // Step by step tutorial https://apidocs.geoapify.com/samples/autocomplete/autocomplete-tutorial/#step-1


// Fetch information from API
    // https://api.openweathermap.org/data/2.5/onecall?lat= user fill in latitude &lon=- user fill in longitude &exclude=hourly,minutely,alerts&appid={fe8522e8db720eab5b888ddc0854648d}

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


    // Provide 5 day forecast that displays: 
        // Date
        // Weather Conditions: - "daily"
            // Icon of conditions - "daily.weather.icon"
                // For code 500 - light rain icon = "10d". See below a full list of codes
                // URL is http://openweathermap.org/img/wn/10d@2x.png - refer to https://openweathermap.org/weather-conditions
            // Temperature - "daily.temp.day"
            // Humidity - "daily.humidity"
            // Wind speed - "daily.wind_speed"

// Save previous user inputs for items last item entered
    // Provide as buttons under the Search area so user can view again
    // Provide clear button to remove and clear local storage

