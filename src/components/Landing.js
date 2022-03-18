import '../App.css';
import {useState, useEffect} from 'react'

import TopNav from './TopNav'
import AddAlbum from './AddAlbum'
import AddArtist from './AddArtist'
import EditAlbum from './EditAlbum'
import EditArtist from './EditArtist'
import Footer from './Footer'

/////// Material UI \\\\\\\
//MUI Components
import {
  IconButton,
  Typography,
  Grid
} from '@mui/material';

//MUI Icons
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Landing = (props) => {

/////// RENDER PRIMARY COMPONENT \\\\\\\
  return (
    <>
      <TopNav />
      <Typography variant="h2" component="h1">ALBUMS</Typography>
      <div>
        <Grid direction="column" container alignItems="center"justify="center">

          <div className="album-container">

          </div>
        </Grid>
      </div>
      <Typography variant="h2" component="h1">ARTISTS</Typography>
      <div>
        <Grid direction="column" container alignItems="center"justify="center">

          <div className="album-container">
          </div>
        </Grid>
      </div>
      <Footer />
    </>
  )
}

export default Landing;
