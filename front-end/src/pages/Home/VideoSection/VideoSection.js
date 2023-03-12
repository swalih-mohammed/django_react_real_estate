/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const VideoSection = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              color={'primary'}
              component={'span'}
              variant="h4"
              sx={{ fontWeight: 700 }}
            >
              Market Update in Dubai
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="text.secondary">
              Several neighbourhoods in Dubai have proven to be especially popular for apartment rentals over the years. The city is known for its pristine beaches, and any community located along the coastline and enjoying sea views is always in high demand. Some of the most sought-after apartment communities include Dubai Marina, Palm Jumeirah and Jumeirah Beach Residence.
            </Typography>
          </Box>



        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          height={1}
          width={1}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box height={1} width={1} maxHeight={600}>
            <Box
              component={'iframe'}
              title="video"
              width="100%"
              height="100%"
              minHeight={320}
              src="https://www.youtube.com/embed/uQvkSAtRiRc"
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              boxShadow={4}
              borderRadius={2}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default VideoSection;
