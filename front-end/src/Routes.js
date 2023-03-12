import React from 'react';

import HomePage from "pages/Home"

const routes = [
    {
        path: '/',
        renderer: (params = {}) => <HomePage {...params} />,
    },
    {
        path: '/home',
        renderer: (params = {}) => <HomePage {...params} />,
    },

];

export default routes;
