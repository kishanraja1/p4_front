import {useState} from 'react'

/////// Material UI \\\\\\\
//MUI Icons
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Add = (props) => {
  let emptyAlbum = {name: '', year: 0}
  const [album, setAlbum] = useState(emptyAlbum)

  const handleChange = (e) => {
    setAlbum({...album, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleCreate(album)
  }

  return (
    <div className="add-new-album">
      <details>
        <summary><AddCircleIcon aria-label="Add New Music" color="success" sx={{ fontSize: 40 }}/></summary>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Album name: </label>
          <input type="text" name="name" placeholder="Thriller" onChange={handleChange}/><br/>
          <label htmlFor="year">Released: </label>
          <input type="number" name="year" placeholder="1982" onChange={handleChange}/><br/>
          <input type="submit" />
        </form>
      </details>
    </div>
  )
}

export default Add
