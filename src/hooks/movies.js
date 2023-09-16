// import { useQuery } from 'react-query';
import { useQuery } from 'react-query';
import { fetchMovieDetails } from '@/services/api/ratedmovies';
import axios from 'axios';
const API_KEY = 'ef5786d4bed41df385174ad28026923c';

export function useTopRatedMovies() {
  return useQuery('topRatedMovies', async () => {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    const response = await axios.get(url);
    return response.data.results; 
  });
}



export function useMovieDetails(movieId) {
  return useQuery(['movieDetails', movieId], () => fetchMovieDetails(movieId));
}
