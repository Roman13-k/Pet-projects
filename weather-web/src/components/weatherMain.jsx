export function WeatherMain({ weatherData, selectedCity, date }) {
  return (
    <section className='flex flex-col justify-end mb-20 ml-28'>
      <article className='flex flex-row gap-3'>
        <p className='font-roboto font-normal text-10xl'>
          {Math.round(weatherData.list[0].main.temp)}°
        </p>
        <div className='flex-1 flex flex-col flex-nowrap justify-center'>
          <h1 className='font-roboto text-6xl'> {selectedCity} </h1>
          <p className='font-roboto text-lg'> {date} </p>
        </div>
        <img
          className='min-h-16 min-w-16'
          src={`../../public/icons/${weatherData.list[0].weather[0].icon}.svg`}
          alt='mainIcon.svg'
        />
      </article>
    </section>
  );
}
