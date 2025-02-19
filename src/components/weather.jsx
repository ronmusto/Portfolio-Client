import React, { useState } from "react";
import "./Weather.css";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  // Fetch weather data from the backend
  const fetchWeather = async () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const requestUrl = `${backendUrl}/api/weather?city=${city}`;
    
    console.log("Fetching from:", requestUrl);
  
    try {
      const response = await fetch(requestUrl);
      console.log("Response Status:", response.status);
      
      // Read response as text for debugging
      const text = await response.text();
      console.log("Raw Response:", text);
  
      // Try parsing JSON
      const data = JSON.parse(text);
      console.log("Parsed JSON:", data);
  
      setWeather(data);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Network error. Please check your connection.");
    }
  };
  
  

  return (
    <div className="weather-container">
      <h2>Check the Weather</h2>
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-info">
          <h3>{weather.name}</h3>
          <p>{weather.weather[0].description}</p>
          <p>🌡️ {weather.main.temp}°C</p>
          <p>💨 Wind: {weather.wind.speed} m/s</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
