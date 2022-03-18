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
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import DescriptionIcon from "@mui/icons-material/Description";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

const TopNav = (prop)  => {
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
            // sx={{
            //   ml: 1,
            //   display: {
            //     // xs: 'block',
            //     // sm: 'none',
            //   }
            // }}
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
            <Box>
              Inner Content of APP Bar
            </Box>
        </Drawer>
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default TopNav
