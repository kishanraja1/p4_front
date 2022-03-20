import axios from 'axios'
import {useState} from 'react'
import CSRFToken from './GetCSRFToken'
//MUI Components
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
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
      <Box className="query-div">
        <Typography variant="h4" align= 'center'>Find albums from Spotify's massive library</Typography>
        <Typography variant='body'>Are we missing an awesome album that you think should be in our database? Search the Spotify library using our API client, and then add it to our collection!</Typography>
        { showAlbum ?
          <Card className="spotify-card">
            <CardMedia component="img" img className="album-image" src={album.image} height="320" width="320" alt={album.name}/>
            <h2>{album.name}</h2>
            <h3>{album.year}</h3>
            <button className="card-add-btn" onClick={() => {handleCreateAlbumFromSpotify(album)}}>+  <span className="btn-text">Add to database</span></button>
            <button className="card-back-btn" onClick={() => {setShowAlbum(false)}}>X</button>
          </Card>
          :
          <form onSubmit={handleGetSpotifyAlbumData}>
            <CSRFToken />
            <label htmlFor='searchQuery'>Search Spotify for an album name: </label>
            <input name="searchQuery" type="search" placeholder="Purple Rain" onChange={handleChange} />
            <input type="submit" value="Search Spotify for album" />
          </form>
        }
      </Box>
    </div>

  )
}

export default AlbumQuery
