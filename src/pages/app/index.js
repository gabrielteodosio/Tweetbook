import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

import {
  Redirect,
  useLocation,
  Route as RRDRoute
} from 'react-router-dom'

const useQuery = () => new URLSearchParams(useLocation().search)

function App (props) {
  const query = useQuery()
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const accessToken = query.get('access_token')
    Cookies.set('gh_access_token', accessToken)
    localStorage.setItem('gh_access_token', accessToken)
    setSaved(true)
  }, [])

  return (
    <RRDRoute
      {...props}
      render={({ location }) => (
        !saved ? (
          <div>
            <h2>Validando usuário</h2>
          </div>
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location }
            }}
          />
        )
      )}
    />
  )
}

export default App
