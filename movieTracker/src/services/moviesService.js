import axios from "axios";

export async function getMovies(search, page) {
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

export async function getDetails(params) {
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

export async function getVideos(params) {
  try {
    const responce = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=7007ca9b2bc5adef6a986e615ee42fcd&language=en-US`,
    );
    return responce.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getRec(params, page = 1) {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${params?.id}/recommendations`,
    params: { language: "en-US", page: String(page) },
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

export async function getComments(params) {
  try {
    const responce = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}/reviews?api_key=7007ca9b2bc5adef6a986e615ee42fcd&language=en-US&page=1`,
    );
    return responce.data;
  } catch (error) {
    console.log(error);
  }
}
