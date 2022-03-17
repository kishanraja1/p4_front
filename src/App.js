import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Add from './components/Add'
import AddArtist from './components/AddArtist'
import Edit from './components/Edit'
import EditArtist from './components/EditArtist'
import Footer from './components/Footer'

const App = () => {
  const [albums, setAlbums] = useState([])
  const [artists, setArtists] = useState([])

  ///////////////// Albums Functions ///////////////////

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


///////////////////// Artist Functions ///////////////////
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


  useEffect(() => {
    getArtists();
    getAlbums()
  }, [])

  return (
    <body>
      <h1>Music Collection App</h1>
      <h2>Artists and Albums</h2>
      <Add handleCreate={handleCreate} />
      <div className="album-container">
        {albums.map((album)=> {
          return(
            <div key={album.id} className="card">
              <h3>{album.name}, {album.year}</h3>
              <Edit handleUpdate={handleUpdate} album={album} />
              <button onClick={() => {handleDelete(album)}}>Delete album</button>
            </div>
          )
        })}
      </div>

      <h2>Artists</h2>
      <AddArtist handleCreateArtist={handleCreateArtist} />
      <div className="album-container">
        {artists.map((artist) => {
          return (
            <div key={artist.id} className="card">
              <h4>Name: {artist.name}</h4>
              <h5>Genre: {artist.genre}</h5>
              <EditArtist handleUpdateArtist= {handleUpdateArtist} artist={artist}/>
              <button onClick={() => {handleDeleteArtist(artist)}}>Delete</button>
            </div>
          )
        })}
      </div>
      <Footer />
    </body>
  )
}

export default App;
