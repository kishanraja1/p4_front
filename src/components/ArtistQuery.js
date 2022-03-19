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

const ArtistQuery = (props) => {
  const [artist, setArtist] = useState({name: 'Default artist name', year: '', image: "default image path"})
  const [showArtist, setShowArtist] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleGetSpotifyArtistData = (e) => {
    e.preventDefault()
    // https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples
    // helped us figure out how to execute this particular post request
    fetch('http://localhost:8000/api/artists/spotify_artist', {
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
      setArtist(data)
      setShowArtist(true)
    })
  
    // axios.get('http://localhost:8000/api/artists/spotify_artist')
    //      .then((response) => {
    //        console.log(response.data)
    //        setArtist(response.data)
    //        setShowArtist(true)
    //      })
  }

  const handleCreateArtistFromSpotify = (newArtist) => {
    props.handleCreateArtist(artist)
    setShowArtist(false)
  }

  return (
    <div>
      <div className="query-div">
        <h1>Find musical artists from Spotify's massive library</h1>
        <h2>Are we missing an awesome musical artist that you think should be in our database??</h2>
        <h4>Search the Spotify library using our API client, and then add them to our collection!</h4>
        { showArtist ?
          <div className="spotify-card">
            <img className="artist-image" src={artist.image} height="320" width="320"/>
            <h2>{artist.name}</h2>
            <h3>{artist.genre}</h3>
            <button className="btn" onClick={() => {handleCreateArtistFromSpotify(artist)}}>Add this artist to the site</button>
            <button onClick={() => {setShowArtist(false)}}>Back</button>
          </div>
          :
          <form onSubmit={handleGetSpotifyArtistData}>
            <CSRFToken />
            <label htmlFor='searchQuery'>Search Spotify: </label>
            <input name="searchQuery" type="search" placeholder="Frank Sinatra" onChange={handleChange} />
            <input type="submit" value="Search Spotify for artist" />
          </form>
        }
      </div>
    </div>

  )
}

export default ArtistQuery
