let inputEl = document.querySelector(".inputEl")



//used the successCallback function to get access to the current location of the user
const successCallback = (position) => {
    console.log(position)
//converted the latitude and longitude data into variables to use the api call and obtain weather
//information depending on the user location
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    //made the api url into a variable to fetch the weather data on current user location
    let api2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=imperial&appid=0fbaf1cc084855e3c67d7756d3d6a0f6`
fetch(api2)
.then(response => response.json())
.then((weatherInfo => {
    console.log(weatherInfo)
document.querySelector(".wind").textContent = `Wind: ${weatherInfo.current.wind_speed} mph`
document.querySelector(".temp").textContent = `Temp: ${weatherInfo.current.temp}`
document.querySelector(".humid").textContent = `Humidity: ${weatherInfo.current.humidity}`
document.querySelector(".uv").textContent = `Uv: ${weatherInfo.current.uvi}`
}))} 
const errorCallback = (error) => {
    console.error(error)
} 
navigator.geolocation.getCurrentPosition(successCallback,errorCallback);



// let api = `https://api.weatherapi.com/v1/forecast.json?key=3ef0c6e33fa943f4805232459211609&q=${inputEl.value}&days=6&aqi=no&alerts=no`
// let api = `https://api.weatherapi.com/v1/forecast.json?key=3ef0c6e33fa943f4805232459211609&q=irvine&days=6&aqi=no&alerts=no`

// fetch(api)
// .then((weatherData => {
//     console.log(weatherData)
// }))