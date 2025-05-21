import React, { useContext, } from 'react'
import ThemeContext from './ThemeContext'

const ThemeContextProvider = ThemeContext.Provider

export default ThemeContextProvider

export const useTheme = () =>{
  return useContext(ThemeContext)
}