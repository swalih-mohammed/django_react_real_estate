import React from 'react';

// import Main from 'layouts/Fixed';
// import Main from 'layouts/Fluid';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';

import Container from 'components/Container';
import PropertyList from "./propertyList"

import Hero from "./hero"
// import TopProperties from "./TopProperties"
// import FeaturedProperties from "./FeaturedProperties"
// import VideoSection from "./VideoSection"
// import Team from "./WithOverlappedCards"
// import NewProjects from "./NewProjects"



const PropertyListPage = () => {
    return (
        <Main colorInvert={true}>
            <Hero />
            <PropertyList />
        </Main>
    );
};

export default PropertyListPage;
