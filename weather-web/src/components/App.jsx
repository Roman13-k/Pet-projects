import { useEffect, useState } from "react";
import { WeatherDetails } from "./weatherDetails";
import axios from "axios";
import { upgradeBg } from "./upgradeBg";

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
      const { data } = await axios.get(
        `${weatherURL}?q=${selectedCity}&appid=${apiKey}&units=metric`,
      );
      setWeatherData(data);
      {
        /*добавить ночь и иконки */
      }
      const newBg = upgradeBg(data);
      setBaground(newBg);
      setIsLoading(false);
    };
    fetchWeather();

    const time = new Date().toLocaleTimeString().slice(0, -3) + " - ";
    const date = new Date().toLocaleDateString("en-En", {
      weekday: "long",
      day: "numeric",
      month: "long",
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
  {
    /*добавить анимацию загрузки */
  }
  if (isLoading) return <p>Загрузка данных...</p>;

  return (
    <main className={`flex justify-between w-screen h-screen ${baground} `}>
      <section className='flex flex-col justify-end mb-20 ml-28'>
        <article className='flex flex-row gap-3'>
          <p className='font-roboto font-normal text-10xl'>
            {Math.round(weatherData.list[0].main.temp)}°{" "}
          </p>
          <div className='flex-1 flex flex-col justify-center'>
            <h1 className='font-roboto text-6xl'> {selectedCity} </h1>{" "}
            <p className='font-roboto text-lg'> {date} </p>{" "}
          </div>
        </article>
      </section>
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
