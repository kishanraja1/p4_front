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
  bgcolor: '#FF74C1',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: '#19196E'
};

const styleButton = {
  position: "absolute",
  margin: 0,
    top: '850',
    right: 'auto',
    bottom: 'auto',
    left: '40',
  }

const AddArtist = (props) => {
  /////// STATE \\\\\\\
  let emptyArtist = {name: '', age: '', genre: '',}
  const [artist, setArtist] = useState(emptyArtist)
  const [open, setOpen] = useState(false);

  /////// MODAL FUNC \\\\\\\
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

/////// ADD FUNC \\\\\\\
  const handleChangeArtist = (e) => {
    setArtist({...artist, [e.target.name]: e.target.value})
  }

  const handleSubmitArtist = (e) => {
    e.preventDefault()
    props.handleCreateArtist(artist)
    handleClose()
  }

  return(
    <>
    <AddCircleIcon aria-label="Add New Music" onClick={handleOpen} color="primary" sx={{ fontSize: 50}} style={styleButton}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" sx={styleModal} onSubmit={handleSubmitArtist}>
          <Typography variant="h6" color="black">
            Add Artist
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <TextField
              name="name" onChange={handleChangeArtist}
              variant="outlined" label="Artist"
              sx={{ m: 1, color:'#19196E'}}/>
            <TextField
              name="genre" onChange={handleChangeArtist}
              variant="outlined" label="Genre"
              sx={{ m: 1, color:'#19196E'}}/>
          </Typography>
          <Button variant="outlined" sx={{margin: 2, border: 2, color:'#19196E'}}>
            <input type="submit"/>
          </Button>
        </Box>
      </Modal>
    <details>
      <summary>Add New Artist</summary>
      <form onSubmit={handleSubmitArtist}>
        <label htmlFor="name">Artist name: </label>
        <input type="text" name="name"  value={artist.name} onChange={handleChangeArtist}/><br/>
        <label htmlFor="genre">Genre: </label>
        <input type="text" name="genre" value={artist.genre} onChange={handleChangeArtist}/><br/>
        <input type="submit" />
      </form>
    </details>
    </>

  )

}

export default AddArtist
