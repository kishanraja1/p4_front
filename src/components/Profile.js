import {useAuth0} from '@auth0/auth0-react'


const Profile = () => {
  const { user, isAuthenticated } = useAuth0()

  return(
    isAuthenticated && (
      <article>
      <h1>Your Profile</h1>
        {user?.picture && <img id="userImg" src={user.picture} alt={user.name}/>}
        <h2>Name: {user?.name}</h2>
        <ul>
          {Object.keys(user).map((objKey, i) => <li key={i}>{objKey}: {user[objKey]}</li>)}
        </ul>
      </article>
    )
  )
}

export default Profile
