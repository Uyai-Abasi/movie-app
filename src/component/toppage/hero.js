import { Card, Box, Typography, Stack, Button } from '@mui/material'
import React from 'react'
import PrimarySearchAppBar from '../layout/appbar'
import hero from '/src/images/Poster.png'
import tag from '/src/images/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png'
import orange from '/src/images/PngItem_1381056 1.png'
import Image from 'next/image'
import { BiPlayCircle } from 'react-icons/bi'
export default function Hero() {
  return (
    <div>
      {/* <Box > */}



      <Box
        sx={{
          background: `url(${hero.src})`, backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "600px",
          paddingX: {lg:"98px",xs:0,sm:0}
        }}>
        <Box sx={{ color: "white", }}>
          <PrimarySearchAppBar />
          <Stack direction={'column'} justifyContent={'flex-start'}sx={{ paddingX: {lg:"30px",xs:0,sm:0} ,
              marginTop: '100px',
              gap:1.5}}>

            <Typography fontSize={'48px'} fontWeight={700}>John Wick 3 :<br></br> Parabellum</Typography>
            <Stack direction={'row'} justifyContent={'space-between'} sx={{width:"250px"}}>
              <Stack direction={'row'} gap={1}>

              <Image src={tag} alt='movie tag' />
              <Typography>86.0 / 100</Typography>
              </Stack>
              <Stack direction={'row'} gap={1}>
                <Image src={orange} alt='orange' />
                <Typography>97%</Typography>
              </Stack>
            </Stack>
<Typography width={'302px'} fontSize={'14px'} fontWeight={500}>John Wick is on the run after killing a member of the international assassins &apos; guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</Typography>
         <Button variant='outlined' sx={{width:"200px",height:"36px",bgcolor:"#BE123C",color:"white",fontSize:"14px",borderRadius:"6px"}} startIcon={<BiPlayCircle/>} >Watch trailer</Button>
          </Stack>

        </Box>
      </Box>
      {/* </Box> */}
    </div>
  )
}
