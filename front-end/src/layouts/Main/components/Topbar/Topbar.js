import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { NavItem } from './components';

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    buy: buyPage,
    rent: rentPage,
    about: aboutPage,
    contact: contactPage,
    home: homePage,

  } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="Dubai Properties"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={'img'}
          src={require("assets/images/logo_1.png")}
          // src={
          //   mode === 'light' && !colorInvert
          //     ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
          //     : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
          // }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box >
          <NavItem
            title={'Buy'}
            id={'secondary-pages'}
            items={buyPage}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Rent'}
            id={'secondary-pages'}
            items={rentPage}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Contact'}
            id={'company-pages'}
            items={contactPage}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'About Us'}
            id={'account-pages'}
            items={aboutPage}
            colorInvert={colorInvert}
          />
        </Box>


        {/* <Box marginLeft={4}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            href="https://mui.com/store/items/the-front-landing-page/"
            size="large"
          >
            Buy now
          </Button>
        </Box> */}
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
