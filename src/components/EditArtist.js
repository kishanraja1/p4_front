import {useState} from 'react'

/////// Material UI \\\\\\\
// MUI Components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';


//MUI Icons
import EditIcon from '@mui/icons-material/Edit';

//MODAL Style
const style = {
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


const EditArtist = (props) => {
  /////// STATE \\\\\\\
  const [artist, setArtist] = useState({...props.artist})
  const [open, setOpen] = useState(false);

  /////// MODAL FUNC \\\\\\\
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /////// EDIT FORM FUNC \\\\\\\
  const handleChange = (e) => {
    setArtist({ ...artist, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e, editArtist) => {
    e.preventDefault()
    props.handleUpdateArtist(editArtist)
    handleClose()
  }

  return (
    <div className="edit-album">
    <EditIcon aria-label="Edit" color="primary" sx={{ fontSize: 30 }} onClick={handleOpen}/>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} component="form" onSubmit={(event) => {handleSubmit(event, artist)}}>
          <Typography id="modal-modal-title" variant="h5" >
            Edit Artist
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              type="text" name="name"
              value={artist.name} onChange={handleChange}
              variant="outlined" label = "Album"
              sx={{ m: 1 , color:'#19196E'}}/>
            <TextField
              type="text" name="genre"
              value={artist.genre} onChange={handleChange}
              variant="outlined" label = "Album"
              sx={{ m: 1 , color:'#19196E'}}/>
            <TextField
              name="image" value={artist.image}
              onChange={handleChange}
              variant="outlined" label="Image URL"
              sx={{ m: 1, color:'#19196E'}}/>
          </Typography>
          <Button variant="outlined" sx={{margin: 2, border: 2, color:"#19196E"}}>
            <input type="submit"/>
          </Button>
      </Box>
    </Modal>
    </div>
  )
}

export default EditArtist
