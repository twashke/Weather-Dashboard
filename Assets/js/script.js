// Declare Element for PreviousBtn
var previousBtn = $(".previous-button");
var clearBtn = $(".clear-history");

// Declare Variables
var now = moment()
var date = now.format("MM/DD/YYYY");
var userInput;
var previousInput = [];

// Listener Event for Start Button
$(".search").on("click", function() {
    // Variable for city entered
    userInput = $("#input-form").val().toLowerCase().trim();
    // Console log user Input
    console.log("City Entered: ", userInput);
    // Set userinput and save to local storage
    localStorage.setItem("city", JSON.stringify({userInput}));
    // Run Weather Function
    getWeather();
});


function getWeather() {    
    // Variable for API to get latitude and longitude
    var requestLatLon = "https://api.openweathermap.org/data/2.5/weather?q="+ userInput +"&appid=ba6e0d885e4c033e81cf08113e661854";
    // Fetch request for Latitude and Longitude of City Entered
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

        // If latitude and lingitude can't be retrieved
        if (data.cod == "404") {
            window.alert("Sorry we didn't get that, please try again!");
        } 

        // Variables for Latitude and Longitude
        var lat = data.coord.lat;
        var lon = data.coord.lon;
        // Console log data
        console.log("lat: ", lat);
        console.log("lon: ", lon);
        // Variable for API to get Current and 5 Day Forecast
        var requestWeatherUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts&units=imperial&&appid=ba6e0d885e4c033e81cf08113e661854";
        // Fetch request for Weather inputting Latitude and Longitude
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
                + "@2x.png";
                var currentIconAlt = data.current.weather[0].description;
                // console log icon info
                // console.log("icon: ", currentIcon);
                // console.log("icon img: ", currentIconImg);
                // console.log("icon alt: ", currentIconAlt);
                // console.log date
                // console.log("date: ", date);
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
                $(".city-date").text(userInput + " " + date).css("text-transform", "capitalize").css("font-weight", "bold");
                $("#current-icon").attr("src", currentIconImg).attr("alt", currentIconAlt);
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

                // Variables for 5-Day Forecast
                // Day One
                var dayOne = moment().add(1, 'days').format("MM/DD/YYYY");
                var iconOne = data.daily[1].weather[0].icon;
                var iconOneImg = "http://openweathermap.org/img/wn/" + iconOne + "@2x.png";
                var iconOneAlt = data.daily[1].weather[0].description;
                var tempOne = data.daily[1].temp.day;
                var windOne = data.daily[1].wind_speed;
                var humidityOne = data.daily[1].humidity;
                // Day Two
                var dayTwo = moment().add(2, 'days').format("MM/DD/YYYY");
                var iconTwo = data.daily[2].weather[0].icon;
                var iconTwoImg = "http://openweathermap.org/img/wn/" + iconTwo + "@2x.png";
                var iconTwoAlt = data.daily[2].weather[0].description;
                var tempTwo = data.daily[2].temp.day;
                var windTwo = data.daily[2].wind_speed;
                var humidityTwo = data.daily[2].humidity;
                // Day Three
                var dayThree = moment().add(3, 'days').format("MM/DD/YYYY");
                var iconThree = data.daily[3].weather[0].icon;
                var iconThreeImg = "http://openweathermap.org/img/wn/" + iconThree + "@2x.png";
                var iconThreeAlt = data.daily[3].weather[0].description;
                var tempThree = data.daily[3].temp.day;
                var windThree = data.daily[3].wind_speed;
                var humidityThree = data.daily[3].humidity;
                // Day Four
                var dayFour = moment().add(4, 'days').format("MM/DD/YYYY");
                var iconFour = data.daily[4].weather[0].icon;
                var iconFourImg = "http://openweathermap.org/img/wn/" + iconFour + "@2x.png";
                var iconFourAlt = data.daily[4].weather[0].description;
                var tempFour = data.daily[4].temp.day;
                var windFour = data.daily[4].wind_speed;
                var humidityFour = data.daily[4].humidity;
                // Day Four
                var dayFive = moment().add(5, 'days').format("MM/DD/YYYY");
                var iconFive = data.daily[5].weather[0].icon;
                var iconFiveImg = "http://openweathermap.org/img/wn/" + iconFive + "@2x.png";
                var iconFiveAlt = data.daily[5].weather[0].description;
                var tempFive = data.daily[5].temp.day;
                var windFive = data.daily[5].wind_speed;
                var humidityFive = data.daily[5].humidity;
                // Input Day One Forecast
                $("#date-one").addClass("five-day");
                $(".date-one").text(dayOne).css("text-align", "center").css("color", "black");
                $(".icon-1").attr("src", iconOneImg).attr("alt", iconOneAlt);
                $(".temp-1").text(tempOne + " \u00B0F");
                $(".wind-1").text(windOne + " MPH");
                $(".humidity-1").text(humidityOne + " %");
                // Input Day Two Forecast
                $("#date-two").addClass("five-day");
                $(".date-two").text(dayTwo).css("text-align", "center").css("color", "black");
                $(".icon-2").attr("src", iconTwoImg).attr("alt", iconTwoAlt);
                $(".temp-2").text(tempTwo + " \u00B0F");
                $(".wind-2").text(windTwo + " MPH");
                $(".humidity-2").text(humidityTwo + " %")
                // Input Day Three Forecast
                $("#date-three").addClass("five-day");
                $(".date-three").text(dayThree).css("text-align", "center").css("color", "black");
                $(".icon-3").attr("src", iconThreeImg).attr("alt", iconThreeAlt);
                $(".temp-3").text(tempThree + " \u00B0F");
                $(".wind-3").text(windThree + " MPH");
                $(".humidity-3").text(humidityThree + " %");
                // Input Day Four Forecast
                $("#date-four").addClass("five-day");
                $(".date-four").text(dayFour).css("text-align", "center").css("color", "black");
                $(".icon-4").attr("src", iconFourImg).attr("alt", iconFourAlt);
                $(".temp-4").text(tempFour + " \u00B0F");
                $(".wind-4").text(windFour + " MPH");
                $(".humidity-4").text(humidityFour + " %");
                // Input Day Five Forecast
                $("#date-five").addClass("five-day");
                $(".date-five").text(dayFive).css("text-align", "center").css("color", "black");
                $(".icon-5").attr("src", iconFiveImg).attr("alt", iconFiveAlt);
                $(".temp-5").text(tempFive + " \u00B0F");
                $(".wind-5").text(windFive + " MPH");
                $(".humidity-5").text(humidityFive + " %");
                // Capitalize search input
                $("button").css("text-transform", "capitalize");

                const prevSearch = previousInput.includes(userInput);
                console.log("Input: ", prevSearch);

                    if(prevSearch === false) {
                        // Add button to section and add dash to cities with spaces
                        $(".previous-button").append("<button id= " + userInput.replace(/\s/g , "-") + ">" + userInput + "</button>");
                    }
                
                // Creating array of user inputs
                previousInput.push(userInput);
                // console logging above array
                console.log(previousInput);
                    
            })
        })
        // Clear search field
        $(".city-search").val("");
    };

// Function to pull up previous city
function previousCity(event) {
    // Variable for item clicked
    var buttonClicked = event.target.id;
    // Console log to button clicked
    console.log("Button clicked: ", buttonClicked);
    // replace dashes with spaces for weather API
    var prevCityChosen = buttonClicked.replace("-", " ");
    console.log(prevCityChosen);
    // userInput changes to previous city
    userInput = prevCityChosen
    // Run getWeather function 
    getWeather();
}

// Event handler for previous city buttons
previousBtn.on("click", previousCity);

// Clear History Function
function clearHistory() {
    var clearInput = [];
    // Clear out buttons in previous button section
    $(".previous-button").empty();
    // Set previousInput variable to empty
    previousInput = clearInput;
}

clearBtn.on("click", clearHistory);