import {useState} from 'react'

const EditArtist = (props) => {
  const [artist, setArtist] = useState({...props.artist})

  const handleChange = (e) => {
    setArtist({ ...artist, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e, editArtist) => {
    e.preventDefault()
    props.handleUpdateArtist(editArtist)
  }

  return (
    <>
    <details>
      <summary>Edit Artist</summary>
      <form onSubmit={(event) => {handleSubmit(event, artist)}}>
        <label htmlFor="name">Artist name: </label>
        <input type="text" name="name" value={artist.name} onChange={handleChange}/><br/>
        <label htmlFor="genre">Genre: </label>
        <input type="text" name="genre" value={artist.genre} onChange={handleChange}/><br/>
        <label htmlFor="language">Language: </label>
        <input type="text" name="language" value={artist.language} onChange={handleChange}/><br/>
        <input type="submit" value="Update this artist" />
      </form>
    </details>

    </>
  )

}

export default EditArtist
