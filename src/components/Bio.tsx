import React from 'react'
import Avatar from './Avatar'
import { Box, Link, Container, Typography } from '@material-ui/core'

interface BioProps {
    name: string;
    imageSrc: string;
}

const Bio: React.FC<BioProps> = (props) => {

  return (
    
    <Container >
      <Typography align='center'>
        <Box>
          <Avatar altText={props.name} src={props.imageSrc}/>
          <h1>{props.name}</h1>
          <p>Hi! I'm a software engineer working at <Link href='https://www.dunnhumby.com/'>dunnhumby</Link>. Currently experimenting with little projects in Unity. </p>
        </Box>
      </Typography>
    </Container>
  )
}
export default Bio
