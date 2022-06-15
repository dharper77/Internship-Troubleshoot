import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import { Grid } from '@mui/material'

const Header = () => {
  return (
    <Grid container className="header">
      {/* logo */}
      <Grid item xs={4} sx={{ padding: '0px' }}>
        <Logo />
      </Grid>

      {/* search bar */}
      <Grid item xs={4} sx={{ padding: '0px' }}>
        <SearchBar />
      </Grid>
    </Grid>
  )
}

export default Header
