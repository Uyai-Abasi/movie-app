import axios from "axios";
 const API_KEY  = 'ef5786d4bed41df385174ad28026923c'
 const BASE_URL = 'https://api.themoviedb.org/3';
export async function getRatedmovies() {
    const url= `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    try {
      const response = await axios.get(url);
      console.log(response.data.results)
      return response.data;
    } catch (error) {
      throw error;
    }
}




export async function fetchMovieDetails(movieId) {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
      },
    });
    console.log(response.data   )
    return response.data;
  } catch (error) {
    throw error;
  }
}