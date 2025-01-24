import axios from "axios";

class WatchListService {
  URL = "http://localhost:3000/watchlist";

  async getWatchlist() {
    const response = await axios.get(this.URL);
    return response.data;
  }

  async getMovieById(id) {
    try {
      await axios.get(this.URL + `/${id}`);
      return true;
    } catch {
      return false;
    }
  }

  async postToWatchList(id, movie) {
    await axios.post(this.URL, {
      id: String(id),
      movie,
    });
  }

  async deleteFromWatchList(id) {
    await axios.delete(this.URL + `/${id}`);
  }
}

export const watchListService = new WatchListService();
