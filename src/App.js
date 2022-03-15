import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'
import Add from './components/Add'

const App = () => {
  const [albums, setAlbums] = useState([])

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


  useEffect(() => {
    getAlbums()
  }, [])

  return (
    <>
      <h1>Music Collection App</h1>
      <Add handleCreate={handleCreate} />
      {albums.map((album)=> {
        return(
          <div key={album.id} className="card">
            <h3>{album.name}, {album.year}</h3>
            <button>Edit details</button>
            <button onClick={() => {handleDelete(album)}}>Delete album</button>
          </div>
        )
      })}
    </>
  )
}

export default App;
