// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo_1.png";

const date = new Date().getFullYear();

export default {
    brand: {
        name: "Dubai Properties",
        image: logoCT,
        route: "/",
    },
    socials: [
        {
            icon: <FacebookIcon />,
            link: "https://www.facebook.com/",
        },
        {
            icon: <TwitterIcon />,
            link: "https://twitter.com",
        },
        {
            icon: <YouTubeIcon />,
            link: "https://www.youtube.com",
        },
    ],
    menus: [
        {
            name: "company",
            items: [
                { name: "contact us", href: "#" },
                { name: "knowledge center", href: "#" },
                { name: "custom development", href: "#" },

            ],
        },

        {
            name: "help & support",
            items: [
                { name: "contact us2", href: "#" },
                { name: "knowledge center 2", href: "#" },
                { name: "custom development2", href: "#" },

            ],
        },
        {
            name: "Resources",
            items: [
                { name: "terms & conditions", href: "#" },
                { name: "privacy policy", href: "#" },
                { name: "licenses (EULA)", href: "#" },
            ],
        },


    ],
    copyright: (
        <MKTypography variant="button" fontWeight="regular">
            All rights reserved. Copyright &copy; {date} by{" "}
            <MKTypography
                component="a"
                href="#"
                target="_blank"
                rel="noreferrer"
                variant="button"
                fontWeight="regular"
            >
                Dubai Property
            </MKTypography>
            .
        </MKTypography>
    ),
};