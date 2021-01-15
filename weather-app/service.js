import axios from 'axios';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const getWeatherData = async (lat, lon) => {
    try {
        const weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,daily&appid=${apiKey}`);
        console.log(weatherData);
        return weatherData;
    } catch (error) {
        console.log(error);
    }
};

