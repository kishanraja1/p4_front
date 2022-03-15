import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  const [albums, setAlbums] = useState([])

  const getAlbums = () => {
    axios.get('https://young-savannah-30515.herokuapp.com/api/albums').then((response) => {
      console.log(response.data)
      setAlbums(response.data)
    })
  }


  useEffect(() => {
    getAlbums()
  }, [])

  return (
    <>
      <h1>Music Collection App</h1>
      {albums.map((album)=> {
        return(
          <div key={album.id} className="card">
            <h3>{album.name}</h3>
            <h5>{album.year}</h5>
          </div>
        )
      })}

    </>
  )
}

export default App;
