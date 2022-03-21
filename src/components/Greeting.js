import react from 'react'
import {useAuth0} from '@auth0/auth0-react'


const Greeting = () => {
  const { user, isAuthenticated } = useAuth0()

  return(
    isAuthenticated && (
      <article>
        <h2>Welcome, {user?.name}!</h2>
      </article>
    )
  )
}

export default Greeting
