

# JavaScript Weather App

This is a simple weather app created with HTML, CSS, and JavaScript. It uses the OpenWeather API to fetch the current weather conditions for a user-specified location and displays the results on the page.

To watch a video demonstrating the site, go here:  

## Usage

Simply enter a location into the input field and press "enter". The site will fetch the current weather data for the location and display it on the page.

## Features

- Fetches current weather data using the OpenWeather API
- Displays weather temperature for user-specified location
- Displays Humidity and Wind Speed for user-specified location
- Background changes to depict the location's current weather conditions
- Can change between imperial and metric measuring system

## Cloning

To run this project on your local machine, follow these steps:

1. Clone this repository to your local machine using `git clone https://github.com/blueswizzle/js-weather-app.git`
2. Register for your own API Key
3. Open the `index.html` file in your web browser

## API Key

This app uses the OpenWeather API to fetch weather data. To use the API, you will need to sign up for a free API key from the [OpenWeather website](https://openweathermap.org/api). Once you have your API key, replace the placeholder text in `index.js` with your API key. The key commented out in my code has been deactivated so it won't work.

```javascript
const apiKey = "YOUR_API_KEY_HERE";
```

## Credits

This project was created by [blueswizzle](https://github.com/blueswizzle). The weather data is provided by the [OpenWeather API](https://openweathermap.org/api).
