import axios from "axios";

class HomeService {
  async getPopular() {
    const respose = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=7007ca9b2bc5adef6a986e615ee42fcd&language=en-US",
    );
    return respose.data;
  }

  async getTopRated() {
    const respose = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=7007ca9b2bc5adef6a986e615ee42fcd&language=en-US",
    );
    return respose.data;
  }

  async getUpcoming() {
    const respose = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=7007ca9b2bc5adef6a986e615ee42fcd&language=en-US",
    );
    return respose.data;
  }

  async getPrevWatched() {
    const respose = await axios.get("http://localhost:5000/prevWatched");
    return respose.data;
  }

  async postPrevWatched(id, movie) {
    await axios.post("http://localhost:5000/prevWatched", {
      id: String(id),
      movie: movie,
    });
  }
}

export const homeService = new HomeService();
