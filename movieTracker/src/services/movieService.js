import axios from "axios";

export async function movieService(search, page) {
  const query = encodeURIComponent(search.toLowerCase());
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/movie",
    params: {
      query: query,
      include_adult: "true",
      language: "en-US",
      page: String(page),
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDA3Y2E5YjJiYzVhZGVmNmE5ODZlNjE1ZWU0MmZjZCIsIm5iZiI6MTczNjcxMDY4NC42ODksInN1YiI6IjY3ODQxYTFjYmQ3OTNjMDM1NDRlYWJhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ga9Mu5A7S1lyKUZ4yumDAcic3bibAwAl8mJeg64kDXU",
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
