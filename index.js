
const apiKey = "4a8eadf00ca658203f3cdf6c889a5c03";
const container = document.querySelector('.container');
const search = document.getElementById('search');
search.value = '';
const searchButton = document.getElementById('search-button');
const error = document.querySelector('.not-found');
const weather = document.querySelector('.weather');
const weatherDetails = document.querySelector('.weather-details');
const measureButton = document.getElementById('measurement');
let measurement = "imperial";

measureButton.addEventListener('click', () =>{
    if(measurement === "imperial"){
        measurement = "metric"
        measureButton.innerHTML = 'M'
    }else{
        measurement = "imperial"
        measureButton.innerHTML = 'I'
    }
});
search.addEventListener("keydown", (e) => {
    if (e.key == "Enter" && search.value != "") {
        const location = search.value;
        if(location === ''){
            return
        }
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${measurement}&appid=${apiKey}`)
            .then(response => response.json())
            .then(json =>{
                if(json.cod === '404'){
                    container.style.height = '500px';
                    weather.style.display = 'none';
                    weatherDetails.style.display = 'none';
                    error.style.display = 'block';
                    error.classList.add('fadeIn');
                    return;
                }
                error.style.display = 'none';
                error.classList.remove('fadeIn');

                const wIcon = document.querySelector('.w-icon');
                const desc = document.querySelector('.w-desc');
                const temp = document.querySelector('.w-temp');
                const humidity = document.querySelector('.humidity');
                const wind = document.querySelector('.wind');
                const location = document.querySelector('.w-location');
                switch(json.weather[0].main){
                    case 'Clear':
                    wIcon.src = 'images/clear.png';
                    break;

                    case 'Rain':
                    wIcon.src = 'images/rain.png';
                    break;

                    case 'Snow':
                    wIcon.src = 'images/snow.png';
                    break;

                    case 'Clouds':
                    wIcon.src = 'images/clouds.png';
                    break;

                    case 'Haze':
                    case 'Mist':
                    wIcon.src = 'images/mist.png';
                    break;
                    
                    default:
                    wIcon.src = '';

                }
                if(measurement === "imperial"){
                    temp.innerHTML = `${Math.round(json.main.temp)} °F`;
                    wind.innerHTML = `${Math.round(json.wind.speed)} mi/h`;
                }else{
                    temp.innerHTML = `${Math.round(json.main.temp)} °C`;
                    wind.innerHTML = `${Math.round(json.wind.speed)} km/h`;
                }
                
                desc.innerHTML = `${json.weather[0].description}`;
                humidity.innerHTML = `${json.main.humidity}%`;
                
                location.innerHTML = `${json.name}, ${json.sys.country}`;

                weather.style.display = '';
                weatherDetails.style.display = '';
                weather.classList.add('fadeIn');
                weatherDetails.classList.add('fadeIn');
                container.style.height = '500px';

            })
    }
})
