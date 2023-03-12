import React from 'react';

// import Main from 'layouts/Fixed';
// import Main from 'layouts/Fluid';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Property from "./property"

import Container from 'components/Container';

// import Hero from "./Hero"
// import TopProperties from "./TopProperties"
// import FeaturedProperties from "./FeaturedProperties"
// import VideoSection from "./VideoSection"
// import Team from "./WithOverlappedCards"
// import NewProjects from "./NewProjects"

const properties = [
    {
        image: 'https://assets.maccarianagency.com/backgrounds/img29.jpg',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        title:
            'Villa with pool',
        author: {
            name: 'Chary Smith',
            avatar: 'https://assets.maccarianagency.com/avatars/img6.jpg',
        },
        date: '22 Nov',
    },
    {
        image: 'https://assets.maccarianagency.com/backgrounds/img29.jpg',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        title:
            'Villa with pool',
        author: {
            name: 'Chary Smith',
            avatar: 'https://assets.maccarianagency.com/avatars/img6.jpg',
        },
        date: '22 Nov',
    },
    {
        image: 'https://assets.maccarianagency.com/backgrounds/img26.jpg',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        title:
            'Villa with pool',
        author: {
            name: 'Chary Smith',
            avatar: 'https://assets.maccarianagency.com/avatars/img6.jpg',
        },
        date: '22 Nov',
    },

    {
        image: 'https://assets.maccarianagency.com/backgrounds/img28.jpg',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        title:
            'Villa with pool',
        author: {
            name: 'Chary Smith',
            avatar: 'https://assets.maccarianagency.com/avatars/img6.jpg',
        },
        date: '22 Nov',
    },
    {
        image: 'https://assets.maccarianagency.com/backgrounds/img28.jpg',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        title:
            'Villa with pool',
        author: {
            name: 'Chary Smith',
            avatar: 'https://assets.maccarianagency.com/avatars/img6.jpg',
        },
        date: '22 Nov',
    },
]

const PropertyListPage = () => {
    return (
        <>
            {properties.map(item => {
                return <Property item={item} />
            })}
        </>
    );
};

export default PropertyListPage;
