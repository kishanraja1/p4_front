import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import Link from '@mui/material/Link';

const TopNav = (prop)  => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default" elevation={0} className="TopNav">
        <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Audiophile
        </Typography>
        <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopNav

// <AppBar position="static" bgimage="">
//   <Toolbar>
    // <IconButton
    //   size="large"
    //   edge="start"
    //   color="inherit"
    //   aria-label="menu"
    //   sx={{ mr: 2 }}
    // >
    //   <MenuIcon />
    // </IconButton>
    // <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //   Audiophile
    // </Typography>
    // <Button color="inherit">Login</Button>
//   </Toolbar>
// </AppBar>