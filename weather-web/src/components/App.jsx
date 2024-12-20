import { useEffect, useState } from "react";
import { WeatherDetails } from "./weatherDetails";
import axios from "axios";
import moment from "moment-timezone";
import { upgradeBg } from "./upgradeBg";
import { WeatherMain } from "./weatherMain";

function App() {
  const [weatherData, setWeatherData] = useState("");
  const [selectedCity, setSelectedCity] = useState("Minsk");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [date, setDate] = useState("");
  const [baground, setBaground] = useState("");

  const weatherURL = "http://api.openweathermap.org/data/2.5/forecast";
  const searchURL = "http://api.openweathermap.org/data/2.5/find";
  const apiKey = "dc8c0239d7c210a49eed3a722ea3d7bc";

  useEffect(() => {
    const fetchWeather = async () => {
      setIsLoading(true);
      {
        /*время */
      }
      const { data } = await axios.get(
        `${weatherURL}?q=${selectedCity}&appid=${apiKey}&units=metric`,
      );

      setWeatherData(data);
      setBaground(upgradeBg(data));

      setIsLoading(false);
    };
    fetchWeather();

    const time = new Date().toLocaleTimeString().slice(0, -3) + " - ";
    const date = new Date().toLocaleDateString("en-En", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    setDate(time + date);
  }, [selectedCity]);

  const handleSearchChange = async (e) => {
    const query = e.target.value;
    if (query.length > 2) {
      const { data } = await axios.get(
        `${searchURL}?q=${query}&appid=${apiKey}&units=metric`,
      );
      setSearchResults(data.list);
    } else {
      setSearchResults([]);
    }
  };

  const handleCitySelect = async (city) => {
    setSelectedCity(city.name);
    setSearchResults([]);
  };

  if (isLoading)
    return (
      <div className='flex items-center justify-center h-screen'>
        <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500'></div>
      </div>
    );

  return (
    <main
      className={`flex justify-between w-screen h-screen ${baground} bg-center`}>
      <WeatherMain
        weatherData={weatherData}
        selectedCity={selectedCity}
        date={date}
      />

      <WeatherDetails
        weatherData={weatherData}
        searchResults={searchResults}
        handleCitySelect={handleCitySelect}
        handleSearchChange={handleSearchChange}
      />
    </main>
  );
}

export default App;
