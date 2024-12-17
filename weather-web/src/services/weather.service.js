import axios from "axios";

class WeatherService {
  weatherURL = "http://api.openweathermap.org/data/2.5/forecast";
  searchURL = "http://api.openweathermap.org/data/2.5/find";
  apiKey = "dc8c0239d7c210a49eed3a722ea3d7bc";

  async getWeather(city) {
    try {
      const { data } = await axios.get(
        `${this.weatherURL}?q=${city}&appid=${this.apiKey}&units=metric`,
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async searchWeather(query) {
    try {
      const { data } = await axios.get(
        `${this.searchURL}?q=${query}&appid=${this.apiKey}&units=metric`,
      );
      return data.list;
    } catch (error) {
      console.log(error);
    }
  }
}

export const weatherService = new WeatherService();
