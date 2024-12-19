import { DalilyTemp } from "./dailyTemp";

export function WeatherDetails({
  weatherData,
  handleSearchChange,
  searchResults,
  handleCitySelect,
}) {
  const temp = DalilyTemp(weatherData);
  return (
    <>
      {/*стилизация блюр */}
      <aside className='flex flex-col min-w-96 min-h-screen overflow-y-auto border-l-4 border-black border-opacity-15 pl-8 pt-14 '>
        <input
          className='text-black'
          type='text'
          placeholder='Search Location...'
          onChange={handleSearchChange}
        />
        <ul className='absolute z-10 list-none border border-yellow-200 mt-6 bg-white'>
          {searchResults.map((city) => (
            <li
              key={city.id}
              onClick={() => handleCitySelect(city)}
              className='cursor-pointer text-black hover:bg-slate-300'>
              {city.name}, {city.sys.country}
            </li>
          ))}
        </ul>
        <p>Weather Details...</p>
        <p>{weatherData.list[0].weather[0].description.toUpperCase()}</p>
        <ul className='weather-details'>
          <li className='weather-item'>Temp max: {temp[1]}°</li>
          <li className='weather-item'>Temp min: {temp[0]}°</li>
          <li className='weather-item'>
            Humadity: {weatherData.list[3].main.humidity}%
          </li>
          <li className='weather-item'>
            Cloudy: {weatherData.list[4].clouds.all}%
          </li>
          <li className='weather-item'>
            Wind: {weatherData.list[5].wind.speed}km/h
          </li>
        </ul>
        <ul className='future-weather'>
          {["1", "2", "3", "4", "5"].map((number) => (
            <li className='future-weather-item' key={number}>
              {weatherData.list[number].dt_txt.slice(10, -3)}{" "}
              {Math.round(weatherData.list[number].main.temp)}°
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
