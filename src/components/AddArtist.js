import {useState} from 'react'


const AddArtist = (props) => {
  let emptyArtist = {name: '', age: ''}
  const [artist, setArtist] = useState(emptyArtist)

  const handleChangeArtist = (e) => {
    setArtist({...artist, [e.target.name]: e.target.value})
  }

  const handleSubmitArtist = (e) => {
    e.preventDefault()
    props.handleCreateArtist(artist)
  }

  return(
    <>
    <details>
      <summary>Add New Artist</summary>
      <form onSubmit={handleSubmitArtist}>
        <label htmlFor="name">Artist name: </label>
        <input type="text" name="name"  value={artist.name} onChange={handleChangeArtist}/><br/>
        <label htmlFor="genre">Genre: </label>
        <input type="text" name="genre" value={artist.genre} onChange={handleChangeArtist}/><br/>
        <label htmlFor="language">Language: </label>
        <input type="text" name="language" value={artist.language} onChange={handleChangeArtist}/><br/>
        <input type="submit" />
      </form>
    </details>
    </>

  )

}

export default AddArtist
