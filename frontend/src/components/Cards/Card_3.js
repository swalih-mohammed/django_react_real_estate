import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import IconButton from '@mui/material/IconButton';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Stack from '@mui/material/Stack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';





export default function MultiActionAreaCard({ image, title, address, price, description, }) {

    const [currentImage, setCurrentImage] = React.useState(1);


    const handleButtonClick = () => {
        const link = "https://wa.me/7207724191/"
        window.open(link, "_blank")
    }

    const images = [
        "https://lakaters-lms.s3.us-east-2.amazonaws.com/DUBAI_PROPERTIES/property_img_1.jpeg",
        "https://lakaters-lms.s3.us-east-2.amazonaws.com/DUBAI_PROPERTIES/property_img_2.jpeg",
        "https://lakaters-lms.s3.us-east-2.amazonaws.com/DUBAI_PROPERTIES/property_img_3.jpeg"
    ]

    const hanldle_image_change_next = () => {
        if (currentImage != 2) {
            setCurrentImage(currentImage + 1)
        }
    }
    const hanldle_image_change_prev = () => {
        if (currentImage != 0) {
            setCurrentImage(currentImage - 1)
        }
    }

    return (
        <Box>
            <Card sx={{ maxWidth: 345 }}>
                <Box sx={{ position: "relative" }}>
                    <CardMedia
                        sx={{ height: 300 }}
                        image={images[currentImage]}
                        // image="https://lakaters-lms.s3.us-east-2.amazonaws.com/DUBAI_PROPERTIES/property_img_1.jpeg"
                        title="green iguana"
                    />
                    <ArrowForwardIosIcon fontSize='large' color="white" sx={{ top: '50%', right: 10, position: "absolute" }} onClick={hanldle_image_change_next} />
                    <ArrowBackIosNewIcon fontSize='large' color="white" sx={{ top: '50%', left: 10, position: "absolute" }} onClick={hanldle_image_change_prev} />

                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>

                    <Typography color='primary' gutterBottom variant="h6" component="div">
                        AED {price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <WhatsAppIcon onClick={handleButtonClick} sx={{ color: "#25d366" }} />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Box>
    );
}