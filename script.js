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
document.querySelector(".cityName").textContent =  weatherInfo.location.name;
document.querySelector(".today").textContent = weatherInfo.forecast.forecastday[0].date;   
document.querySelector(".temp").textContent = `Temp: ${weatherInfo.current.temp_f}°F`
document.querySelector(".wind").textContent = `Wind: ${weatherInfo.current.wind_mph} mph`
document.querySelector(".humid").textContent = `Humidity: ${weatherInfo.current.humidity}`
document.querySelector(".uv").textContent = `Uv: ${weatherInfo.current.uv}`
//these query selectors target tomorrow's data
document.querySelector(".tomorrow").textContent = weatherInfo.forecast.forecastday[0].date;

//these query selectors target the day after tomorrow's data
}))} 
const errorCallback = (error) => {
    console.error(error)
} 
navigator.geolocation.getCurrentPosition(successCallback,errorCallback);

let btn = document.querySelector(".btn").addEventListener("click", () => {
    let inputEl = document.querySelector(".inputEl");
    let api = `https://api.weatherapi.com/v1/forecast.json?key=3ef0c6e33fa943f4805232459211609&q=${inputEl.value}&days=5&aqi=no&alerts=no`

fetch(api)
.then(response => response.json())
.then((weatherData => {
    console.log(weatherData)

}))
})




