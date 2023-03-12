/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import bgImage from "assets/images/hero_2.jpg";



import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';

import Container from 'components/Container';

const Hero = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        minHeight={700}
        height={'auto'}
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
          // background:
          //   'url(https://assets.maccarianagency.com/backgrounds/img27.jpg) no-repeat center',
          background:
            `url(${bgImage}) no-repeat center`,

          // backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          // `${linearGradient(
          //     rgba(gradients.dark.main, 0.6),
          //     rgba(gradients.dark.state, 0.6)
          // )}, url(${bgImage})`,

          backgroundSize: 'cover',
          marginTop: -13,
          paddingTop: 13,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: 1,
            height: 1,
            background: alpha(theme.palette.primary.dark, 0.3),
            zIndex: 1,
          }}
        />
        <Container position={'relative'} zIndex={2}>
          <Box>
            <Box
              padding={{ xs: 3, sm: 6 }}
              width={1}
              component={Card}
              boxShadow={5}
              data-aos="fade-up"
            >
              <form noValidate autoComplete="off">
                <Box marginRight={{ xs: 0, md: 2 }}
                  marginBottom={{ xs: 1, md: 1 }}
                  display="flex" flexDirection={{ xs: 'row', md: 'row' }}
                >
                  <Button
                    sx={{ height: 40, width: 50, marginRight: 1, whiteSpace: 'nowrap' }}
                    variant="contained"
                    color="primary"
                    size="medium"
                    fullWidth
                  >
                    Buy
                  </Button>
                  <Button
                    sx={{ height: 40, width: 50, marginRight: 1, whiteSpace: 'nowrap' }}
                    // size="small"
                    variant="outlined"
                    color="primary"
                    size="medium"
                    fullWidth
                  >
                    Rent
                  </Button>
                  <FormControl >
                    {/* <InputLabel id="demo-simple-select-label">Category</InputLabel> */}
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={category}
                      // label="Category"
                      // onChange={handleChange}
                      defaultValue="All Types"
                      style={{ fontSize: 13, color: "primary" }}
                      sx={{ height: 40, maxWidth: 150, color: "primary" }}
                      // color="primary"
                      variant="outlined"

                    >
                      <MenuItem style={{ fontSize: 12 }} value={"All Types"}>All Types</MenuItem>
                      <MenuItem style={{ fontSize: 12 }} value={"Penthouse"}>Penthouse</MenuItem>
                      <MenuItem style={{ fontSize: 12 }} value={"Shop"}>Shop</MenuItem>
                      <MenuItem style={{ fontSize: 12 }} value={"Townhouse"}>Townhouse</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }}>
                  <Box
                    width={1}
                    marginRight={{ xs: 0, md: 2 }}
                    marginBottom={{ xs: 2, md: 0 }}
                  >
                    <TextField
                      sx={{
                        height: 40,
                      }}
                      variant="outlined"
                      color="primary"
                      size="small"
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Box
                              component={'svg'}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              width={24}
                              height={24}
                              color={'primary.main'}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              />
                            </Box>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                  <Box>
                    <Button
                      sx={{ height: 40, whiteSpace: 'nowrap' }}
                      variant="contained"
                      color="primary"
                      size="medium"
                      fullWidth

                    >
                      Search
                    </Button>
                  </Box>
                </Box>
              </form>
              {/* <Box marginY={4} marginX={{ xs: -3, sm: -6 }}>
              <Divider />
            </Box> */}
              {/* <Box>
              <Typography component="p" variant="body2" align="left">
                By clicking on "Get Started" you agree to our{' '}
                <Box
                  component="a"
                  href=""
                  color={theme.palette.text.primary}
                  fontWeight={'700'}
                >
                  Privacy Policy
                </Box>
                ,{' '}
                <Box
                  component="a"
                  href=""
                  color={theme.palette.text.primary}
                  fontWeight={'700'}
                >
                  Data Policy
                </Box>{' '}
                and{' '}
                <Box
                  component="a"
                  href=""
                  color={theme.palette.text.primary}
                  fontWeight={'700'}
                >
                  Cookie Policy
                </Box>
                .
              </Typography>
            </Box> */}
            </Box>
          </Box>

        </Container >

      </Box >
      <Grid container marginTop={1} marginBottom={1} display="flex" flexDirection={"row"} justifyContent="space-around">
        <Grid item >
          <Button
            sx={{ height: 40, whiteSpace: 'nowrap' }}
            variant="text"
            color="primary"
            size="medium"
          >
            Top Market
          </Button>
        </Grid>
        <Grid item >
          <Button
            sx={{ height: 40, whiteSpace: 'nowrap' }}
            variant="text"
            color="primary"
            size="medium"
          >
            Palm Jumeirah
          </Button>
        </Grid>
        <Grid item >
          <Button
            sx={{ height: 40, whiteSpace: 'nowrap' }}
            variant="text"
            color="primary"
            size="medium"
          >
            Emirates Hills
          </Button>
        </Grid>
        <Grid item >
          <Button
            sx={{ height: 40, whiteSpace: 'nowrap' }}
            variant="text"
            color="primary"
            size="medium"
          >
            Dubai Hills
          </Button>
        </Grid>
        <Grid item >
          <Button
            sx={{ height: 40, whiteSpace: 'nowrap' }}
            variant="text"
            color="primary"
            size="medium"
          >
            Arabian Ranches
          </Button>
        </Grid>
        <Grid item >
          <Button
            sx={{ height: 40, whiteSpace: 'nowrap' }}
            variant="text"
            color="primary"
            size="medium"
          >
            Downtown Dubai
          </Button>
        </Grid>
        <Grid item marginRight={1}>
          <Button
            sx={{ height: 40, whiteSpace: 'nowrap' }}
            variant="text"
            color="primary"
            size="medium"
          >
            Jumeirah Golf Estates
          </Button>
        </Grid>
      </Grid>
      <Divider />

    </>
  );
};

export default Hero;
