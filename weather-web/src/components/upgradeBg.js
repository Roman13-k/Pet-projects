export function upgradeBg(data) {
  const weatherBg = data.list[0].weather[0].main;
  const night = new Date().getHours();
  switch (weatherBg) {
    case "Clouds":
      return night >= 22 || night < 6 ? "bg-cloudsNight" : "bg-clouds";
    case "Clear":
      return night >= 22 || night < 6 ? "bg-night" : "bg-clear";
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
