import {useState} from 'react'

/////// Material UI \\\\\\\
//MUI Components
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

//MUI Icons
import AddCircleIcon from '@mui/icons-material/AddCircle';

//MODAL Style
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#A8BAD2',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AddAlbum = (props) => {
  /////// STATE \\\\\\\
  let emptyAlbum = {name: '', year: 0, artist: '',}
  const [album, setAlbum] = useState(emptyAlbum)
  const [open, setOpen] = useState(false);

  /////// MODAL FUNC \\\\\\\
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /////// ADD FUNC \\\\\\\
  const handleChange = (e) => {
    setAlbum({...album, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleCreate(album)
    handleClose()
  }

  return (
    <div className="add-new-album">
    <AddCircleIcon aria-label="Add New Music" onClick={handleOpen} color="primary" sx={{ fontSize: 50 }} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" sx={style} onSubmit={handleSubmit}>
          <Typography id="modal-modal-title" variant="h5" component="h2" color="black">
            Add Album
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              type="text" name="name" onChange={handleChange}
              color="success" variant="outlined"
              label="Album"
              multiline maxRows={4}
              sx={{ m: 1 }}/>
            <TextField
              type="number" name="year" onChange={handleChange}
              color="success" variant="outlined"
              label="Year"
              multiline maxRows={4}
              sx={{ m: 1 }}/>
            <TextField
              type="text" name="artist" onChange={handleChange}
              color="success" variant="outlined"
              label = "Artist"
              multiline maxRows={4}
              sx={{ m: 1 }}/>
          </Typography>
          <Button variant="outlined" color="success" sx={{margin: 2, border: 2}}>
            <input type="submit"/>
          </Button>
        </Box>
      </Modal>
    </div>
  )
}

export default AddAlbum

// Form Graveyard
// <label htmlFor="name">Album name: </label>
// <input type="text" name="name" placeholder="Thriller" onChange={handleChange}/>
// <label htmlFor="year">Released: </label>
// <input type="number" name="year" placeholder="1982" onChange={handleChange}/><br/>
