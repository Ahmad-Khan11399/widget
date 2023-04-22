import React, { useState, useEffect } from "react";
const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;


const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("Mumbai");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error(error);
        setWeather(null);
      }
    };
    fetchWeather();
  }, [location]);

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="weather">
      <form>
        <strong><label htmlFor="location-select">Select a city:</label></strong>
        <select
          id="location-select"
          name="location"
          value={location}
          onChange={handleChange}
        >
          <option value="">Select a city</option>
          <option value="New York">New York</option>
          <option value="Tokyo">Tokyo</option>
          <option value="London">London</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Dubai">Dubai</option>
          <option value="Toronto">Toronto</option>
          <option value="Moscow">Moscow</option>
        </select>
      </form>
      {weather ? (
        <div>
      <strong><h2>Current weather in {location}:</h2>  </strong>
      <strong><p>Temperature: {weather.main.temp}°C</p>  </strong>
      <strong><p>Humidity: {weather.main.humidity}%</p>  </strong>
      <strong><p>Wind Speed: {weather.wind.speed} kmph</p>  </strong>
        </div>
      ) : (
        <p>Failed to fetch weather data.</p>
      )}
    </div>
  );
};

export default WeatherWidget;
