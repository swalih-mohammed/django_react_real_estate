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
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from "react-router-dom";


import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';

import Container from 'components/Container';

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
]

const Hero = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const handleSearch = (location) => {
        // console.log(data)
        // dispatch(getSearchedProperties(searchText))
        navigate('/properties')
    }

    return (
        <>
            <Box
                minHeight={600}
                height={'auto'}
                position={'relative'}
                sx={{
                    backgroundColor: theme.palette.alternate.main,
                    // background:
                    //   'url(https://assets.maccarianagency.com/backgrounds/img27.jpg) no-repeat center',
                    background:
                        `url(${bgImage}) no-repeat center`,

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


            </Box >
            <Grid container marginTop={1} marginBottom={1} marginLeft={1} display="flex" flexDirection={{ sx: "column", md: "row" }} justifyContent="space-between" >
                <Grid item sx={{ justifyContent: "center", alignItems: "center" }} >
                    <Typography
                        variant={'h6'}
                        align={'left'}
                        sx={{ fontWeight: 700 }}
                    >
                        {"Villa with pool"}
                    </Typography>
                    <Box
                    >
                        <Typography sx={{ fontWeight: 600 }}>
                            {"AED 60000"}
                        </Typography>
                    </Box>
                    <Box display={'flex'} alignItems={'center'} flexDirection="row">
                        <Box display={'flex'} alignItems={'center'} marginY={2}>
                            <Box
                                component={'svg'}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                width={16}
                                height={16}
                                marginRight={1}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </Box>
                            <Typography variant={'subtitle2'} color="text.secondary" marginRight={1}
                            >
                                {"Bur Dubai"}
                            </Typography>
                        </Box>
                        <Box display={'flex'} alignItems={'center'}>
                            <Box
                                component={'svg'}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                width={16}
                                height={16}
                                marginRight={1}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </Box>
                            <Typography variant={'subtitle2'} color="text.secondary">
                                {"500"} Sq Ft
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item sx={{ display: "flex", justifyContent: "flex-end", alignSelf: "center" }} marginRight={{ sx: 1, md: 10 }}>
                    <Box>
                        <Button sx={{ marginRight: 1 }} variant='outlined'>Contact aget</Button>
                        <Button variant='contained'>Book an appointment</Button>
                    </Box>
                </Grid>
            </Grid>
            <Divider />

        </>
    );
};

export default Hero;
