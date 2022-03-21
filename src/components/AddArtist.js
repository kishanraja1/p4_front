import {useState} from 'react'
import {useAuth0} from '@auth0/auth0-react'

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


const AddArtist = (props) => {
  const { user, isAuthenticated } = useAuth0()
  /////// STATE \\\\\\\
  let emptyArtist = {name: '', genre: '', image: '',}
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
    <div className="add-new-artist">
    <AddCircleIcon className="addCircleIcon" aria-label="Add New Music" onClick={handleOpen} color="primary" sx={{ fontSize: 50, padding: 1}}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal"
      >
        <Box component="form" sx={styleModal} onSubmit={handleSubmitArtist}>
          <Typography variant="h6">
            Add Artist
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <TextField
              name="name" onChange={handleChangeArtist}
              variant="outlined" label="Artist"
               value={artist.name}
              sx={{ m: 1, color:'#19196E'}}/>
            <TextField
              name="genre" onChange={handleChangeArtist}
              variant="outlined" label="Genre"
               value={artist.genre}
              sx={{ m: 1, color:'#19196E'}}/>
            <TextField
              name="image" onChange={handleChangeArtist}
              variant="outlined" label="Image URL"
               value={artist.image}
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

export default AddArtist
