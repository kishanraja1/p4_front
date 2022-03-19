import {useAuth0} from '@auth0/auth0-react'


const Profile = () => {
  const { user, isAuthenticated } = useAuth0()

  return(
    isAuthenticated && (
      <article>
        {user?.picture && <img id="userImg" src={user.picture} alt={user.name}/>}
        <h2>Welcome, {user?.name}!</h2>
      </article>
    )
  )
}

export default Profile