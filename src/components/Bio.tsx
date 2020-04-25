import React from 'react'
import Pic from './Pic'
import { Container, Typography } from '@material-ui/core'
import PaddedBox from './util/PaddedBox'
import { Link as ReachLink } from '@reach/router'

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
          <Typography variant='body1'>Hi! This is where I keep my thoughts. </Typography>
        </PaddedBox>
      </Typography>
    </Container>
  )
}
export default Bio
