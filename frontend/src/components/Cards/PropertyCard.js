/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShareIcon from '@mui/icons-material/Share';
import Grid from '@mui/material/Grid';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { motion, AnimatePresence } from 'framer-motion'

const handleButtonClick = () => {
    const link = "https://wa.me/7207724191/"
    window.open(link, "_blank")
}


function CenteredBlogCard({ image, title, address, price, description, action }) {
    return (
        <motion.div onPan={{ scale: 1.1 }}>
            <Card>
                <MKBox position="relative" borderRadius="lg" mx={2} mt={-3} >
                    <MKBox
                        component="img"
                        src={image}
                        alt={title}
                        borderRadius="lg"
                        width="100%"
                        position="relative"
                        zIndex={1}
                    />

                    <MKBox
                        borderRadius="lg"
                        shadow="md"
                        width="80%"
                        height="80%"
                        position="absolute"
                        left={0}
                        top={0}
                        sx={{
                            backgroundImage: `url(${image})`,
                            transform: "scale(0.94)",
                            filter: "blur(12px)",
                            backgroundSize: "cover",
                        }}
                    />
                </MKBox>
                <MKBox p={3} mt={-1} textAlign="flex-start">
                    <MKTypography
                        variant="h6"
                        color="dark"
                        mb={1}
                        sx={({ breakpoints, typography: { size } }) => ({
                            [breakpoints.down("md")]: {
                                fontSize: size["3xl"],
                            },
                        })}
                    >
                        {title}
                    </MKTypography>
                    <MKTypography
                        variant="p"
                        color="dark"
                        mb={1}
                        sx={({ breakpoints, typography: { size } }) => ({
                            [breakpoints.down("md")]: {
                                fontSize: size["1xl"],
                            },
                        })}
                    >
                        {address}
                    </MKTypography>
                    <MKBox mt={1} >
                        <MKTypography display="inline" variant="p" textTransform="capitalize" fontWeight="regular" color="primary">
                            {"AED "}
                        </MKTypography>
                        <MKTypography display="inline" variant="p" textTransform="capitalize" fontWeight="regular" color="primary">
                            {price}
                        </MKTypography>
                    </MKBox>
                    <MKBox mt={1} mb={3}>
                        <MKTypography variant="body2" component="p" color="dark">
                            {description}
                        </MKTypography>
                    </MKBox>
                    <Grid container spacing={4}>
                        <Grid item >
                            <MKBox>
                                <WhatsAppIcon onClick={handleButtonClick} fontSize='medium' sx={{ color: "#25d366" }} />
                            </MKBox>
                        </Grid>
                        <Grid item >
                            <MKBox>
                                <ShareIcon fontSize='medium' sx={{ color: "#7d8597" }} />
                            </MKBox>
                        </Grid>
                    </Grid>
                </MKBox>
            </Card>
        </motion.div>
    );
}

// Typechecking props for the CenteredBlogCard
CenteredBlogCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    action: PropTypes.shape({
        type: PropTypes.oneOf(["external", "internal"]).isRequired,
        route: PropTypes.string.isRequired,
        color: PropTypes.oneOf([
            "primary",
            "secondary",
            "info",
            "success",
            "warning",
            "error",
            "dark",
            "light",
        ]),
        label: PropTypes.string.isRequired,
    }).isRequired,
};

export default CenteredBlogCard;
