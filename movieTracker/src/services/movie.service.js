import axios from "axios";

class MovieService {
  API_BASE_URL = "https://api.themoviedb.org/3";
  API_KEY = "7007ca9b2bc5adef6a986e615ee42fcd";

  async getMovies(search, page) {
    try {
      const query = encodeURIComponent(search.toLowerCase());
      const response = await axios.get(`${this.API_BASE_URL}/search/movie`, {
        params: {
          api_key: this.API_KEY,
          query,
          include_adult: true,
          language: "en-US",
          page,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getDetails(params) {
    try {
      const response = await axios.get(
        `${this.API_BASE_URL}/movie/${params.id}?api_key=${this.API_KEY}&language=en-US`,
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getVideos(params) {
    try {
      const responce = await axios.get(
        `${this.API_BASE_URL}/movie/${params.id}/videos?api_key=${this.API_KEY}`,
      );
      return responce.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getRec(params, page = 1) {
    try {
      const response = await axios.get(
        `${this.API_BASE_URL}/movie/${params.id}/recommendations?api_key=${this.API_KEY}&language=en-US&page=${page}`,
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getComments(params) {
    try {
      const responce = await axios.get(
        `${this.API_BASE_URL}/movie/${params.id}/reviews?api_key=${this.API_KEY}&language=en-US&page=1`,
      );
      return responce.data;
    } catch (error) {
      console.log(error);
    }
  }
}
export const movieService = new MovieService();
