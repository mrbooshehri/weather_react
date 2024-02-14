// src/Weather.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('New York'); // Default city
  const apiKey = 'your_openweathermap_api_key'

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data: ", error);
      }
    };

    fetchWeather();
  }, [city]); // Re-run effect when 'city' changes

  return (
    <div>
      <input type="text" value={city} onChange={e => setCity(e.target.value)} />
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <h3>{Math.round(weatherData.main.temp)}°C</h3>
          <p>{weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;

