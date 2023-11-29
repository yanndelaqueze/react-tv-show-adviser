import axios from "axios";
import { BASE_URL } from "../config";

export class TVShowAPI {
  static async fetchPopulars() {
    try {
      const response = await axios.get(
        `${BASE_URL}tv/popular?api_key=${process.env.REACT_APP_API_KEY_PARAM}`
      );
      return response.data.results;
    } catch (error) {
      alert("Error fetching Popular Shows");
    }
  }

  static async fetchRecommendations(tvShowId) {
    try {
      const response = await axios.get(
        `${BASE_URL}tv/${tvShowId}/recommendations?api_key=${process.env.REACT_APP_API_KEY_PARAM}`
      );
      return response.data.results;
    } catch (error) {
      alert("Error fetching Recommendations");
    }
  }

  static async fetchByTitle(title) {
    try {
      const response = await axios.get(
        `${BASE_URL}search/tv?api_key=${process.env.REACT_APP_API_KEY_PARAM}&query=${title}`
      );
      return response.data.results;
    } catch (error) {
      alert("Error searching Show");
    }
  }
}
