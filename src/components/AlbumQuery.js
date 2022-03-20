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

const AlbumQuery = (props) => {
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
    fetch('https://young-savannah-30515.herokuapp.com/api/albums/spotify_album', {
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
      <div className="query-div">
        <h1>Find albums from Spotify's massive library</h1>
        <h2>Are we missing an awesome album that you think should be in our database??</h2>
        <h4>Search the Spotify library using our API client, and then add it to our collection!</h4>
        { showAlbum ?
          <div className="spotify-card">
            <img className="album-image" src={album.image} height="320" width="320"/>
            <h2>{album.name}</h2>
            <h3>{album.year}</h3>
            <button className="card-add-btn" onClick={() => {handleCreateAlbumFromSpotify(album)}}>+  <span className="btn-text">Add to database</span></button>
            <button className="card-back-btn" onClick={() => {setShowAlbum(false)}}>X</button>
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
    </div>

  )
}

export default AlbumQuery
