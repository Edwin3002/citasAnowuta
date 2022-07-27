import React, { Children } from 'react'

export const PublicRoute = ({children}) => {

    // const {isAuth} = useAuth();
  return (
    <div>{children}</div>
  )
}
