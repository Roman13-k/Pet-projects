export function upgradeBg(data) {
  const weatherBg = data.list[0].weather[0].main;
  switch (weatherBg) {
    case "Clouds":
      return "bg-clouds";
    case "Clear":
      return "bg-clear";
    case "Mist":
      return "bg-mist";
    case "Rain":
      return "bg-rain";
    case "Snow":
      return "bg-snow";
    case "Thunderstorm":
      return "bg-thunderstorm";
  }
}
