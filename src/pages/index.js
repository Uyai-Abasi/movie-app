import Head from 'next/head'

import { Typography,CssBaseline,Box, Grid} from '@mui/material'
import MovieBox from '@/component/moviecard'
// import PrimarySearchAppBar from '@/component/layout/appbar'
// import Hero from '@/component/toppage/hero'
import { getRatedmovies } from '@/services/api/ratedmovies'
import { useTopRatedMovies } from '@/hooks/movies'
import { useMovieDetails } from '@/hooks/movies'
import Hero from '@/component/toppage/hero'
import Link from 'next/link';

export default function Home() {
  const color = 'white'
  const { data: movies, isLoading, isError } = useTopRatedMovies();
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }
  return (
    <>
      <Head>
        <title>Movie App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <Box >
        
      <Hero/>
      <Typography fontWeight={700} fontSize={36}style={{padding:"98px"}} > 

      Featured Movie
      </Typography>
      <Grid
      paddingX={'98px'}
                  container
                  rowSpacing={7}
                  columnSpacing={5}
               
                >
                  
          {movies?.map((item) => (
                <Grid

key={item.title}
                item
                xs={12}
                sm={6}
                md={3}  
                    >
                   <Link href={`/movie/${item.id}`} passHref>
      
<MovieBox key={item.title} {...item}/>

      </Link>
                    </Grid>
                    ))}


                </Grid>
<button onClick={getRatedmovies()}> </button>
      </Box>
    
    </>
  )
}