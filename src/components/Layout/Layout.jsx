import React from 'react'
import { useSelector } from 'react-redux'

export const Layout = ({children}) => {
    const {theme}=useSelector(state=>state.ui)
  return (
    <div className={`w-full min-h-screen bg-skin-fill ${theme}`}>
        {children}
    </div>
  )
}
