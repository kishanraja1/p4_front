import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Landing from './components/Landing.js'
import TopNav from './components/TopNav'
import AddAlbum from './components/AddAlbum'
import AddArtist from './components/AddArtist'
import EditAlbum from './components/EditAlbum'
import EditArtist from './components/EditArtist'
import Footer from './components/Footer'

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

const App = () => {
/////// STATE \\\\\\\
  const [albums, setAlbums] = useState([])
  const [artists, setArtists] = useState([])

/////// ALBUM CRUD \\\\\\\
  const getAlbums = () => {
    axios.get('https://young-savannah-30515.herokuapp.com/api/albums')
         .then(
           (response) => setAlbums(response.data),
           // console.log(response.data)
           (err) => console.err(err)
    )
    .catch((error) => console.error(error))
  }

  const handleCreate = (newAlbum) => {
    axios.post('https://young-savannah-30515.herokuapp.com/api/albums', newAlbum)
         .then(
           setAlbums([...albums, newAlbum])
         )
  }

  const handleDelete = (deletedAlbum) => {
    axios.delete('https://young-savannah-30515.herokuapp.com/api/albums/' + deletedAlbum.id)
         .then((response) => {
           setAlbums(
             albums.filter((album) => album.id !== deletedAlbum.id )
           )
         })
  }

  const handleUpdate = (album2Update) => {
    axios.put('https://young-savannah-30515.herokuapp.com/api/albums/' + album2Update.id, album2Update)
         .then( (response) => {
           setAlbums(
             albums.map((album) => {
               return album.id !== album2Update.id ? album : album2Update
             })
           )
         })
  }

/////// ALBUM MAP \\\\\\\
  const albumsMap = albums.map((album)=> {
    return(
      <div key={album.id} className="card">
        <h3>{album.name}</h3>
        <h4>{album.year}</h4>
        <Grid direction="row" container alignItems="center" justify="center">
          <EditAlbum handleUpdate={handleUpdate} album={album} />
          <DeleteIcon aria-label="delete" onClick={() => {handleDelete(album)}} sx={{color: "#ec407a"}}/>
        </Grid>
      </div>
    )
  })
// SAVING FOR MULTI_MODEL <Typography component="h4">{album.artist}</Typography>

///////////////////// ARTIST CRUD ///////////////////
  const getArtists = () => {
    axios
    .get('https://young-savannah-30515.herokuapp.com/api/artists')
       .then(
         (response) => setArtists(response.data),
         (err) => console.err(err)
    )
    .catch((error) => console.error(error))
  }

  const handleCreateArtist = (newArtist) => {
    axios
    .post('https://young-savannah-30515.herokuapp.com/api/artists', newArtist)
        .then(
         setArtists([...artists, newArtist])
       )
  }

  const handleDeleteArtist = (deletedArtist) => {
    axios.delete('https://young-savannah-30515.herokuapp.com/api/artists/' + deletedArtist.id)
         .then((response) => {
           setArtists(
             artists.filter((artist) => artist.id !== deletedArtist.id )
           )
         })
  }

  const handleUpdateArtist = (editArtist) => {
    axios.put('https://young-savannah-30515.herokuapp.com/api/artists/' + editArtist.id, editArtist)
    .then((response) => {
      setArtists(
        artists.map((artist) => {
          return artist.id !== editArtist.id ? artist : response.data
        })
      )
    })
  }

//////// ARTIST MAP \\\\\\\
const artistsMap = artists.map((artist) => {
  return(
    <div key={artist.id} className="card">
      <h4>Name: {artist.name}</h4>
      <h5>Genre: {artist.genre}</h5>
      <Grid direction="row" container alignItems="center" justify="center">
        <EditArtist handleUpdateArtist= {handleUpdateArtist} artist={artist}/>
        <DeleteIcon aria-label="delete" onClick={() => {handleDeleteArtist(artist)}} color="error" sx={{color: "#ec407a"}}/>
      </Grid>
    </div>
  )
})

/////// USE EFFECT \\\\\\\\
  useEffect(() => {
    getArtists();
    getAlbums()
  }, [])

/////// RENDER PRIMARY COMPONENT \\\\\\\
  return (
    <Router>
        <TopNav />
          <a href="https://murmuring-forest-19651.herokuapp.com/albums">Link to Albums</a>
          <a href="https://murmuring-forest-19651.herokuapp.com/artists">Link to Artists</a>
        <Switch>
          <Route path="/home">
            <Landing />
          </Route>
          <Route path="/albums">
            <Typography variant="h2" component="h1">ALBUMS</Typography>
            <div>
              <Grid direction="column" container alignItems="center"justify="center">
                <AddAlbum handleCreate={handleCreate} />
                <div className="album-container">
                  {albumsMap}
                </div>
              </Grid>
            </div>
          </Route>
          <Route path="/artists">
            <Typography variant="h2" component="h1">ARTISTS</Typography>
            <div>
              <Grid direction="column" container alignItems="center"justify="center">
                <AddArtist handleCreateArtist={handleCreateArtist} />
                <div className="album-container">
                  {artistsMap}
                </div>
              </Grid>
            </div>
          </Route>
        </Switch>
      <Footer />
  </Router>
  )
}

export default App;



// <h2>Albums</h2>
//
// <div className="album-container">
//   {albumMap}
// </div>
// <AddAlbum handleCreate={handleCreate} />
//
//
// <h2>Artists</h2>
// <AddArtist handleCreateArtist={handleCreateArtist} />
// <div className="album-container">
//   {artists.map((artist) => {
//     return (
//       <div key={artist.id} className="card">
//         <h4>Name: {artist.name}</h4>
//         <h5>Genre: {artist.genre}</h5>
//         <EditArtist handleUpdateArtist= {handleUpdateArtist} artist={artist}/>
//         <button onClick={() => {handleDeleteArtist(artist)}}>Delete</button>
//       </div>
//     )
//   })}
// </div>
