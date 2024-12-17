export function WeatherDetails(weatherData, selectedCity, isLoading) {
  if (
    isLoading
    //|| !weatherData
    //|| !weatherData.list
    //|| weatherData.list.length == 0
  )
    return <p>Загрузка данных...</p>;

  return (
    <>
      <h1>
        {selectedCity}: {weatherData.list[0].main.temp} °
      </h1>
      <div className='weather'>
        <p>Weather Details...</p>
        <p>{weatherData.list[0].weather[0].description.toUpperCase()}</p>
        <ul className='weather-details'>
          <li className='weather-item'>
            {/*среднее считать по всему дню */}
            Temp max: {weatherData.list[1].main.temp_max}°
          </li>
          <li className='weather-item'>
            Temp min: {weatherData.list[2].main.temp_min}°
          </li>
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
          <li className='future-weather-item'>
            {weatherData.list[1].dt_txt.slice(10, -3)}{" "}
            {weatherData.list[1].main.temp}°
          </li>
          <li className='future-weather-item'>
            {weatherData.list[2].dt_txt.slice(10, -3)}{" "}
            {weatherData.list[2].main.temp}°
          </li>
          <li className='future-weather-item'>
            {weatherData.list[3].dt_txt.slice(10, -3)}{" "}
            {weatherData.list[3].main.temp}°
          </li>
          <li className='future-weather-item'>
            {weatherData.list[4].dt_txt.slice(10, -3)}{" "}
            {weatherData.list[4].main.temp}°
          </li>
          <li className='future-weather-item'>
            {weatherData.list[5].dt_txt.slice(10, -3)}{" "}
            {weatherData.list[5].main.temp}°
          </li>
          <li className='future-weather-item'>
            {weatherData.list[6].dt_txt.slice(10, -3)}{" "}
            {weatherData.list[6].main.temp}°
          </li>
        </ul>
      </div>
    </>
  );
}
