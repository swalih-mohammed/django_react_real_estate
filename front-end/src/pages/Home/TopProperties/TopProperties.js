import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const mock = [
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img28.jpg',
    title: 'Cozy apartament',
    time: '2:00 PM - 5:00 PM',
    price: 'AED 320000',
    size: '2.400',
    location: 'Via E. Gola 4, 20147 Milan, Italy',
    type: "villa"
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img28.jpg',
    title: 'Villa with the pool',
    time: '11:30 AM - 1:00 AM',
    price: 'AED 450000',
    size: '2.800',
    location: 'Via Venini 33, 20150 Milan Italy',
    type: "villa"
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img28.jpg',
    title: 'Open space with garden',
    time: '6:15 PM - 8:00 PM',
    price: 'AED 280000',
    size: '1.400',
    location: 'Via Lagrange 5, 20175 Milan, Italy',
    type: "villa"
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img30.jpg',
    title: 'Fully renovated',
    time: '6:15 PM - 8:00 PM',
    price: 'AED 300000',
    size: '2.100',
    location: 'Via Lagrange 5, 20175 Milan, Italy',
    type: "apartment"
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img30.jpg',
    title: 'Loft design',
    time: '6:15 PM - 8:00 PM',
    price: 'AED 280000',
    size: '1.800',
    location: 'Via Lagrange 5, 20175 Milan, Italy',
    type: "apartment"
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img30.jpg',
    title: 'Vacation house',
    time: '6:15 PM - 8:00 PM',
    price: 'AED 340000',
    size: '2.600',
    location: 'Via Lagrange 5, 20175 Milan, Italy',
    type: "apartment"
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img32.jpg',
    title: 'Vacation penthouse',
    time: '6:15 PM - 8:00 PM',
    price: 'AED 340000',
    size: '2.600',
    location: 'Via Lagrange 5, 20175 Milan, Italy',
    type: "penthouse"
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img32.jpg',
    title: 'Vacation penthouse',
    time: '6:15 PM - 8:00 PM',
    price: 'AED 340000',
    size: '2.600',
    location: 'Via Lagrange 5, 20175 Milan, Italy',
    type: "penthouse"
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img32.jpg',
    title: 'Vacation penthouse',
    time: '6:15 PM - 8:00 PM',
    price: 'AED 340000',
    size: '2.600',
    location: 'Via Lagrange 5, 20175 Milan, Italy',
    type: "penthouse"
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img29.jpg',
    title: 'Vacation house - new',
    time: '6:15 PM - 8:00 PM',
    price: 'AED 340000',
    size: '2.600',
    location: 'Via Lagrange 5, 20175 Milan, Italy',
    type: "newproject"
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img29.jpg',
    title: 'Vacation house - new',
    time: '6:15 PM - 8:00 PM',
    price: 'AED 340000',
    size: '2.600',
    location: 'Via Lagrange 5, 20175 Milan, Italy',
    type: "newproject"
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img29.jpg',
    title: 'Vacation house - new',
    time: '6:15 PM - 8:00 PM',
    price: 'AED 340000',
    size: '2.600',
    location: 'Via Lagrange 5, 20175 Milan, Italy',
    type: "newproject"
  },
];

const TopProperties = () => {
  const theme = useTheme();
  const [selectedType, setSelectedType] = React.useState("villa")
  const [filteredProperties, setFilteredProperties] = React.useState([])

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const selectedItems = () => {
    const items = mock.filter(item => item.type === selectedType)
    setFilteredProperties(items)
  }

  React.useEffect(() => {
    selectedItems()
  }, [selectedType])

  return (
    <Box marginBottom={4}>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Top Properties
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
          Homes for sale in Dubai
        </Typography>

        <Grid container display="flex" flexDirection={"row"} justifyContent="center" spacing={1}>
          <Grid item >
            <Button
              sx={{ height: 40, whiteSpace: 'nowrap' }}
              variant="outlined"
              color="primary"
              size="medium"
              onClick={() => setSelectedType("villa")}
            >
              Villa
            </Button>
          </Grid>
          <Grid item >
            <Button
              sx={{ height: 40, whiteSpace: 'nowrap' }}
              variant="outlined"
              color="primary"
              size="medium"
              onClick={() => setSelectedType("apartment")}
            >
              Apartment
            </Button>
          </Grid>
          <Grid item >
            <Button
              sx={{ height: 40, whiteSpace: 'nowrap' }}
              variant="outlined"
              color="primary"
              size="medium"
              onClick={() => setSelectedType("penthouse")}
            >
              Penthouse
            </Button>
          </Grid>
          <Grid item>
            <Button
              sx={{ height: 40, whiteSpace: 'nowrap' }}
              variant="outlined"
              color="primary"
              size="medium"
              onClick={() => setSelectedType("newproject")}
            >
              New Projects
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={4}>
        {filteredProperties.map((item, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={i}
            data-aos={'fade-up'}
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box display={'block'} width={1} height={1}>
              <Box
                component={Card}
                width={1}
                height={1}
                display={'flex'}
                flexDirection={'column'}
              >
                <CardMedia
                  title={item.title}
                  image={item.media}
                  sx={{
                    position: 'relative',
                    height: { xs: 240, sm: 340, md: 280 },
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    position={'absolute'}
                    bottom={0}
                    padding={2}
                    width={1}
                  >
                    <Box
                      padding={1}
                      bgcolor={'background.paper'}
                      boxShadow={1}
                      borderRadius={2}
                    >
                      <Typography sx={{ fontWeight: 600 }}>
                        {item.price}
                      </Typography>
                    </Box>
                    <Box
                      padding={1}
                      bgcolor={'background.paper'}
                      boxShadow={1}
                      borderRadius={2}
                    >
                      <Box
                        component={'svg'}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={16}
                        height={16}
                        color={'primary.main'}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </Box>
                    </Box>
                  </Box>
                </CardMedia>
                <CardContent>
                  <Typography
                    variant={'h6'}
                    align={'left'}
                    sx={{ fontWeight: 700 }}
                  >
                    {item.title}
                  </Typography>
                  <Box display={'flex'} alignItems={'center'} marginY={2}>
                    <Box
                      component={'svg'}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={16}
                      height={16}
                      marginRight={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </Box>
                    <Typography variant={'subtitle2'} color="text.secondary">
                      {item.location}
                    </Typography>
                  </Box>
                  <Box display={'flex'} alignItems={'center'}>
                    <Box
                      component={'svg'}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      width={16}
                      height={16}
                      marginRight={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </Box>
                    <Typography variant={'subtitle2'} color="text.secondary">
                      {item.size} Sq Ft
                    </Typography>
                  </Box>
                  <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <Button
                      endIcon={
                        <Box
                          component={'svg'}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          width={24}
                          height={24}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </Box>
                      }
                    >
                      Learn more
                    </Button>
                  </CardActions>
                </CardContent>
              </Box>
            </Box>
          </Grid>
        ))}

      </Grid>
    </Box>
  );
};

export default TopProperties;
