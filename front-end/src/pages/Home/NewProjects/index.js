import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';

const mock = [
    {
        image: 'https://assets.maccarianagency.com/backgrounds/img28.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        title: 'Lorem ipsum dolor sit amet,',
    },
    {
        image: 'https://assets.maccarianagency.com/backgrounds/img29.jpg',
        description: 'Excepteur sint occaecat cupidatat non proident',
        title: 'Consectetur adipiscing elit',
    },
    {
        image: 'https://assets.maccarianagency.com/backgrounds/img27.jpg',
        description: 'Eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        title: 'Labore et dolore magna aliqua',
    },

];

const Main = () => {
    const theme = useTheme();
    return (
        <Box>
            <Box marginBottom={4} marginTop={4}>
                <Typography
                    sx={{
                        textTransform: 'uppercase',
                        fontWeight: 'medium',
                    }}
                    gutterBottom
                    color={'secondary'}
                    align={'center'}
                >
                    upcoming opportunities
                </Typography>
                <Typography
                    variant="h4"
                    align={'center'}
                    data-aos={'fade-up'}
                    gutterBottom
                    sx={{
                        fontWeight: 700,
                    }}
                >
                    New Projects
                </Typography>

            </Box>
            <Grid container spacing={4}>
                {mock.map((item, i) => (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                        <Box
                            component={'a'}
                            href={''}
                            display={'block'}
                            width={1}
                            height={1}
                            sx={{
                                textDecoration: 'none',
                                transition: 'all .2s ease-in-out',
                                '&:hover': {
                                    transform: `translateY(-${theme.spacing(1 / 2)})`,
                                },
                            }}
                        >
                            <Box
                                component={Card}
                                width={1}
                                height={1}
                                display={'flex'}
                                flexDirection={'column'}
                            >
                                <CardMedia
                                    image={item.image}
                                    title={item.title}
                                    sx={{
                                        height: { xs: 340, md: 400 },
                                        filter:
                                            theme.palette.mode === 'dark'
                                                ? 'brightness(0.7)'
                                                : 'none',
                                    }}
                                />
                                <Box component={CardContent}>
                                    <Typography variant={'h6'} fontWeight={700} gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography variant={'body2'} color="text.secondary">
                                        {item.description}
                                    </Typography>
                                </Box>
                                <Box flexGrow={1} />
                                <Box component={CardActions} justifyContent={'flex-start'}>
                                    <Button
                                        size="large"
                                        endIcon={
                                            <svg
                                                width={16}
                                                height={16}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                />
                                            </svg>
                                        }
                                    >
                                        Learn more
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Main;
