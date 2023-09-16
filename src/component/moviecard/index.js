import React from 'react'
import { Typography, Box, IconButton, Card,Stack } from '@mui/material'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { useTopRatedMovies } from '@/hooks/movies'
import Image from 'next/image'

import Apple from '/src/images/PngItem_1381056 1.png'
import IMDP from '/src/images/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png'
import {AiOutlineHeart}from 'react-icons/ai'

export function CustomImage({ src, alt, ...rest }) {
    if (src.startsWith('http') || src.startsWith('https')) {
      return <Image src={src} alt={alt} {...rest}  width={50}
      height={50} />;
    }
  
    return <Image src={src} alt={alt} {...rest}  width={50}
    height={50}/>;
  }

export default function MovieBox(props) {
    const { data: movies, isLoading, isError } = useTopRatedMovies();
    
    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (isError) {
        return <div>Error fetching data</div>;
      }
    return (

        <div>
        {/* {movies.map((movie) => ( */}

        <Card
        // key={movie.id}

        data-testid="movie-card"
          sx={{
            background: "#FFFFF",
            width:{md:"250px", xs:"100%"},
            height:"490px",
          }}
        >
          <Box
            // boxShadow="0px 14.633px 29.2659px rgba(0, 0, 0, 0.059)"
            height={"100%"}
          >
            <Box height="330px"  position="relative" width={{md:"250px", xs:"100%"}}>
              <Box height="220px" >
              <CustomImage
                src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}
                alt={props.title}
                data-testid="movie-poster"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              </Box>
              </Box>
              <Stack sx={{mt:"12px"}}>
              <Box sx={{top:"100%"}}>
                  <Typography 
                  data-testid="movie-release-date"
                  sx={{color: "var(--gray-400, #9CA3AF)", 
                  fontSize:"12px",
                   fontWieght:"700"}}>
                    {props.release_date}</Typography>
                  <Typography
                  data-testid="movie-title"
                   sx={{
                    color: "var(--gray-900, #111827)",
                   fontSize:"18px",
                    fontWieght:"700",
                     mt:"12px"}}>{props.title}</Typography>
              </Box>
              <Stack direction="row" sx={{mt:"12px"}}>
                  <Stack direction="row">
                      <Box>
                      <Image src={IMDP} alt="imdp" />
                      </Box>
                      <Typography sx={{mx:"10px", color:"#000000"}}>860/100</Typography>
                  </Stack>
                  <Stack direction="row" ml="70px">
                  <Box>
                      <Image src={Apple} alt="apple" />
                  </Box>
                      <Typography sx={{mx:"10px", color:"#000000"}}>97%</Typography>
                  </Stack>
              </Stack>
  
            <Box
                position="absolute"
                sx={{
                  color: "#FFFFFF",
                  width: "40px",
                  bottom: 5,
                  ml: "5px",
                  // backgroundColor: "#BD000D",
                  alignItems: "center",
                  height: "20px",
                }}
              >
                <Box
                  sx={{
                    mx: "10px",
                    mt: "3px",
                  }}
                >
                  <AiOutlineHeart/>
                </Box>
              </Box>
                  <Box>
                      <Typography sx={{color: "var(--gray-400, #9CA3AF)",
                   fontSize:"12px", fontWieght:"700", mt:"12px"}}>{}</Typography>
                  </Box>
              </Stack>
            </Box>
          {/* </Box> */}
        </Card>
     
        </div>
    )
}
