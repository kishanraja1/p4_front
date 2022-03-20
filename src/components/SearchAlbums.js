import {useState} from 'react'

const SearchAlbums = (props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const fullAlbumList = []
  for (let album of props.albums) {
    fullAlbumList.push(album)
  }

  const handleQueryChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSubmitSearchQuery = (e) => {
    e.preventDefault()
    console.log('search query submitted')
  }

  const handleShowAllAlbums = () => {
    props.getAlbums()
  }

  return (
    <>
      <form onSubmit={handleSubmitSearchQuery}>
        <input type="search" name="searchQuery" placeholder="Search albums by name" onChange={handleQueryChange}/>
        <input type="submit" value="Search Audiophile Database"/>
      </form>
      <button onClick={handleShowAllAlbums}>Show All</button>
    </>
  )
}

export default SearchAlbums