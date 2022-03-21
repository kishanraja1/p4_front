import {useState} from 'react'
import {useAuth0} from '@auth0/auth0-react'

/////// Material UI \\\\\\\
// MUI Components
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
//MUI Icons
import EditIcon from '@mui/icons-material/Edit';

const EditArtist = (props) => {
  const { user, isAuthenticated } = useAuth0()
  /////// STATE \\\\\\\
  const [artist, setArtist] = useState({...props.artist})
  const [open, setOpen] = useState(false);

  /////// DIALOG FUNC \\\\\\\
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
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="Edit Artists Here"
      aria-describedby="Edit Artist"
      maxWidth="md"
      className="modal"
      PaperProps={{sx: {bgcolor: '#f48fb1'}}}
    >
      <DialogTitle variant="h5">Edit Artist</DialogTitle>
      <DialogContent>
        <Box component="form" onSubmit={(event) => {handleSubmit(event, artist)}}>
          <TextField
            type="text" name="name"
            value={artist.name} onChange={handleChange}
            variant="outlined" label = "Artist"
            sx={{ m: 1 , color:'#19196E'}}/>
          <TextField
            type="text" name="genre"
            value={artist.genre} onChange={handleChange}
            variant="outlined" label = "Genre"
            sx={{ m: 1 , color:'#19196E'}}/>
          <TextField
            name="image" value={artist.image}
            onChange={handleChange}
            variant="outlined" label="Image URL"
            sx={{ m: 1, color:'#19196E'}}/>
          <Button variant="outlined" sx={{margin: 2, border: 2, color:"#19196E"}}>
            <input type="submit"/>
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default EditArtist
