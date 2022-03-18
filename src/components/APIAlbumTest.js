import axios from 'axios'
import {useState} from 'react'

const APIAlbumTest = () => {
  const [album, setAlbum] = useState({name: 'Default album name', year: 2022, image: "default image path"})
  const [showAlbum, setShowAlbum] = false

  const handleGetSpotifyAlbumData = () => {
    axios.get('https://young-savannah-30515.herokuapp.com/api/albums/spotify_album')
         .then((response) => {
           setAlbum(response.data)
           setShowAlbum(true)
         })
  }

  return (
    <div>
      <h1>Spotify API Album Test page</h1>
      { showAlbum ?
          <div className="card">
            <img src={album.image} />
            <h2>{album.name}</h2>
            <h3>{album.year}</h3>
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