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
          color="secondary"
          aria-label="menu"
          sx={{ m: 2 }}
        >
          <MenuIcon />
        </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopNav
