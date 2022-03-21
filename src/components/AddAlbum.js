import {useState} from 'react'
import {useAuth0} from '@auth0/auth0-react'


/////// Material UI \\\\\\\
//MUI Components
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

//MUI Icons
import AddCircleIcon from '@mui/icons-material/AddCircle';

const AddAlbum = (props) => {
  const { user, isAuthenticated } = useAuth0()
  /////// STATE \\\\\\\
  let emptyAlbum = {name: '', year: 0, image: '', }  //Saving for when we add artists to albums:  artist: '',
  const [album, setAlbum] = useState(emptyAlbum)
  const [open, setOpen] = useState(false);

  /////// DIALOG FUNC \\\\\\\
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
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="Add Albums Here"
        aria-describedby="Add Albums to the database"
        maxWidth="md"
        className="modal"
        PaperProps={{sx: {bgcolor: '#82b1ff'}}}
      >
          <DialogTitle variant="h6">Add Album</DialogTitle>
          <DialogContent>
          <Box component="form" onSubmit={handleSubmit}>
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
          </Box>
          <Button variant="outlined" sx={{margin: 2, border: 2, color:'#19196E'}}>
            <input type="submit"/>
          </Button>
        </DialogContent>
      </Dialog>
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
