import { DalilyTemp } from "./dailyTemp";
import styles from "./weatherDetails.module.css";

export function WeatherDetails({
  weatherData,
  handleSearchChange,
  searchResults,
  handleCitySelect,
}) {
  const temp = DalilyTemp(weatherData);
  return (
    <>
      {/* иконки */}
      <div className='relative min-w-huge min-h-screen backdrop-blur-xl border-l-4 border-white border-opacity-15 bg'>
        <aside className='absolute flex flex-col overflow-y-auto w-full h-full pl-8 pt-14 pb-28 pr-28'>
          <input
            className=' bg-transparent h-12 border-b border-white  outline-none pt-3 pb-3 text-xl'
            type='text'
            placeholder='Search Location...'
            onChange={handleSearchChange}
          />
          <ul className='absolute z-10 list-none mt-12 bg-white opacity-80 min-w-80'>
            {searchResults.map((city) => (
              <li
                key={city.id}
                onClick={() => handleCitySelect(city)}
                className='cursor-pointer text-black hover:bg-slate-300'>
                {city.name}, {city.sys.country}
              </li>
            ))}
          </ul>
          <p className='mt-10 mb-14 '>Weather Details...</p>
          <p className='font-medium mb-8'>
            {weatherData.list[0].weather[0].description.toUpperCase()}
          </p>
          <ul className='flex flex-col gap-9 '>
            <li className='flex justify-between'>
              <p className='opacity-70'>Temp max: </p>
              <p className={styles.maxtemp}>{temp[1]}°</p>
            </li>
            <li className='flex justify-between'>
              <p className='opacity-70'>Temp min: </p>
              <p className={styles.mintemp}>{temp[0]}°</p>
            </li>
            <li className='flex justify-between'>
              <p className='opacity-70'> Humadity: </p>
              <p className={styles.humadity}>
                {weatherData.list[3].main.humidity}%
              </p>
            </li>
            <li className='flex justify-between'>
              <p className='opacity-70'> Cloudy: </p>
              <p className={styles.cloudy}>{weatherData.list[4].clouds.all}%</p>
            </li>
            <li className='flex justify-between'>
              <p className='opacity-70'> Wind: </p>
              <p className={styles.wind}>
                {weatherData.list[5].wind.speed}km/h
              </p>
            </li>
          </ul>
          <span className='h-12 border-b mt-20 mb-10'></span>
          <p className='mb-14'>Today’s Weather Forecast...</p>
          <ul className='flex flex-col gap-11'>
            {["1", "2", "3", "4", "5"].map((number, index) => (
              <li className='flex justify-between items-center' key={index}>
                <img
                  className='min-h-14 min-w-14'
                  src={`../../public/icons/${weatherData.list[number].weather[0].icon}.svg`}
                  alt='otherIcon.svg'
                />
                <div className='flex flex-col ml-9 mr-auto'>
                  <p>{weatherData.list[number].dt_txt.slice(10, -3)}</p>
                  <p>{weatherData.list[number].weather[0].main}</p>
                </div>
                <p className='text-2xl opacity-70'>
                  {Math.round(weatherData.list[number].main.temp)}°
                </p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  );
}
