
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import InfoIcon from '@mui/icons-material/Info';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Icon from "@mui/material/Icon";

// Pages

// import AboutUs from "pages/About/landing-pages/about-us";
// import ContactUs from "pages/Support/landing-pages/contact-us";
import Home from "pages/Home";

const routes = [


    {
        name: "Buy",
        icon: <Icon>apartment</Icon>,
        collapse: [
            {
                name: "All Properties for sale",
                description: "Explore all properites for sale",
                href: "#",
            },
            {
                name: "Residential for sale",
                description: "Explore all residential for sale",
                href: "#",
            },
            {
                name: "Office Space for sale",
                description: "Explore Office space",
                href: "#",
            },

        ],
    },
    {
        name: "Rent",
        icon: <Icon>bedroom_parent</Icon>,
        collapse: [
            {
                name: "All Properties for rent",
                description: "Explore all properites for rent",
                href: "#",
            },
            {
                name: "Residential for rent",
                description: "Explore all residential for rent",
                href: "#",
            },
            {
                name: "Office Space for rent",
                description: "Explore Office rent",
                href: "#",
            },

        ],
    },
    {
        name: "Home",
        icon: <Icon>home</Icon>,
        // columns: 1,
        collapse: [
            {
                name: "Home",
                description: "Go back to home page",
                href: "#",
            },
            {
                name: "About us",
                description: "Know us in detail",
                href: "#",
            },
            {
                name: "Contact us",
                description: "React to us",
                href: "#",
            },

        ],
    },

];



export default routes;
