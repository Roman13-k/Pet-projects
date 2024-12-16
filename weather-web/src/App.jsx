import axios from "axios";
import "./App.css";

function App() {
  const URL =
    "http://api.openweathermap.org/data/2.5/forecast?q=Moscow&appid=dc8c0239d7c210a49eed3a722ea3d7bc";

  async function getWeather(URL) {
    const { data } = await axios.get(URL);
    return data;
  }

  const data = getWeather(URL);

  console.log(data);

  return <></>;
}

export default App;
