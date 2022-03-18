import axios from 'axios'
import {useState} from 'react'

const APIAlbumTest = (props) => {
  const [album, setAlbum] = useState({name: 'Default album name', year: 2022, image: "default image path"})
  const [showAlbum, setShowAlbum] = useState(false)

  const handleGetSpotifyAlbumData = (e) => {
    e.preventDefault()
    axios.get('https://young-savannah-30515.herokuapp.com/api/albums/spotify_album')
         .then((response) => {
           console.log(response.data)
           setAlbum(response.data)
           setShowAlbum(true)
         })
  }

  const handleCreateAlbumFromSpotify = (newAlbum) => {
    props.handleCreate(album)
    setShowAlbum(false)
  }

  return (
    <div>
      <h1>Spotify API Album Test page</h1>
      { showAlbum ?
          <div className="spotify-card">
            <img src={album.image} height="320" width="320"/>
            <h2>{album.name}</h2>
            <h3>{album.year}</h3>
            <button className="btn" onClick={() => {handleCreateAlbumFromSpotify(album)}}>Add this album to the site</button>
          </div>
          :
          <form onSubmit={handleGetSpotifyAlbumData}>
            <input type="submit" value="Search Spotify for album" />
            {/* <label htmlFor='searchQuery'>Search Spotify for an album name: </label>
            <input name="searchQuery" type="search" placeholder="Purple Rain" /> */}
          </form>
      }
    </div>

  )
}

export default APIAlbumTest