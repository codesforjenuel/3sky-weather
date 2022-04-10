let inputEl = document.querySelector(".inputEl");

//used the successCallback function to get access to the current location of the user
const successCallback = (position) => {
    console.log(position)
    //converted the latitude and longitude data into variables to use the api call and obtain weather
    //information depending on the user location
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    //made the api url into a variable to fetch the weather data on current user location
    let api2 = `https://api.weatherapi.com/v1/forecast.json?key=3ef0c6e33fa943f4805232459211609&q=${lat},${lon}&days=5&aqi=no&alerts=no`
    fetch(api2)
        .then(response => response.json())
        .then((weatherInfo => {
            console.log(weatherInfo)
            //these query selectors target the today container elements  
           let codeIcon = weatherInfo.current.condition.icon
           console.log(codeIcon)
            document.querySelector(".todaySky").src =`${codeIcon}`  ;
            document.querySelector(".cityName").textContent = weatherInfo.location.name;
            document.querySelector(".today").textContent = weatherInfo.forecast.forecastday[0].date;
            document.querySelector(".temp").textContent = `Temp: ${weatherInfo.current.temp_f}°F`
            document.querySelector(".wind").textContent = `Wind: ${weatherInfo.current.wind_mph} mph`
            document.querySelector(".humid").textContent = `Humidity: ${weatherInfo.current.humidity}`
            document.querySelector(".uv").textContent = `Uv: ${weatherInfo.current.uv}`
            document.querySelector(".condition").textContent = weatherInfo.current.condition.text
            //these query selectors target tomorrow's data
            document.querySelector(".tomorrowSky").src = weatherInfo.forecast.forecastday[1].hour[12].condition.icon
            document.querySelector(".tomorrow").textContent = weatherInfo.forecast.forecastday[1].date;
            document.querySelector(".temp2").textContent = `Temp: ${weatherInfo.forecast.forecastday[1].hour[12].temp_f}°F`
            document.querySelector(".wind2").textContent = `Wind: ${weatherInfo.forecast.forecastday[1].hour[12].wind_mph} mph`
            document.querySelector(".humid2").textContent = `Humidity: ${weatherInfo.forecast.forecastday[1].hour[12].humidity}`
            document.querySelector(".uv2").textContent = `Uv: ${weatherInfo.forecast.forecastday[1].hour[12].uv}`
            document.querySelector(".condition2").textContent = weatherInfo.forecast.forecastday[1].hour[12].condition.text
            //these query selectors target the day after tomorrow's data
            document.querySelector(".dayAfterTomorrowSky").src = weatherInfo.forecast.forecastday[2].hour[12].condition.icon
            document.querySelector(".dayAfterTomorrow").textContent = weatherInfo.forecast.forecastday[2].date;
            document.querySelector(".temp3").textContent = `Temp: ${weatherInfo.forecast.forecastday[2].hour[12].temp_f}°F`
            document.querySelector(".wind3").textContent = `Wind: ${weatherInfo.forecast.forecastday[2].hour[12].wind_mph} mph`
            document.querySelector(".humid3").textContent = `Humidity: ${weatherInfo.forecast.forecastday[2].hour[12].humidity}`
            document.querySelector(".uv3").textContent = `Uv: ${weatherInfo.forecast.forecastday[2].hour[12].uv}`
            document.querySelector(".condition3").textContent = weatherInfo.forecast.forecastday[2].hour[12].condition.text
        }))
}
const errorCallback = (error) => {
    console.error(error)
}
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

//used the queryselector with an add event listener method to fetch the data when clicking the search button with the 
//value of the city name typed in the input element
let btn = document.querySelector(".btn").addEventListener("click", (event) => {
    event.preventDefault()
    
    let api = `https://api.weatherapi.com/v1/forecast.json?key=3ef0c6e33fa943f4805232459211609&q=${inputEl.value}&days=5&aqi=no&alerts=no`
    fetch(api)
        .then(response => response.json())
        .then((weatherData => {
            console.log(weatherData)
            //these query selectors target the today container elements  
            // 
    
            document.querySelector(".todaySky").src = weatherData.current.condition.icon ;
            document.querySelector(".cityName").textContent = weatherData.location.name;
            document.querySelector(".today").textContent = weatherData.forecast.forecastday[0].date;
            document.querySelector(".temp").textContent = `Temp: ${weatherData.current.temp_f}°F`
            document.querySelector(".wind").textContent = `Wind: ${weatherData.current.wind_mph} mph`
            document.querySelector(".humid").textContent = `Humidity: ${weatherData.current.humidity}`
            document.querySelector(".uv").textContent = `Uv: ${weatherData.current.uv}`
            document.querySelector(".condition").textContent = weatherData.current.condition.text
            //these query selectors target tomorrow's data
            document.querySelector(".tomorrowSky").src = weatherData.forecast.forecastday[1].hour[12].condition.icon
            document.querySelector(".tomorrow").textContent = weatherData.forecast.forecastday[1].date;
            document.querySelector(".temp2").textContent = `Temp: ${weatherData.forecast.forecastday[1].hour[12].temp_f}°F`
            document.querySelector(".wind2").textContent = `Wind: ${weatherData.forecast.forecastday[1].hour[12].wind_mph} mph`
            document.querySelector(".humid2").textContent = `Humidity: ${weatherData.forecast.forecastday[1].hour[12].humidity}`
            document.querySelector(".uv2").textContent = `Uv: ${weatherData.forecast.forecastday[1].hour[12].uv}`
            document.querySelector(".condition2").textContent = weatherData.forecast.forecastday[1].hour[12].condition.text
            //these query selectors target the day after tomorrow's data
            document.querySelector(".dayAfterTomorrowSky").src = weatherData.forecast.forecastday[2].hour[12].condition.icon
            document.querySelector(".dayAfterTomorrow").textContent = weatherData.forecast.forecastday[2].date;
            document.querySelector(".temp3").textContent = `Temp: ${weatherData.forecast.forecastday[2].hour[12].temp_f}°F`
            document.querySelector(".wind3").textContent = `Wind: ${weatherData.forecast.forecastday[2].hour[12].wind_mph} mph`
            document.querySelector(".humid3").textContent = `Humidity: ${weatherData.forecast.forecastday[2].hour[12].humidity}`
            document.querySelector(".uv3").textContent = `Uv: ${weatherData.forecast.forecastday[2].hour[12].uv}`
            document.querySelector(".condition3").textContent = weatherData.forecast.forecastday[2].hour[12].condition.text

            inputEl.value = ""
        }))
})




