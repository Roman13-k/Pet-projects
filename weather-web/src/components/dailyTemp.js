export function DalilyTemp(weatherData) {
  const today = new Date().getDate();
  let minTemp = Number.POSITIVE_INFINITY;
  let maxTemp = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < weatherData.list.length; i++) {
    const forecast = weatherData.list[i];
    const forecastDate = new Date(forecast.dt_txt).getDate();

    if (forecastDate === today && forecast.main.temp_min < minTemp) {
      minTemp = forecast.main.temp_min;
    }

    if (forecastDate === today && forecast.main.temp_max > maxTemp) {
      maxTemp = forecast.main.temp_max;
    }
  }
  return [Math.floor(minTemp), Math.ceil(maxTemp)];
}
