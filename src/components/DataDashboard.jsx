import React, { useState, useEffect } from "react";
import "./DataDashboard.css";

function Dashboard() {
  const [city, setCity] = useState("New York");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/weather?city=${city}`);
      const weatherData = await response.json();

      const forecastResponse = await fetch(`http://localhost:5000/api/forecast?city=${city}`);
      const forecastData = await forecastResponse.json();

      if (weatherData.error || forecastData.error) {
        throw new Error(weatherData.error || "Error fetching weather data.");
      }

      setWeather(weatherData);
      setForecast(forecastData.list.filter((_, index) => index % 8 === 0)); // Filter to one per day
      setError("");
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(fetchWeather, 300000); // Refresh every 5 minutes
    return () => clearInterval(interval);
  }, [city]);

  return (
    <div className="dashboard">
      <h1>Live Weather Dashboard</h1>
      
      <div className="input-container">
        <input 
          type="text" 
          placeholder="Enter city name..." 
          value={city} 
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather}>Get Weather</button>
      </div>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <img src={weather.icon} alt="Weather icon" className="weather-icon" />
          <p className="weather-description">{weather.weather[0].description}</p>
          <p>🌡️ <strong>{weather.main.temp}°C</strong></p>
          <p>💨 Wind: {weather.wind.speed} m/s</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌅 Sunrise: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
          <p>🌇 Sunset: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
        </div>
      )}

      {forecast.length > 0 && (
        <div className="forecast">
          <h3>5-Day Forecast</h3>
          <div className="forecast-grid">
            {forecast.map((day, index) => (
                <div 
                    key={index} 
                    className={`forecast-item ${expandedIndex === index ? "expanded" : ""}`} 
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                <p className="forecast-date">{new Date(day.dt * 1000).toLocaleDateString()}</p>
                <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} 
                     alt="Forecast weather icon" className="forecast-icon" />
                <p className="forecast-temp">🌡️ {day.main.temp}°C</p>
                <p className="forecast-wind">💨 {day.wind.speed} m/s</p>
                <p className="forecast-humidity">💧 {day.main.humidity}%</p>

                {expandedIndex === index && (
                  <div className="expanded-details">
                    <p>🌡️ Feels Like: {day.main.feels_like}°C</p>
                    <p>📊 Pressure: {day.main.pressure} hPa</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
