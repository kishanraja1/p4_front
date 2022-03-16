import {useState} from 'react'

/////// Material UI \\\\\\\
//MUI Components
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

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
        <summary><AddCircleIcon aria-label="Add New Music" color="success" sx={{ fontSize: 50 }}/></summary>
        <Box component="form" onSubmit={handleSubmit}>
          <label htmlFor="name">Album name: </label>
          <input type="text" name="name" placeholder="Thriller" onChange={handleChange}/><br/>
          <label htmlFor="year">Released: </label>
          <input type="number" name="year" placeholder="1982" onChange={handleChange}/><br/>
          <Button variant="outlined" color="secondary" sx={{margin: 2}}><input type="submit"/></Button>
        </Box>
      </details>
    </div>
  )
}

export default Add
