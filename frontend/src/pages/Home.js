

import * as React from 'react';
import axios from 'axios';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import TextField from '@mui/material/TextField';
import CenteredBlogCard from "components/Cards/BlogCards/CenteredBlogCard";
import MKInput from "components/MKInput";
import PropertyCard from "components/Cards/PropertyCard";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CircularProgress from '@mui/material/CircularProgress';

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { getProperties, getSearchedProperties, reset } from 'features/property/PropertySlice'

// import { decrement, increment } from './counterSlice'


// import MKButton from "components/MKButton";


import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

import bgImage from "assets/images/background_1.jpg";

const localhost = "http://127.0.0.1:8000"

const randImage = "https://source.unsplash.com/random"


function Home() {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const { properties, isLoading, isError, message } = useSelector(
        (state) => state.property
    )

    const [loading, setLoading] = React.useState(false);
    const [isForSale, setIsForSale] = React.useState(true);
    const [isForRent, setIsForRent] = React.useState(false);
    const [category, setCategory] = React.useState("All Types");
    const [searchText, setSearchText] = React.useState('');

    // const [properties, setProperties] = React.useState([]);

    const hanlde_click_rent = () => {
        setIsForRent(true)
        setIsForSale(false)
    }
    const hanlde_click_sale = () => {
        setIsForSale(true)
        setIsForRent(false)
    }
    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    const handleChange_search = (event) => {
        setSearchText(event.target.value);
    };

    const handle_search = () => {
        const data = {
            search_text: searchText,
            isForRent: isForRent ? true : false,
            category: category
        }
        // console.log(data)
        dispatch(getSearchedProperties(searchText))
        navigate('/list')
        // console.log(navigation)
    }

    React.useEffect(() => {
        // getProperty()

        if (isError) {
            console.log(message)
        }

        dispatch(getProperties())
        return () => {
            dispatch(reset())
        }

    }, []);


    const Property_for_sale = properties?.filter(property => property.for_type === "FOR SALE")
    const Property_for_rent = properties?.filter(property => property.for_type === "FOR RENT")

    const address = (emirate, area, place) => {
        return `${place}, ${area}, ${emirate}`
    }

    // if (isLoading) {
    //     return (
    //         <Box sx={{ display: 'flex', justifyContent: "center", alignitems: "center" }}>
    //             <CircularProgress />
    //         </Box>
    //     )
    // }

    return (
        <>
            <MKBox
                minHeight="75vh"
                width="100%"
                sx={{
                    backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
                        `${linearGradient(
                            rgba(gradients.dark.main, 0.6),
                            rgba(gradients.dark.state, 0.6)
                        )}, url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "grid",
                    placeItems: "center",
                }}
            >
                <Container>
                    <Grid
                        container
                        item
                        xs={12}
                        lg={8}
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        sx={{ mx: "auto", textAlign: "center" }}
                    >

                    </Grid>
                </Container>
            </MKBox>

            <Card
                sx={{
                    p: 2,
                    mx: { xs: 2, lg: 3 },
                    mt: -8,
                    mb: 4,
                    boxShadow: ({ boxShadows: { xxl } }) => xxl,
                }}
            >
                <Grid container
                    spacing={0}
                    direction="column"
                    alignItems="flex-start"
                    justifyContent="center"
                // style={{ minHeight: '25vh' }}
                >

                </Grid>
                <MKBox component="section" pt={2} my={2} sx={{}} >
                    <Container>
                        <div style={{ disply: "flex", justifyContent: "center", alignItems: "center", width: 170 }}>
                            <Grid container direction="row" alignItems="flex-start" sx={{ mb: 2 }}>
                                <Grid item xs={6}>
                                    <MKButton onClick={hanlde_click_sale} variant={isForSale ? "contained" : "outlined"} color="primary">Sale</MKButton>
                                </Grid>
                                <Grid item xs={6}>
                                    <MKButton onClick={hanlde_click_rent} variant={isForRent ? "contained" : "outlined"} color="primary">Rent</MKButton>
                                </Grid>
                            </Grid>
                        </div>
                        <Grid container direction="row"
                            spacing={0}
                            // alignItems="center"
                            // justify="center"
                            spacing={2} >
                            <Grid item xs={12} md={6} >
                                <MKInput onChange={handleChange_search} value={searchText} type="text" label="Search for location..." fullWidth />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <div style={{ minWidth: 90, minHeight: 40 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={category}
                                            label="Category"
                                            onChange={handleChange}
                                            defaultValue="All Types"
                                            sx={{ height: 45 }}
                                        >
                                            <MenuItem autoWidth value={"All Types"}>All Types</MenuItem>
                                            <MenuItem autoWidth value={"Penthouse"}>Penthouse</MenuItem>
                                            <MenuItem value={"Shop"}>Shop</MenuItem>
                                            <MenuItem value={"Townhouse"}>Townhouse</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <MKButton onClick={handle_search} variant="contained" color="primary" sx={{ height: "100%" }}>
                                    Search
                                </MKButton>
                            </Grid>
                        </Grid>
                    </Container>
                </MKBox>

                {isLoading ?
                    <Box sx={{ display: 'flex', justifyContent: "center", alignitems: "center" }}>
                        <CircularProgress />
                    </Box> : <>
                        <Grid container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            style={{ minHeight: '20vh' }}
                        >
                            <Grid item xs={12}>
                                <Typography variant="h4" gutterBottom>
                                    PROPERTIES FOR SALE
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={4}>
                            {Property_for_sale?.map((sp) => (
                                <Grid item key={sp.id} xs={12} sm={6} md={4}>
                                    <PropertyCard
                                        title={sp.title}
                                        description={sp.description}
                                        price={sp.price}
                                        address={address(sp.emirate, sp.area, sp.place)}
                                        image={"https://source.unsplash.com/random"}
                                        action={{
                                            type: "external",
                                            route: "#",
                                            color: "info",
                                            label: "Contact us",
                                        }}
                                    />
                                </Grid>
                            ))}
                        </Grid>

                        <Grid container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            style={{ minHeight: '20vh' }}
                        >
                            <Grid item xs={12}>
                                <MKButton onClick={handle_search} variant="contained" color="primary">View More..</MKButton>
                            </Grid>
                        </Grid>
                        <Grid container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            style={{ minHeight: '25vh' }}
                        >
                            <Grid item xs={12}>
                                <Typography variant="h4" gutterBottom>
                                    PROPERTIES FOR RENT
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={4}>
                            {Property_for_rent?.map((rp) => (
                                <Grid item key={rp.id} xs={12} sm={6} md={4}>
                                    <PropertyCard
                                        title={rp.title}
                                        description={rp.description}
                                        price={rp.price}
                                        address={address(rp.emirate, rp.area, rp.place)}
                                        image={"https://source.unsplash.com/random"}
                                        action={{
                                            type: "external",
                                            route: "#",
                                            color: "info",
                                            label: "Contact us",
                                        }}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                        <Grid container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            style={{ minHeight: '25vh' }}
                        >
                            <Grid item xs={12}>
                                <MKButton onClick={handle_search} variant="contained" color="primary">View More..</MKButton>
                            </Grid>
                        </Grid>
                    </>}
            </Card>
        </>
    );
}

export default Home;
