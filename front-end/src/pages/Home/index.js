import React from 'react';

// import Main from 'layouts/Fixed';
// import Main from 'layouts/Fluid';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';

import Container from 'components/Container';

import Hero from "./Hero"
import TopProperties from "./TopProperties"
import FeaturedProperties from "./FeaturedProperties"
import VideoSection from "./VideoSection"
import Team from "./WithOverlappedCards"
import NewProjects from "./NewProjects"


const HomePage = () => {
    return (
        <Main colorInvert={true}>
            <Hero />
            <Container>
                <TopProperties />
            </Container>
            <Box bgcolor={'alternate.main'}>
                <Container>
                    <VideoSection />
                </Container>
            </Box>
            <Container>
                <Team />
            </Container>
            <Container>
                <FeaturedProperties />
            </Container>
            <Container>
                <NewProjects />
            </Container>
        </Main>
    );
};

export default HomePage;
