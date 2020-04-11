import React from 'react'
import Avatar from './Avatar'
import {  Link, Container, Typography } from '@material-ui/core'
import PBox from './util/PBox'
import { Link as ReachLink } from '@reach/router'

interface BioProps {
    name: string;
    imageSrc: string;
}

const Bio: React.FC<BioProps> = (props) => {

  return (
    
    <Container >
      <Typography align='center'>
        <PBox size='large'>
          <ReachLink to='/'>
            <Avatar altText={props.name} src={props.imageSrc}/>
          </ReachLink>
          <PBox size='large'>
            <Typography variant='h4'>{props.name}</Typography>
          </PBox>
          <Typography variant='body1'>Hi! I'm a software engineer working at <Link href='https://www.dunnhumby.com/'>dunnhumby</Link>. Currently experimenting with little projects in Unity.</Typography>
        </PBox>
      </Typography>
    </Container>
  )
}
export default Bio
