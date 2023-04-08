import React from 'react'

import { Box, Container, Typography, Grid } from '@mui/material'
import { Paper } from '@mui/material'
import Card from './Card'



const Cards = () => {
  return (
    <Box>
      <Container>
        <Grid container rowSpacing={1} columnSpacing={2} >
          <Grid item xs={2}>
            <Paper square  sx={{ padding: "5px" }} >
              <Card />
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper square sx={{ padding: "5px" }} >
              <Card />
            </Paper>
          </Grid>
        </Grid>
      </Container>

    </Box>
  )
}

export default Cards