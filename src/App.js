import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {useAuth0} from '@auth0/auth0-react'

//APP COMPONENTS
import Carousel from './components/Carousel.js'
import TopNav from './components/TopNav'
import AddAlbum from './components/AddAlbum'
import AddArtist from './components/AddArtist'
import EditAlbum from './components/EditAlbum'
import EditArtist from './components/EditArtist'
import Footer from './components/Footer'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile'
import Greeting from './components/Greeting'
import AlbumQuery from './components/AlbumQuery'
import ArtistQuery from './components/ArtistQuery'

/////// Material UI \\\\\\\
//MUI Components
import {
  IconButton,
  Typography,
  Grid,
  Box,
  TextField,
  Button
} from '@mui/material';

//MUI Icons
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const App = () => {
  const { user, isAuthenticated } = useAuth0()

/////// STATE \\\\\\\
  const [albums, setAlbums] = useState([])
  const [artists, setArtists] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [searchNameIsActive, setSearchNameIsActive] = useState(true)
  const [searchGenreIsActive, setSearchGenreIsActive] = useState(false)
  const [searchYearIsActive, setSearchYearIsActive] = useState(false)
  //CAROUSEL STATE
  const [imageIndex, setImageIndex] = useState(0)

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
    if(searchNameIsActive && album.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
       searchYearIsActive && album.year.toString().includes(searchQuery)) {
      return (
        <div key={album.id} className="card">
          <img className="album-image" src={album.image} />
          <h4>{album.name}</h4>
          <h5>{album.year}</h5>
          <Grid direction="row" container alignItems="center" justify="center">
            { user &&
            <>
              <EditAlbum handleUpdate={handleUpdate} album={album} />
              <DeleteIcon aria-label="delete" onClick={() => {handleDelete(album)}} sx={{color: "#ec407a"}}/>
            </>
            }
          </Grid>
        </div>
      )
    } else {
      return null
    }
  })

/////////////// ALBUM/ARTIST SEARCH HANDLERS \\\\\\\\\\\\\\\\\\\
  const handleNameQueryChange = (e) => {
    setSearchGenreIsActive(false)
    setSearchYearIsActive(false)
    setSearchNameIsActive(true)
    setSearchQuery(e.target.value)
  }

  const handleGenreQueryChange = (e) => {
    setSearchNameIsActive(false)
    setSearchYearIsActive(false)
    setSearchGenreIsActive(true)
    setSearchQuery(e.target.value)
  }

  const handleYearQueryChange = (e) => {
    setSearchNameIsActive(false)
    setSearchGenreIsActive(false)
    setSearchYearIsActive(true)
    setSearchQuery(e.target.value)
  }

  const handleRemoveSearchQuery = () => {
    setSearchQuery('')
    const searchEls = document.getElementsByClassName('search-text')
    for(let el of searchEls) {el.value = ""}
    // artistSearchEl.value = ''
    // albumSearchEl.value = ''
  }

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
  if(searchNameIsActive && artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     searchGenreIsActive && artist.genre.toLowerCase().includes(searchQuery.toLowerCase())) {
    return(
      <div key={artist.id} className="card">
        <img className="artist-image" src={artist.image} />
        <h4>{artist.name}</h4>
        <h5>{artist.genre}</h5>
        <Grid direction="row" container alignItems="center" justify="center">
          { user &&
          <>
            <EditArtist handleUpdateArtist= {handleUpdateArtist} artist={artist}/>
            <DeleteIcon aria-label="delete" onClick={() => {handleDeleteArtist(artist)}} color="error" sx={{color: "#ec407a"}}/>
          </>
          }
        </Grid>
      </div>
    )
    } else {
      return
    }
})

/////// USE EFFECT \\\\\\\\
  useEffect(() => {
    getArtists();
    getAlbums()
  }, [])

/////// RENDER PRIMARY COMPONENT \\\\\\\
  return (
    <Router>
    <div>
    <LoginButton />
    <LogoutButton />
    <Greeting />
    </div>
        <TopNav />
        <Switch>
          <Route path="/albums">
            <Typography variant="h2" component="h1">ALBUMS</Typography>
            <div>
              <div className="albumQuery">
                 {user &&
                        <>
                    <AlbumQuery handleCreate={handleCreate}/>
                    <AddAlbum handleCreate={handleCreate} />
                       </>
                   }
              </div>
              <div className='filterContainer' sx={{alignItems:'center'}}>
                <Typography variant="h4">Search our database</Typography>
                <div className='filterDiv'>
                  <div className="search-database1">
                    <TextField label="Search Albums by Title" type="search" name="searchQuery" className="search-text" onChange={handleNameQueryChange}
                       focused sx={{m: 4, mr:8, input:{color: 'white'}, width: 1/1}}
                      />
                      { searchQuery && searchNameIsActive ?
                        <div>
                          <Button onClick={handleRemoveSearchQuery}  color='secondary' variant='contained' sx={{mb: 2}}>Clear Search</Button>
                        </div>
                        : null}
                  </div>
                  <div className="search-database2">
                    <TextField type="search" name="searchQuery" className="search-text" label="Search Albums by Year" onChange={handleYearQueryChange}
                       focused sx={{m: 4, ml:8, input:{color: 'white'}, width: 1/1}}
                      />
                    { searchQuery && searchYearIsActive ?
                      <div>
                        <Button onClick={handleRemoveSearchQuery} color='secondary'  variant='contained' sx={{mb: 2}}>Clear Search</Button>
                      </div>
                       : null}
                  </div>
                </div>
              </div>
              <div className="content-container">
                {albumsMap}
              </div>
            </div>
          </Route>
          <Route path="/artists">
            <Typography variant="h2" component="h1">ARTISTS</Typography>
            <Box>
                {user &&
                <>
                  <ArtistQuery handleCreateArtist={handleCreateArtist} />
                  <AddArtist handleCreateArtist={handleCreateArtist} />
                </>
                }
                <div className='filterContainer'>
                  <Typography variant="h4">Search our database</Typography>
                  <div className='filterDiv'>
                    <div className="search-database1">
                      <TextField type="search" size="50" name="searchQuery" className="search-text" label="Search Artists by Name" onChange={handleNameQueryChange}
                        fullWidth focused sx={{m:3, input:{color: 'white'}, width: 1/1}}/>
                      { searchQuery && searchNameIsActive ?
                        <div>
                        <Button onClick={handleRemoveSearchQuery}  color='secondary' variant='contained' sx={{mb: 2}}>Clear Search</Button>
                        </div>
                        : null}
                    </div>
                    <div className="search-database2">
                      <TextField type="search" size="50" name="searchQuery" className="search-text" label="Search Artists by Genre" onChange={handleGenreQueryChange}
                      fullWidth focused sx={{m:3, input:{color: 'white'}, width: 1/1}}/>
                      { searchQuery && searchGenreIsActive ?
                        <div>
                        <Button onClick={handleRemoveSearchQuery} color='secondary' variant='contained' sx={{mb: 2}}>Clear Search</Button>
                        </div>
                        : null}
                    </div>
                  </div>
                </div>
                <div className="content-container">
                  {artistsMap}
                </div>
            </Box>
          </Route>
          <Route path="/profile">
            <Profile />
           </Route>
          <Route path="/query">
            <AlbumQuery handleCreate={handleCreate}/>
            <ArtistQuery handleCreateArtist={handleCreateArtist} />
          </Route>
          <Route path="/">
            <Carousel />
          </Route>
        </Switch>
      <Footer />
  </Router>
  )
}

export default App;
