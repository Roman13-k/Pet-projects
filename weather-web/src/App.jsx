import { weatherService } from "./services/weather.service";
import "./App.css";
import { useEffect, useState } from "react";
import { WeatherDetails } from "./components/weatherDetails";

function App() {
  const [weatherData, setWeatherData] = useState("");
  const [selectedCity, setSelectedCity] = useState("Minsk");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setWeatherData(weatherService.getWeather(selectedCity));
    setIsLoading(false);
  }, [selectedCity]);

  const handleSearchChange = async (e) => {
    const query = e.target.value;
    if (query.length > 2) {
      setSearchResults(weatherService.searchWeather(query));
    } else {
      setSearchResults([]);
    }
  };

  const handleCitySelect = async (city) => {
    setSelectedCity(city.name);
    setSearchResults([]);
  };

  return (
    <div>
      <header className='header'>
        <input
          type='text'
          placeholder='Search Location...'
          onChange={handleSearchChange}
        />
        <ul className='autocomplete-results'>
          {searchResults.map((city) => (
            <li
              key={city.id}
              onClick={() => handleCitySelect(city)}
              className='autocomplete-item'>
              {city.name}, {city.sys.country}
            </li>
          ))}
        </ul>
      </header>
      <WeatherDetails
        weatherData={weatherData}
        selectedCity={selectedCity}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
