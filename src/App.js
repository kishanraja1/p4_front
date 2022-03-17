import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import TopNav from './components/TopNav'
import AddAlbum from './components/AddAlbum'
import EditAlbum from './components/EditAlbum'
import Footer from './components/Footer'

/////// Material UI \\\\\\\
//MUI Components
import {
  IconButton,
  Typography
} from '@mui/material';

//MUI Icons
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const App = () => {
/////// STATE \\\\\\\
  const [albums, setAlbums] = useState([])

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
  const albumMap = albums.map((album)=> {
    return(
      <div key={album.id} className="card">
        <h3>{album.name}</h3>
        <h4>{album.year}</h4>
        <EditAlbum handleUpdate={handleUpdate} album={album} />
          <DeleteIcon aria-label="delete" onClick={() => {handleDelete(album)}} color="error" />
      </div>
    )
  })

// <Typography component="h4">{album.artist}</Typography>

/////// USE EFFECT \\\\\\\
  useEffect(() => {
    getAlbums()
  }, [])

/////// RENDER PRIMARY COMPONENT \\\\\\\
  return (
    <>
      <TopNav />
      <h1>Music Collection App</h1>
      <h2>Artists and Albums</h2>
      <div className="album-container">
        {albumMap}
      </div>
      <AddAlbum handleCreate={handleCreate} />
      <Footer />
    </>
  )
}

export default App;
