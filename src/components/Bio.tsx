import React from 'react'
import Pic from './Pic'
import { Container, Typography } from '@material-ui/core'
import PaddedBox from './util/PaddedBox'
import { Link as ReachLink } from '@reach/router'
import ColorLink from './util/Link'

interface BioProps {
  name: string;
  imageSrc: string;
}

const Bio: React.FC<BioProps> = (props) => {

  return (

    <Container >
      <Typography align='center' component='span'>
        <PaddedBox size='large'>
          <ReachLink to='/'>
            <Pic altText={props.name} src={props.imageSrc} />
          </ReachLink>
          <PaddedBox size='large'>
            <Typography variant='h4'>{props.name}</Typography>
          </PaddedBox>
          <Typography variant='body1'>Hi! This is where I keep my thoughts. Currently there's just a <ColorLink to='/blog'>blog</ColorLink>, but I plan for this site to be a freeform wiki of notes and ideas. </Typography>
        </PaddedBox>
      </Typography>
    </Container>
  )
}
export default Bio
