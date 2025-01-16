import axios from "axios";

export async function detailsService(params) {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${params.id}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDA3Y2E5YjJiYzVhZGVmNmE5ODZlNjE1ZWU0MmZjZCIsIm5iZiI6MTczNjcxMDY4NC42ODksInN1YiI6IjY3ODQxYTFjYmQ3OTNjMDM1NDRlYWJhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ga9Mu5A7S1lyKUZ4yumDAcic3bibAwAl8mJeg64kDXU",
    },
  };
  try {
    const responce = await axios.request(options);
    return responce.data;
  } catch (error) {
    console.log(error);
  }
}
