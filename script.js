
const weatherUrl = "api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit=5&appid=beadf57284590d1d0563604641a2262e"

 
$.ajax({
    url: weatherUrl,
    method: "GET"
})

.then(function(response){
    console.log(response)
})