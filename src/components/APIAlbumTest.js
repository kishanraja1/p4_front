import axios from 'axios'
import {useState} from 'react'
import CSRFToken from './GetCSRFToken'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const getCookie = (name) => {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      let cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          let cookie = cookies[i].toString().replace(/^([\s]*)|([\s]*)$/g, "");
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}

const csrftoken = getCookie('csrftoken')

const APIAlbumTest = (props) => {
  const [album, setAlbum] = useState({name: 'Default album name', year: 2022, image: "default image path"})
  const [showAlbum, setShowAlbum] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleGetSpotifyAlbumData = (e) => {
    e.preventDefault()
    // https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples
    // helped us figure out how to execute this particular post request
    fetch('http://localhost:8000/api/albums/spotify_album', {
      credentials: 'include',
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken
      },
      body: JSON.stringify({
        search_query: searchQuery
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setAlbum(data)
      setShowAlbum(true)
    })
  
    // axios.get('http://localhost:8000/api/albums/spotify_album')
    //      .then((response) => {
    //        console.log(response.data)
    //        setAlbum(response.data)
    //        setShowAlbum(true)
    //      })
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
            <button onClick={() => {setShowAlbum(false)}}>Go Back</button>
          </div>
          :
          <form onSubmit={handleGetSpotifyAlbumData}>
            <CSRFToken />
            <label htmlFor='searchQuery'>Search Spotify for an album name: </label>
            <input name="searchQuery" type="search" placeholder="Purple Rain" onChange={handleChange} />
            <input type="submit" value="Search Spotify for album" />
          </form>
      }
    </div>

  )
}

export default APIAlbumTest