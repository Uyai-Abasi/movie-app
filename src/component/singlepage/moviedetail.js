import React from 'react'
import { useMovieDetails } from '@/hooks/movies';
import { useRouter } from 'next/router';
export default function Moviedetail() {
  const router = useRouter();
  const { id: movieId } = router.query;
  const { data: movie, isLoading, isError } = useMovieDetails(movieId);
  console.log('movieId:', movieId); // Check if movieId is defined
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching movie details</div>;
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }
  return (
    <div></div>
  )
}
