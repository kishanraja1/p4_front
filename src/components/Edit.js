import {useState} from 'react'

/////// Material UI \\\\\\\
//MUI Components
import {
  IconButton
} from '@mui/material';

//MUI Icons
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const Edit = (props) => {
  const [album, setAlbum] = useState({...props.album})

  const handleChange = (e) => {
    setAlbum({ ...album, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e, album2Update) => {
    e.preventDefault()
    props.handleUpdate(album2Update)
  }

  return (
    <div className="edit-album">

      <details>
        <summary><EditIcon/></summary>
        <form onSubmit={(event) => {handleSubmit(event, album)}}>
          <label htmlFor="name">Album name: </label>
          <input type="text" name="name" value={album.name} onChange={handleChange}/><br/>
          <label htmlFor="year">Released: </label>
          <input type="number" name="year" value={album.year} onChange={handleChange}/><br/>
          <input type="submit" value="Update this album now" />
        </form>
      </details>
    </div>
  )
}

export default Edit
