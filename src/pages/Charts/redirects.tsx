import React from 'react'
import { Redirect, RouteComponentProps } from 'react-router-dom'

// Redirects to charts but only replace the pathname
export function RedirectPathToChartsOnly({ location }: RouteComponentProps) {
  return <Redirect to={{ ...location, pathname: '/charts' }} />
}

export default RedirectPathToChartsOnly