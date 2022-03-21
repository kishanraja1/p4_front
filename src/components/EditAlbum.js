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

const EditAlbum = (props) => {
  const { user, isAuthenticated } = useAuth0()
  /////// STATE \\\\\\\
  const [album, setAlbum] = useState({...props.album})
  const [open, setOpen] = useState(false);

  /////// DIALOG FUNC \\\\\\\
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /////// EDIT FORM FUNC \\\\\\\
  const handleChange = (e) => {
    setAlbum({ ...album, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e, album2Update) => {
    e.preventDefault()
    props.handleUpdate(album2Update)
    handleClose()
  }

  return (
    <div className="edit-album">
      <EditIcon aria-label="Edit" color="primary" sx={{ fontSize: 30 }} onClick={handleOpen}/>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="Edit Album Here"
        aria-describedby="Edit Album"
        maxWidth="md"
        className="modal"
        PaperProps={{sx: {bgcolor: '#f48fb1'}}}
      >
        <DialogTitle variant="h5">Edit Album</DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={(event) => {handleSubmit(event, album)}}>
            <TextField
              name="name" value={album.name}
              onChange={handleChange}
              variant="outlined" label = "Album"
              sx={{ m: 1 , color:'#19196E'}}/>
            <TextField
              type="number" name="year"
              value={album.year} onChange={handleChange}
              variant="outlined" label = "Year"
              sx={{ m: 1, color:'#19196E'}}/>
            <TextField
              name="image" value={album.image}
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

export default EditAlbum


/////// SAVING FOR WHEN WE ADD ARTISTS TO ALBUMS \\\\\\\\\
// <TextField
//   type="text" name="artist"
//   value={album.artist} onChange={handleChange}
//   color="primary" variant="outlined"
//   label = "Artist"
//   multiline maxRows={6}
//   sx={{ m: 1 }}/>
