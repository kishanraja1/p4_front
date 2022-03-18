import React from 'react';
import {useState} from 'react';

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AlbumIcon from '@mui/icons-material/Album';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';


const TopNav = (props)  => {
  const [open, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }
  setState(open);
};

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default" elevation={0} className="TopNav" >
        <Container>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            onClick={toggleDrawer(true)}
            sx={{
              ml: 0,
              display: {
                xs: 'block',
                // sm: 'none',
              }
            }}
          >
            <MenuIcon />
          </IconButton>
        <Drawer
          anchor="left"
          variant="temporary"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <Box sx={{
            p: 2,
            height: 1,
            backgroundColor: "#82C5E4",
          }}>
            <IconButton sx={{mb: 2}}>
              <CloseIcon onClick={toggleDrawer(false)} />
            </IconButton>
            <Divider sx={{mb: 2}} />
            <Box sx={{mb: 2}}>
              <ListItemButton onClick={()=>{window.location.href="https://murmuring-forest-19651.herokuapp.com/albums"}}>
                <ListItemIcon>
                  <AlbumIcon sx={{color: "primary.main"}} />
                </ListItemIcon>
                <ListItemText primary="Albums" />
              </ListItemButton>

              <ListItemButton onClick={()=>{window.location.href="https://murmuring-forest-19651.herokuapp.com/artists"}}>
                <ListItemIcon>
                  <PersonIcon sx={{color: "primary.main"}}/>
                </ListItemIcon >
                <ListItemText primary="Artists" />
              </ListItemButton>

              <ListItemButton onClick={()=>{window.location.href="https://murmuring-forest-19651.herokuapp.com/home"}}>
                <ListItemIcon>
                  <HomeIcon sx={{color: "primary.main"}} />
                </ListItemIcon>
                <ListItemText primary="Home Page" />
              </ListItemButton>
            </Box>
            <Box sx={{
              display: "flex",
              justifyContent:"center",
              position: "absolute",
              bottom: "30%",
              left: "50%",
              transform: "translate(-50%, 0)"}}
            >
              <Button variant="contained" sx={{m:1, width: .5}}>Register</Button>
              <Button variant="outlined" sx={{m:1, width: .5}}>Login</Button>
            </Box>
          </Box>
        </Drawer>
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default TopNav
