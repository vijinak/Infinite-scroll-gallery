import axios from "axios";

const API_URL = "https://api.unsplash.com/photos";
const API_KEY = process.env.REACT_APP_UNSPLASH_KEY;

export const fetchPhotos = async (page, perPage = 10) => {
  try {
    const response = await axios.get(`${API_URL}?client_id=${API_KEY}&page=${page}&per_page=${perPage}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching photos:", error);
    throw error;
  }
};
