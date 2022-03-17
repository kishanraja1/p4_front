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

//MUI Style
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#A8BAD2',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Edit = (props) => {
  /////// STATE \\\\\\\
  const [album, setAlbum] = useState({...props.album})
  const [open, setOpen] = useState(false);


  /////// MODAL FUNC \\\\\\\
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /////// EDIT FORM FUNC \\\\\\\
  const handleChange = (e) => {
    setAlbum({ ...album, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e, album2Update) => {
    e.preventDefault()
    props.handleUpdate(album2Update)
  }

  return (
    <div className="edit-album">
      <EditIcon aria-label="Edit" color="success" sx={{ fontSize: 30 }} onClick={handleOpen}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={(event) => {handleSubmit(event, album)}}>
            <Typography id="modal-modal-title" variant="h6" component="h2" color="black">
              Edit Album
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <TextField  type="text" name="name" value={album.name} onChange={handleChange} color="primary" variant="outlined" sx={{margin: 1 }}/>
              <TextField type="number" name="year" value={album.year} onChange={handleChange} color="primary" variant="outlined" sx={{margin: 1 }} />
            </Typography>
            <Button variant="outlined" color="primary" sx={{margin: 2, border: 2}}><input type="submit" onClick={handleClose}/></Button>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit
