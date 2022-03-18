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
const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: '#E8665D',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: '#19196E'
};

const AddAlbum = (props) => {
  /////// STATE \\\\\\\
  let emptyAlbum = {name: '', year: 0, image: '', }  //Saving for when we add artists to albums:  artist: '',
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
    <AddCircleIcon className="addCircleIcon" aria-label="Add New Music" onClick={handleOpen} color="primary" sx={{ fontSize: 50, padding: 1}}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal"
      >
        <Box component="form" sx={styleModal} onSubmit={handleSubmit}>
          <Typography variant="h6">
            Add Album
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <TextField
              name="name" onChange={handleChange}
              variant="outlined" label="Album"
              sx={{ m: 1, color:'#19196E'}}/>
            <TextField
              type="number" name="year" onChange={handleChange}
              variant="outlined" label="Year"
              sx={{ m: 1, color:'#19196E'}}/>
            <TextField
              name="image" onChange={handleChange}
              variant="outlined" label="Image URL"
              sx={{ m: 1, color:'#19196E'}}/>
          </Typography>
          <Button variant="outlined" sx={{margin: 2, border: 2, color:'#19196E'}}>
            <input type="submit"/>
          </Button>
        </Box>
      </Modal>
    </div>
  )
}

export default AddAlbum

/////// SAVING FOR WHEN WE ADD ARTISTS TO ALBUMS \\\\\\\\\
// <TextField
//   name="artist" onChange={handleChange}
//   color="success" variant="outlined"
//   label = "Artist"
//   multiline maxRows={4}
//   sx={{ m: 1 }}/>
