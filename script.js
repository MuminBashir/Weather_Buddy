let temp = document.getElementById('temp')
let cityname = document.getElementById('cityname')
let weatherpic = document.getElementById('weatherpic')
let windspeed = document.getElementById('windspeed')
let cloudcover = document.getElementById('cloudcover')
let humidity = document.getElementById('humidity')
let searchbox = document.getElementById('searchbox')
let city = document.getElementById('city')
let weatherbox = document.getElementById('weatherbox')

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'fed7630b2dmsh6d4649837439604p19f4a0jsn77fad645c2ad',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


let getweather = (searchcity) => {

    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${searchcity}`, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            temp.innerHTML = `${response.temp}&#x2103;`
            cityname.innerHTML = searchcity
            windspeed.innerHTML = `${response.wind_speed}&nbsp;Kmph`
            cloudcover.innerHTML = `${response.cloud_pct}&nbsp;%`
            humidity.innerHTML = `${response.humidity}&nbsp;mb`
            if (response.cloud_pct > 50) {
                weatherpic.src = "cloudy.png"
            }
            else {
                weatherpic.src = "sunny.png"
            }
        })
        .catch((err) => {
            console.error(err)
            weatherbox.innerHTML = `<h1 class="error">Service Down at the moment</h1>`
        });
}

searchbox.addEventListener('click',(e)=>{
    e.preventDefault()
    getweather(city.value)
})

getweather('Srinagar')